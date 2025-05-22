<template>
    <div class="level-detail">
        <div class="level-header">
            <h2 class="level-title">{{ currentLevel.name }}</h2>
            <div class="level-progress">
                <span>关卡 {{ currentLevel.id }}/{{ totalLevels }}</span>
                <div class="completion-badge" v-if="isLevelCompleted(currentLevel.id)">
                    <span class="badge-icon">✓</span> 已完成
                </div>
            </div>
        </div>

        <div class="level-content" :data-mobile-view="mobileView">
            <!-- 理论知识部分 -->
            <div class="theory-section">
                <h3>知识点</h3>
                <div class="theory-content" v-html="highlightedTheory"></div>
            </div>

            <!-- 挑战部分 -->
            <div class="challenge-section">
                <h3>挑战</h3>
                <div class="challenge-description">
                    {{ currentLevel.challenge }}
                </div>

                <!-- 代码编辑器 -->
                <div class="code-editor">
                    <div class="editor-header">
                        <span>JavaScript</span>
                        <div class="editor-actions">
                            <button class="reset-code-button" @click="resetCode" title="重置代码">
                                ↺
                            </button>
                            <button class="run-button" @click="runCode">运行代码</button>
                        </div>
                    </div>

                    <div class="editor-container">
                        <Editor :value="code" :options="{
                            language: 'javascript',
                            theme: 'vs-dark',
                            automaticLayout: true,
                            minimap: { enabled: false },
                            scrollBeyondLastLine: false,
                            fontSize: 14,
                            lineNumbers: 'on',
                            renderLineHighlight: 'all',
                            tabSize: 2,
                        }" @update:value="handleCodeChange" />
                    </div>
                </div>

                <!-- 运行结果 -->
                <div class="result-section" v-if="hasRun">
                    <h4>运行结果</h4>
                    <div class="result-output" :class="{ 'result-success': isCorrect, 'result-error': !isCorrect }">
                        <div class="result-icon">{{ isCorrect ? '✓' : '✗' }}</div>
                        <div class="result-message">
                            {{ resultMessage }}
                            <div v-if="isCorrect" class="celebration-message">
                                🎉 太棒了！你已经掌握了这个概念！
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 反馈系统 -->
                <div class="feedback-section" v-if="hasRun && !isCorrect">
                    <h4>需要帮助？</h4>
                    <div class="feedback-options">
                        <button class="feedback-button" @click="showHint = true">
                            <span class="feedback-icon">💡</span> 查看提示
                        </button>
                        <button class="feedback-button" @click="showSolution = !showSolution">
                            <span class="feedback-icon">📝</span> {{ showSolution ? '隐藏解答' : '查看解答' }}
                        </button>
                    </div>
                    <div class="solution-content" v-if="showSolution">
                        <h5>参考解答</h5>
                        <pre
                            class="solution-code"><code class="language-javascript" v-html="highlightedSolution"></code></pre>
                        <div class="solution-note">记住，理解概念比记忆代码更重要！</div>
                    </div>
                </div>

                <!-- 提示部分 -->
                <div class="hint-section">
                    <button class="hint-button" @click="showHint = !showHint">
                        <span class="hint-icon">💡</span> {{ showHint ? '隐藏提示' : '显示提示' }}
                    </button>
                    <div class="hint-content" v-if="showHint">
                        <div class="hint-header">提示</div>
                        <div class="hint-text">{{ currentLevel.hint }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 移动端切换视图按钮 -->
        <div class="mobile-view-toggle">
            <button :class="['toggle-button', { active: mobileView === 'theory' }]" @click="mobileView = 'theory'">
                知识点
            </button>
            <button :class="['toggle-button', { active: mobileView === 'challenge' }]"
                @click="mobileView = 'challenge'">
                挑战
            </button>
        </div>

        <div class="level-navigation">
            <button class="nav-button prev-button" :disabled="currentLevel.id === 1" @click="navigateToPrevious">
                上一关
            </button>
            <button class="nav-button home-button" @click="navigateToHome">
                返回首页
            </button>
            <button class="nav-button next-button"
                :disabled="currentLevel.id === totalLevels || !isLevelCompleted(currentLevel.id)"
                @click="navigateToNext">
                {{ isLevelCompleted(currentLevel.id) ? '下一关' : '完成当前关卡以继续' }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { levelsData } from '../data/levels';
import { completeLevel, isLevelCompleted, setCurrentLevel } from '../services/progressService';
import { evalLike } from '../utils';
import Editor from './Editor.vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import { debounce, isFunction } from 'lodash-es'; // 引入 lodash 的防抖函数

// 注册JavaScript语言到highlight.js
hljs.registerLanguage('javascript', javascript);

// 定义属性
const props = defineProps<{
    levelId: number;
}>();

// 路由
const router = useRouter();

// 计算属性
const totalLevels = computed(() => levelsData.length);

const currentLevel = computed(() => {
    const level = levelsData.find(l => l.id === props.levelId) || levelsData[0];
    return level;
});

// 状态
const code = ref(currentLevel.value?.solutionTemplate || '');

// 防抖处理编辑器内容变化
const handleCodeChange = debounce((newValue: string) => {
    code.value = newValue;
}, 300);
const hasRun = ref(false);
const isCorrect = ref(false);
const resultMessage = ref('');
const showHint = ref(false);
const showSolution = ref(false);
const mobileView = ref('theory'); // 移动端视图状态：'theory' 或 'challenge'
const highlightedSolution = ref('');
const highlightedTheory = ref('');



// 监听关卡变化，重置状态
watch(() => props.levelId, () => {
    resetState();
    setCurrentLevel(props.levelId);
});

// 高亮解决方案代码
const highlightSolution = () => {
    if (currentLevel.value && currentLevel.value.solution) {
        highlightedSolution.value = hljs.highlight(
            currentLevel.value.solution,
            { language: 'javascript' }
        ).value;
    }
};

// 高亮理论内容中的代码
const highlightTheory = () => {
    if (!currentLevel.value || !currentLevel.value.theory) return;

    // 创建临时DOM元素来解析HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = currentLevel.value.theory;

    // 查找所有代码块并高亮
    const codeBlocks = tempDiv.querySelectorAll('pre code');
    codeBlocks.forEach(codeBlock => {
        const code = codeBlock.textContent || '';
        const highlighted = hljs.highlight(code, { language: 'javascript' }).value;
        codeBlock.innerHTML = highlighted;
    });

    // 查找所有内联代码并高亮
    const inlineCodes = tempDiv.querySelectorAll('code:not(pre code)');
    inlineCodes.forEach(inlineCode => {
        const code = inlineCode.textContent || '';
        const highlighted = hljs.highlight(code, { language: 'javascript' }).value;
        inlineCode.innerHTML = highlighted;
    });

    // 更新高亮后的内容
    highlightedTheory.value = tempDiv.innerHTML;
};

// 检测设备类型并设置视图
const checkDeviceAndSetView = () => {
    if (window.innerWidth <= 768) {
        // 移动设备默认显示理论部分
        mobileView.value = 'theory';
    }
};

// 重置状态
const resetState = () => {
    hasRun.value = false;
    isCorrect.value = isLevelCompleted(props.levelId);
    resultMessage.value = '';
    showHint.value = false;
    showSolution.value = false;

    // 更新高亮的解决方案和理论内容
    nextTick(() => {
        highlightSolution();
        highlightTheory();
    });
};

// 重置代码
const resetCode = () => {
    hasRun.value = false;
    isCorrect.value = false;
    resultMessage.value = '';
};

// 运行代码
const runCode = () => {
    hasRun.value = true;

    // 在移动设备上，自动切换到挑战视图以查看结果
    if (window.innerWidth <= 768) {
        mobileView.value = 'challenge';
    }

    try {
        // 执行用户代码并测试
        const testResults = currentLevel.value.testCases.map(testCase => {
            try {
                // 创建一个安全的执行环境
                const userFunction = evalLike<(...args: any[]) => any>(code.value);
                if (!isFunction(userFunction)) {
                    return;
                }
                const result = userFunction(testCase.input);
                // 比较结果
                const passed = compareResults(result, testCase.expected);

                return {
                    passed,
                    input: testCase.input,
                    expected: testCase.expected,
                    actual: result
                };
            } catch (error) {
                return {
                    passed: false,
                    input: testCase.input,
                    error: error instanceof Error ? error.message : String(error)
                };
            }
        });

        const allPassed = testResults.every(result => result!.passed);
        isCorrect.value = allPassed;

        if (allPassed) {
            resultMessage.value = '恭喜！你的代码通过了所有测试用例！';
            // 标记关卡为已完成
            completeLevel(props.levelId);
        } else {
            const failedTest = testResults.find(result => !result!.passed);
            if (failedTest && 'error' in failedTest) {
                resultMessage.value = `代码执行错误: ${failedTest.error}`;
            } else if (failedTest) {
                resultMessage.value = `测试未通过: 输入 ${failedTest.input}, 期望 ${failedTest.expected}, 实际 ${failedTest.actual}`;
            }
        }
    } catch (error) {
        isCorrect.value = false;
        resultMessage.value = `代码执行错误: ${error instanceof Error ? error.message : String(error)}`;
    }
};

// 比较结果（处理不同类型的比较）
const compareResults = (actual: any, expected: any): boolean => {
    // 处理数组比较
    if (Array.isArray(expected) && Array.isArray(actual)) {
        if (expected.length !== actual.length) return false;
        return expected.every((val, index) => compareResults(actual[index], val));
    }

    // 处理对象比较
    if (typeof expected === 'object' && expected !== null &&
        typeof actual === 'object' && actual !== null) {
        const expectedKeys = Object.keys(expected);
        const actualKeys = Object.keys(actual);
        if (expectedKeys.length !== actualKeys.length) return false;
        return expectedKeys.every(key => compareResults(actual[key], expected[key]));
    }

    // 基本类型比较
    return actual === expected;
};

// 导航方法
const navigateToNext = () => {
    if (props.levelId < totalLevels.value) {
        router.push({ name: 'level', params: { id: props.levelId + 1 } });
    }
};

const navigateToPrevious = () => {
    if (props.levelId > 1) {
        router.push({ name: 'level', params: { id: props.levelId - 1 } });
    }
};

const navigateToHome = () => {
    router.push({ name: 'home' });
};

// 组件挂载时初始化
onMounted(() => {
    resetState();
    setCurrentLevel(props.levelId);

    // 高亮解决方案代码和理论内容
    highlightSolution();
    highlightTheory();

    // 如果关卡已完成，可以预填充解决方案
    if (isLevelCompleted(props.levelId)) {
        isCorrect.value = true;
    }

    // 检测设备类型，设置默认视图
    checkDeviceAndSetView();

    // 监听窗口大小变化
    window.addEventListener('resize', checkDeviceAndSetView);
});

// 组件卸载前清理
onBeforeUnmount(() => {
    window.removeEventListener('resize', checkDeviceAndSetView);
});
</script>

<style scoped>
.level-detail {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    color: #fff;
}

.level-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.level-title {
    font-size: 2rem;
    margin: 0;
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.level-progress {
    font-size: 1rem;
    opacity: 0.7;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.completion-badge {
    display: flex;
    align-items: center;
    background: rgba(76, 175, 80, 0.2);
    color: #4CAF50;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 600;
}

.badge-icon {
    margin-right: 0.3rem;
}

.level-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.theory-section,
.challenge-section {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 1.5rem;
}

.theory-section h3,
.challenge-section h3 {
    margin-top: 0;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.theory-content {
    line-height: 1.6;
}

.theory-content :deep(pre) {
    background-color: #1e1e1e;
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    overflow-x: auto;
}

.challenge-description {
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.code-editor {
    background: #1e1e1e;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1.5rem;
}

.editor-header {
    background: #2d2d2d;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.editor-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.reset-code-button {
    background: transparent;
    color: #d4d4d4;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
}

.reset-code-button:hover {
    background: rgba(255, 255, 255, 0.1);
}

.run-button {
    background: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
}

.run-button:hover {
    background: #45a049;
}

.monaco-editor-container {
    width: 100%;
    height: 200px;
}

.result-section {
    margin-top: 1.5rem;
}

.result-output {
    padding: 1rem;
    border-radius: 8px;
    font-family: 'Consolas', 'Monaco', monospace;
    white-space: pre-wrap;
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
}

.result-icon {
    font-size: 1.2rem;
    font-weight: bold;
}

.result-message {
    flex: 1;
}

.celebration-message {
    margin-top: 0.8rem;
    font-style: italic;
    opacity: 0.8;
}

.result-success {
    background: rgba(76, 175, 80, 0.1);
    border: 1px solid rgba(76, 175, 80, 0.3);
}

.result-error {
    background: rgba(244, 67, 54, 0.1);
    border: 1px solid rgba(244, 67, 54, 0.3);
}

/* 反馈系统样式 */
.feedback-section {
    margin-top: 1.5rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
}

.feedback-options {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;
}

.feedback-button {
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.feedback-button:hover {
    background: rgba(255, 255, 255, 0.1);
}

.feedback-icon {
    font-size: 1.1rem;
}

.solution-content {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
}

.solution-code {
    background: #1e1e1e;
    padding: 1rem;
    border-radius: 4px;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 14px;
    overflow-x: auto;
    margin: 0.5rem 0;
}

.solution-note {
    font-style: italic;
    opacity: 0.7;
    margin-top: 0.5rem;
    font-size: 0.9rem;
}

/* 提示部分样式 */
.hint-section {
    margin-top: 1.5rem;
}

.hint-button {
    background: transparent;
    color: #ff7e5f;
    border: 1px solid #ff7e5f;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.hint-button:hover {
    background: rgba(255, 126, 95, 0.1);
}

.hint-icon {
    font-size: 1.1rem;
}

.hint-content {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
}

.hint-header {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #ff7e5f;
}

.hint-text {
    line-height: 1.6;
}

/* 移动端视图切换 */
.mobile-view-toggle {
    display: none;
    margin: 1rem 0;
    justify-content: center;
    gap: 0.5rem;
}

.toggle-button {
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
}

.toggle-button.active {
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    font-weight: 600;
}

.level-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-button {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    border: none;
}

.prev-button {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.prev-button:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
}

.home-button {
    background: rgba(255, 255, 255, 0.15);
    color: white;
}

.home-button:hover {
    background: rgba(255, 255, 255, 0.25);
}

.next-button {
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    color: white;
}

.next-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 126, 95, 0.3);
}

.nav-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* 高亮代码样式覆盖 */
:deep(.hljs) {
    background: transparent;
    padding: 0;
}

@media (max-width: 768px) {
    .level-detail {
        padding: 1.5rem 1rem;
    }

    .level-content {
        grid-template-columns: 1fr;
    }

    .level-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .level-progress {
        margin-top: 0.5rem;
    }

    .mobile-view-toggle {
        display: flex;
    }

    .theory-section {
        display: none;
    }

    .challenge-section {
        display: none;
    }

    .level-content[data-mobile-view="theory"] .theory-section {
        display: block;
    }

    .level-content[data-mobile-view="challenge"] .challenge-section {
        display: block;
    }

    .level-navigation {
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .nav-button {
        flex: 1;
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
        text-align: center;
    }

    .monaco-editor-container {
        height: 180px;
    }
}
</style>