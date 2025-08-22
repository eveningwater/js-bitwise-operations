<template>
    <div class="about-page">
        <h1 class="about-title">关于位运算</h1>

        <div class="about-section">
            <h2>什么是位运算？</h2>
            <p>
                位运算是直接对二进制位进行操作的运算。在JavaScript中，位运算可以用于处理整数的二进制表示，
                执行效率高，在特定场景下能够大幅提升性能。
            </p>
            <p>
                所有的数字在计算机内部都是以二进制形式存储的，位运算直接操作这些二进制位，
                因此在某些场景下比普通的算术运算更高效。
            </p>
        </div>

        <div class="about-section">
            <h2>JavaScript中的位运算符</h2>

            <div class="operator-card">
                <div class="operator-symbol">&</div>
                <div class="operator-info">
                    <h3>按位与（AND）</h3>
                    <p>对两个操作数的每一位执行与操作。只有两个位都为1时，结果才为1，否则为0。</p>
                    <div class="operator-example">
                        <code>5 & 3 = 1</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div>3 = 011</div>
                            <div>& = 001 (十进制的1)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">|</div>
                <div class="operator-info">
                    <h3>按位或（OR）</h3>
                    <p>对两个操作数的每一位执行或操作。只要有一个位为1，结果就为1，否则为0。</p>
                    <div class="operator-example">
                        <code>5 | 3 = 7</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div>3 = 011</div>
                            <div>| = 111 (十进制的7)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">^</div>
                <div class="operator-info">
                    <h3>按位异或（XOR）</h3>
                    <p>对两个操作数的每一位执行异或操作。两个位不同时，结果为1，相同时为0。</p>
                    <div class="operator-example">
                        <code>5 ^ 3 = 6</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div>3 = 011</div>
                            <div>^ = 110 (十进制的6)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">~</div>
                <div class="operator-info">
                    <h3>按位非（NOT）</h3>
                    <p>对操作数的每一位执行非操作，即将0变为1，将1变为0。</p>
                    <div class="operator-example">
                        <code>~5 = -6</code>
                        <div class="binary-explanation">
                            <div>5 = 00000000000000000000000000000101</div>
                            <div>~ = 11111111111111111111111111111010 (十进制的-6)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">&lt;&lt;</div>
                <div class="operator-info">
                    <h3>左移</h3>
                    <p>将操作数的所有位向左移动指定的位数，右侧补0。</p>
                    <div class="operator-example">
                        <code>5 &lt;&lt; 1 = 10</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div> 5 &lt;&lt; 1=1010 (十进制的10)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">&gt;&gt;</div>
                <div class="operator-info">
                    <h3>右移</h3>
                    <p>将操作数的所有位向右移动指定的位数，左侧补符号位（正数补0，负数补1）。</p>
                    <div class="operator-example">
                        <code>5 >> 1 = 2</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div>&gt;&gt; 1 = 010 (十进制的2)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">&gt;&gt;&gt;</div>
                <div class="operator-info">
                    <h3>无符号右移</h3>
                    <p>将操作数的所有位向右移动指定的位数，左侧始终补0。</p>
                    <div class="operator-example">
                        <code>-5 &gt;&gt;&gt; 1 = 2147483645</code>
                        <div class="binary-explanation">
                            <div>-5 = 11111111111111111111111111111011</div>
                            <div>&gt;&gt;&gt; 1 = 01111111111111111111111111111101 (十进制的2147483645)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-section">
            <h2>位运算的应用场景</h2>
            <ul class="application-list">
                <li>
                    <strong>权限控制：</strong> 使用位掩码表示不同的权限，通过位运算快速检查和修改权限。
                </li>
                <li>
                    <strong>图形处理：</strong> 在图像处理中，位运算可用于颜色混合、像素操作等。
                </li>
                <li>
                    <strong>性能优化：</strong> 在某些场景下，使用位运算替代乘除法可以提高性能。例如，<code>x &lt;&lt; 1</code> 等价于
                    <code>x * 2</code>。
                </li>
                <li>
                    <strong>数据压缩：</strong> 利用位运算可以在有限的空间内存储更多信息。
                </li>
                <li>
                    <strong>加密算法：</strong> 许多加密算法使用位运算作为基本操作。
                </li>
                <li>
                    <strong>游戏开发：</strong> 在游戏开发中，位运算常用于碰撞检测、状态管理等。
                </li>
            </ul>
        </div>

        <div class="about-section">
            <h2>关于本应用</h2>
            <p>
                「位运算大师」是一个互动式学习平台，旨在帮助前端开发者和JavaScript学习者掌握位运算的概念和应用。
                通过一系列精心设计的关卡，你将逐步学习各种位运算符的用法和实际应用场景。
            </p>
            <p>
                每个关卡都包含理论知识讲解、编程挑战和即时反馈，帮助你巩固所学知识。
                完成所有关卡后，你将能够自信地在实际项目中应用位运算技巧。
            </p>
        </div>

        <div class="back-button-container">
            <button class="back-button" @click="$emit('back')">返回主页</button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits<{
    (e: 'back'): void
}>();
</script>

