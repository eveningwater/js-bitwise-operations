<template>
    <div class="about-view">
        <AboutPage @back="goBack" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AboutPage from '../components/AboutPage.vue';

const router = useRouter();

const goBack = () => {
    router.push({ name: 'home' });
};
</script>

<style scoped>
.about-view {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
}
</style>