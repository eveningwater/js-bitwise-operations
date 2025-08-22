<template>
    <div class="home-page">
        <header class="header">
            <div class="logo" @click="toIndexHandler">
                <span class="logo-text">{{ t('home.title') }}<span class="highlight" :lang="currentLanguage">{{ t('home.appName') }}</span></span>
            </div>
            <div class="header-controls">
                <div class="language-selector">
                    <Select
                        v-model="currentLanguage"
                        :options="languageOptions"
                        :show-flag="true"
                        @change="handleLanguageChange"
                    />
                </div>
                <div class="nav-buttons">
                    <button class="nav-button" @click="showAbout">{{ t('nav.about') }}</button>
                    <button class="github-button" @click="goToGithub">GitHub</button>
                </div>
            </div>
        </header>

        <main class="main-content">
            <div v-if="showingAbout">
                <AboutPage @back="showingAbout = false" />
            </div>
            <div v-else>
                <section class="welcome-section">
                    <h1 class="title">{{ t('home.title') }}<span class="highlight" :lang="currentLanguage">{{ t('home.appName') }}</span></h1>
                    <p class="subtitle">{{ t('home.subtitle') }}</p>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" :style="{ width: completionPercentage + '%' }"></div>
                        </div>
                        <div class="progress-text">{{ t('home.progressText') }}: {{ completionPercentage }}%</div>
                    </div>
                    <div class="action-buttons">
                        <button class="cta-button" @click="scrollToLevels">{{ t('home.startLearning') }}</button>
                        <button class="reset-button" @click="confirmResetProgress">{{ t('home.resetProgress') }}</button>
                    </div>
                </section>

                <section id="levels" class="levels-section">
                    <h2 class="section-title">{{ t('home.levelsTitle') }}</h2>
                    <div class="levels-grid">
                        <LevelCard v-for="level in levels" :key="level.id" :level="level" @select="selectLevel" />
                    </div>
                </section>

                <!-- 重置进度确认对话框 -->
                <div class="modal" v-if="showResetConfirm">
                    <div class="modal-content">
                        <h3>{{ t('home.resetConfirmTitle') }}</h3>
                        <p>{{ t('home.resetConfirmMessage') }}</p>
                        <div class="modal-buttons">
                            <button class="cancel-button" @click="showResetConfirm = false">{{ t('home.cancel') }}</button>
                            <button class="confirm-button" @click="doResetProgress">{{ t('home.confirm') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="footer">
            <p>© {{ new Date().getFullYear() }} {{ t('home.appName') }} | {{ t('home.subtitle') }}</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AboutPage from '../components/AboutPage.vue';
import LevelCard from '../components/LevelCard.vue';
import Select from '../components/Select.vue';
import { createLevelsData } from '../data/levels';
import { userProgress, isLevelCompleted, getCompletedLevels, resetProgress } from '../services/progressService';
import { useLanguage, languages, type Language } from '../i18n';

const router = useRouter();
const { currentLang, setLanguage, t } = useLanguage();
const showingAbout = ref(false);
const showResetConfirm = ref(false);

// 语言选择器
const currentLanguage = computed({
    get: () => currentLang.value,
    set: (value: Language) => setLanguage(value)
});

const languageOptions = computed(() => {
    return Object.entries(languages).map(([value, lang]) => ({
        value,
        name: lang.name,
        flag: lang.flag
    }));
});

const handleLanguageChange = (lang: string | number) => {
    setLanguage(lang as Language);
};

// 动态计算关卡完成状态
const levels = computed(() => {
    const levelsData = createLevelsData();
    return levelsData.map(level => ({
        ...level,
        completed: isLevelCompleted(level.id)
    }));
});

// 计算完成百分比
const completionPercentage = computed(() => {
    const completedCount = getCompletedLevels().length;
    const levelsData = createLevelsData();
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
function toIndexHandler() {
    if (router.currentRoute.value.name === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showingAbout.value = false;
    } else {
        router.push({ name: 'home' });
    }
}

function goToGithub() {
    window.open('https://github.com/eveningwater/js-bitwise-operations', '_blank');
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

.header .logo {
    cursor: pointer;
}

.logo-text {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.header-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

    .language-selector {
        flex: 1;
        max-width: 150px;
        height: 36px; /* 与按钮高度保持一致 */
        display: flex;
        align-items: center;
    }

    /* 移动端语言选择器优化 */
    @media (max-width: 768px) {
        .language-selector {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 42px; /* 与移动端按钮高度保持一致 */
        }
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

.github-button {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    margin-left: 1rem;
    /* Add some space between buttons */
}

.github-button:hover {
    background: rgba(255, 255, 255, 0.1);
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

/* 英文语言时添加左间距 */
.highlight[lang="en"],
.highlight[lang="en-US"] {
    margin-left: 0.5rem;
}

/* 中文语言时不添加左间距 */
.highlight[lang="zh"],
.highlight[lang="zh-CN"] {
    margin-left: 0;
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
    .header {
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
    }

    .logo-text {
        font-size: 1.5rem;
    }

    .header-controls {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }

    .language-selector {
        width: 100%;
        max-width: 200px;
        order: 1;
    }

    .nav-buttons {
        display: flex;
        gap: 0.8rem;
        width: 100%;
        justify-content: center;
        order: 2;
    }

    .nav-button,
    .github-button {
        padding: 0.7rem 1.2rem;
        font-size: 0.95rem;
        margin-left: 0;
        flex: 1;
        max-width: 140px;
        border-radius: 10px;
    }

    .main-content {
        padding: 0 1rem;
    }

    .welcome-section {
        min-height: 70vh;
        padding: 1.5rem 0;
    }

    .title {
        font-size: 2rem;
        margin-bottom: 0.8rem;
        line-height: 1.2;
    }

    .subtitle {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        padding: 0 1rem;
    }

    .progress-container {
        margin: 1.5rem 1rem;
        width: calc(100% - 2rem);
    }

    .action-buttons {
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 1.5rem;
        padding: 0 1rem;
        width: 100%;
    }

    .cta-button,
    .reset-button {
        width: 100%;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 10px;
    }

    .levels-section {
        padding: 2rem 0;
    }

    .section-title {
        font-size: 2rem;
        margin-bottom: 2rem;
        padding: 0 1rem;
    }

    .levels-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 0 1rem;
    }

    .footer {
        padding: 1.5rem 1rem;
        font-size: 0.9rem;
    }

    /* 移动端模态框优化 */
    .modal-content {
        width: 95%;
        padding: 1.5rem;
        margin: 1rem;
    }

    .modal-content h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .modal-content p {
        font-size: 0.95rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }

    .modal-buttons {
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 1.5rem;
    }

    .cancel-button,
    .confirm-button {
        width: 100%;
        padding: 0.8rem;
        font-size: 1rem;
        border-radius: 8px;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 0.8rem;
    }

    .logo-text {
        font-size: 1.3rem;
    }

    .header-controls {
        gap: 0.8rem;
    }

    .language-selector {
        max-width: 180px;
    }

    .nav-button,
    .github-button {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
        max-width: 120px;
        border-radius: 8px;
    }

    .title {
        font-size: 1.8rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .cta-button,
    .reset-button {
        padding: 0.9rem;
        font-size: 1rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .levels-grid {
        gap: 1rem;
    }

    .header-controls {
        gap: 0.6rem;
    }

    .language-selector {
        max-width: 160px;
        padding: 0.4rem;
    }

    .nav-button,
    .github-button {
        padding: 0.5rem 0.8rem;
        font-size: 0.85rem;
        max-width: 110px;
    }
}
</style>