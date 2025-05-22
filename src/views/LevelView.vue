<template>
    <div class="level-view">
        <LevelDetail :levelId="Number(id)" />
    </div>
</template>

<script setup lang="ts">
import LevelDetail from '../components/LevelDetail.vue';

// 接收路由参数
defineProps<{
    id: string
}>();

</script>

<style scoped>
.level-view {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
}
</style>