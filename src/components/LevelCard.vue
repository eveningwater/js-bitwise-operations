<template>
    <div class="level-card" :class="{ 'level-completed': level.completed }" @click="$emit('select', level?.id)">
        <div class="level-icon">{{ level.icon }}</div>
        <div class="level-name">{{ level.name }}</div>
        <div class="level-status" :class="{ 'completed-status': level.completed }">
            <span class="status-icon">{{ level.completed ? '✓' : '○' }}</span>
            <span>{{ level.completed ? t('level.completed') : t('level.notCompleted') }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLanguage } from '../i18n';

const { t } = useLanguage();

defineProps<{
    level: {
        id?: number;
        name?: string;
        icon?: string;
        completed?: boolean;
    }
}>();

defineEmits<{
    (e: 'select', levelId?: number): void
}>();
</script>

<style scoped>
.level-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.level-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.level-completed {
    border-color: #4CAF50;
    background: rgba(76, 175, 80, 0.1);
}

.level-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin: 0 auto 1rem;
}

.level-name {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.level-status {
    font-size: 0.9rem;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
}

.completed-status {
    color: #4CAF50;
    opacity: 1;
}

.status-icon {
    font-size: 1.1rem;
    font-weight: bold;
}
</style>