<style scoped>
.about-page {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    color: #fff;
}

.about-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about-section {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 2rem;
}

.about-section h2 {
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #ff7e5f;
}

.about-section p {
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.operator-card {
    display: flex;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    margin-bottom: 1.5rem;
    overflow: hidden;
}

.operator-symbol {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    width: 100px;
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    color: white;
}

.operator-info {
    flex: 1;
    padding: 1.5rem;
}

.operator-info h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
}

.operator-example {
    margin-top: 1rem;
    background: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 8px;
    font-family: 'Consolas', 'Monaco', monospace;
}

.operator-example code {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: #ff7e5f;
}

.binary-explanation {
    font-size: 0.9rem;
    opacity: 0.8;
}

.application-list {
    padding-left: 1.5rem;
}

.application-list li {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.application-list strong {
    color: #ff7e5f;
}

.back-button-container {
    text-align: center;
    margin-top: 3rem;
}

.back-button {
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
}

.back-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 126, 95, 0.3);
}

@media (max-width: 768px) {
    .about-page {
        padding: 1.5rem 1rem;
    }

    .about-title {
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
    }

    .about-section {
        padding: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .about-section h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .about-section p {
        font-size: 1rem;
        line-height: 1.5;
    }

    .operator-card {
        flex-direction: column;
        margin-bottom: 1.2rem;
    }

    .operator-symbol {
        width: 100%;
        padding: 1rem 0;
        font-size: 2rem;
    }

    .operator-info {
        padding: 1.2rem;
    }

    .operator-info h3 {
        font-size: 1.3rem;
        margin-bottom: 0.8rem;
    }

    .operator-example {
        margin-top: 0.8rem;
        padding: 0.8rem;
        font-size: 0.9rem;
    }

    .operator-example code {
        font-size: 1rem;
        margin-bottom: 0.8rem;
        word-break: break-all;
        overflow-wrap: break-word;
    }

    .binary-explanation {
        font-size: 0.85rem;
        line-height: 1.4;
    }

    .application-list {
        padding-left: 1.2rem;
    }

    .application-list li {
        margin-bottom: 0.8rem;
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .back-button-container {
        margin-top: 2rem;
    }

    .back-button {
        width: 100%;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 10px;
    }
}

@media (max-width: 480px) {
    .about-page {
        padding: 1rem 0.8rem;
    }

    .about-title {
        font-size: 1.8rem;
        margin-bottom: 1.2rem;
    }

    .about-section {
        padding: 1.2rem;
        margin-bottom: 1.2rem;
        border-radius: 12px;
    }

    .about-section h2 {
        font-size: 1.3rem;
        margin-bottom: 0.8rem;
    }

    .about-section p {
        font-size: 0.95rem;
        line-height: 1.4;
    }

    .operator-card {
        margin-bottom: 1rem;
        border-radius: 10px;
    }

    .operator-symbol {
        padding: 0.8rem 0;
        font-size: 1.8rem;
    }

    .operator-info {
        padding: 1rem;
    }

    .operator-info h3 {
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
    }

    .operator-example {
        margin-top: 0.6rem;
        padding: 0.6rem;
        font-size: 0.85rem;
    }

    .operator-example code {
        font-size: 0.9rem;
        margin-bottom: 0.6rem;
    }

    .binary-explanation {
        font-size: 0.8rem;
    }

    .application-list {
        padding-left: 1rem;
    }

    .application-list li {
        margin-bottom: 0.6rem;
        font-size: 0.9rem;
    }

    .back-button {
        padding: 0.9rem;
        font-size: 1rem;
    }
}
</style>