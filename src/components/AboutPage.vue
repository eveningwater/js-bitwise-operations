<template>
    <div class="about-page">
        <h1 class="about-title">{{ t('about.title') }}</h1>

        <div class="about-section">
            <h2>{{ t('about.whatIsBitwise') }}</h2>
            <p>
                {{ t('about.whatIsBitwiseDesc1') }}
            </p>
            <p>
                {{ t('about.whatIsBitwiseDesc2') }}
            </p>
        </div>

        <div class="about-section">
            <h2>{{ t('about.operatorsTitle') }}</h2>

            <div class="operator-card">
                <div class="operator-symbol">&</div>
                <div class="operator-info">
                    <h3>{{ t('about.andOperator') }}</h3>
                    <p>{{ t('about.andDesc') }}</p>
                    <div class="operator-example">
                        <code>5 & 3 = 1</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div>3 = 011</div>
                            <div>& = 001 ({{ t('common.decimal') }} 1)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">|</div>
                <div class="operator-info">
                    <h3>{{ t('about.orOperator') }}</h3>
                    <p>{{ t('about.orDesc') }}</p>
                    <div class="operator-example">
                        <code>5 | 3 = 7</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div>3 = 011</div>
                            <div>| = 111 ({{ t('common.decimal') }} 7)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">^</div>
                <div class="operator-info">
                    <h3>{{ t('about.xorOperator') }}</h3>
                    <p>{{ t('about.xorDesc') }}</p>
                    <div class="operator-example">
                        <code>5 ^ 3 = 6</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div>3 = 011</div>
                            <div>^ = 110 ({{ t('common.decimal') }} 6)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">~</div>
                <div class="operator-info">
                    <h3>{{ t('about.notOperator') }}</h3>
                    <p>{{ t('about.notDesc') }}</p>
                    <div class="operator-example">
                        <code>~5 = -6</code>
                        <div class="binary-explanation">
                            <div>5 = 00000000000000000000000000000101</div>
                            <div>~ = 11111111111111111111111111111010 ({{ t('common.decimal') }} -6)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">&lt;&lt;</div>
                <div class="operator-info">
                    <h3>{{ t('about.leftShift') }}</h3>
                    <p>{{ t('about.leftShiftDesc') }}</p>
                    <div class="operator-example">
                        <code>5 &lt;&lt; 1 = 10</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div> 5 &lt;&lt; 1=1010 ({{ t('common.decimal') }} 10)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">&gt;&gt;</div>
                <div class="operator-info">
                    <h3>{{ t('about.rightShift') }}</h3>
                    <p>{{ t('about.rightShiftDesc') }}</p>
                    <div class="operator-example">
                        <code>5 >> 1 = 2</code>
                        <div class="binary-explanation">
                            <div>5 = 101</div>
                            <div>&gt;&gt; 1 = 010 ({{ t('common.decimal') }} 2)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="operator-card">
                <div class="operator-symbol">&gt;&gt;&gt;</div>
                <div class="operator-info">
                    <h3>{{ t('about.unsignedRightShift') }}</h3>
                    <p>{{ t('about.unsignedRightShiftDesc') }}</p>
                    <div class="operator-example">
                        <code>-5 &gt;&gt;&gt; 1 = 2147483645</code>
                        <div class="binary-explanation">
                            <div>-5 = 11111111111111111111111111111011</div>
                            <div>&gt;&gt;&gt; 1 = 01111111111111111111111111111101 ({{ t('common.decimal') }} 2147483645)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-section">
            <h2>{{ t('about.applicationsTitle') }}</h2>
            <ul class="application-list">
                <li>
                    <strong>{{ t('about.permissionControl') }}</strong>
                </li>
                <li>
                    <strong>{{ t('about.graphicsProcessing') }}</strong>
                </li>
                <li>
                    <strong>{{ t('about.performanceOptimization') }}</strong>
                </li>
                <li>
                    <strong>{{ t('about.dataCompression') }}</strong>
                </li>
                <li>
                    <strong>{{ t('about.encryption') }}</strong>
                </li>
                <li>
                    <strong>{{ t('about.gameDevelopment') }}</strong>
                </li>
            </ul>
        </div>

        <div class="about-section">
            <h2>{{ t('about.aboutAppTitle') }}</h2>
            <p>
                {{ t('about.aboutAppDesc1') }}
            </p>
            <p>
                {{ t('about.aboutAppDesc2') }}
            </p>
        </div>

        <div class="back-button-container">
            <button class="back-button" @click="$emit('back')">{{ t('about.backToHome') }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLanguage } from '../i18n';

const { t } = useLanguage();

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