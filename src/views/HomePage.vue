<template>
    <div class="home-page">
        <header class="header">
            <div class="logo">
                <span class="logo-text">位运算大师</span>
            </div>
            <div class="nav-buttons">
                <button class="nav-button" @click="showAbout">关于</button>
            </div>
        </header>

        <main class="main-content">
            <div v-if="showingAbout">
                <AboutPage @back="showingAbout = false" />
            </div>
            <div v-else>
                <section class="welcome-section">
                    <h1 class="title">欢迎来到<span class="highlight">位运算大师</span></h1>
                    <p class="subtitle">通过互动游戏掌握 JavaScript 位运算</p>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" :style="{ width: completionPercentage + '%' }"></div>
                        </div>
                        <div class="progress-text">完成进度: {{ completionPercentage }}%</div>
                    </div>
                    <div class="action-buttons">
                        <button class="cta-button" @click="scrollToLevels">开始学习</button>
                        <button class="reset-button" @click="confirmResetProgress">重置进度</button>
                    </div>
                </section>

                <section id="levels" class="levels-section">
                    <h2 class="section-title">学习关卡</h2>
                    <div class="levels-grid">
                        <LevelCard v-for="level in levels" :key="level.id" :level="level" @select="selectLevel" />
                    </div>
                </section>

                <!-- 重置进度确认对话框 -->
                <div class="modal" v-if="showResetConfirm">
                    <div class="modal-content">
                        <h3>确认重置</h3>
                        <p>你确定要重置所有学习进度吗？此操作不可撤销。</p>
                        <div class="modal-buttons">
                            <button class="cancel-button" @click="showResetConfirm = false">取消</button>
                            <button class="confirm-button" @click="doResetProgress">确认重置</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="footer">
            <p>© {{ new Date().getFullYear() }} 位运算大师 | 一个互动式 JavaScript 位运算学习平台</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AboutPage from '../components/AboutPage.vue';
import LevelCard from '../components/LevelCard.vue';
import { levelsData } from '../data/levels';
import { userProgress, isLevelCompleted, getCompletedLevels, resetProgress } from '../services/progressService';

const router = useRouter();
const showingAbout = ref(false);
const showResetConfirm = ref(false);

// 动态计算关卡完成状态
const levels = computed(() => {
    return levelsData.map(level => ({
        ...level,
        completed: isLevelCompleted(level.id)
    }));
});

// 计算完成百分比
const completionPercentage = computed(() => {
    const completedCount = getCompletedLevels().length;
    const totalLevels = levelsData.length;
    return Math.round((completedCount / totalLevels) * 100) || 0;
});

onMounted(() => {
    console.log('用户进度:', userProgress.value);
});

function showAbout() {
    showingAbout.value = true;
}

function scrollToLevels() {
    document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' });
}

function selectLevel(level?: number) {
    router.push(`/level/${level}`);
}

function confirmResetProgress() {
    showResetConfirm.value = true;
}

function doResetProgress() {
    resetProgress();
    showResetConfirm.value = false;
}
</script>

<style scoped>
.home-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo-text {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-button {
    background: transparent;
    border: 2px solid rgba(255, 126, 95, 0.7);
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.nav-button:hover {
    background: rgba(255, 126, 95, 0.2);
    transform: translateY(-2px);
}

.main-content {
    flex: 1;
    padding: 0 2rem;
}

.progress-container {
    margin: 1.5rem 0;
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.progress-bar {
    height: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0.5rem;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    border-radius: 5px;
    transition: width 0.5s ease;
}

.progress-text {
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.7;
}

.action-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
}

.reset-button {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.reset-button:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* 模态框样式 */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: rgba(30, 30, 50, 0.95);
    border-radius: 12px;
    padding: 2rem;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.modal-content h3 {
    margin-top: 0;
    color: #ff7e5f;
}

.modal-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
}

.cancel-button,
.confirm-button {
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
}

.cancel-button {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.confirm-button {
    background: #ff5252;
    color: white;
}

.cancel-button:hover {
    background: rgba(255, 255, 255, 0.2);
}

.confirm-button:hover {
    background: #ff3838;
}

.welcome-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 80vh;
    padding: 2rem 0;
}

.title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: white;
}

.highlight {
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    color: rgba(255, 255, 255, 0.8);
}

.cta-button {
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
}

.cta-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 126, 95, 0.3);
}

.levels-section {
    padding: 4rem 0;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: white;
}

.levels-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.footer {
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
    .title {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.2rem;
    }

    .levels-grid {
        grid-template-columns: 1fr;
    }
}
</style>