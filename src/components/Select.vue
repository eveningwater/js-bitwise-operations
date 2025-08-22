<template>
    <div class="select-container" :class="{ 'is-open': isOpen, 'is-disabled': disabled }">
        <div class="select-trigger" @click="toggleDropdown" :class="{ 'is-open': isOpen }">
            <div class="select-value">
                <span v-if="showFlag" class="option-flag">{{ selectedOption?.flag }}</span>
                <span class="option-text">{{ selectedOption?.name || placeholder }}</span>
            </div>
            <div class="select-arrow" :class="{ 'is-open': isOpen }">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        
        <div v-if="isOpen" class="select-dropdown">
            <div class="select-options">
                <div
                    v-for="option in options"
                    :key="option.value"
                    class="select-option"
                    :class="{ 'is-selected': option.value === modelValue }"
                    @click="selectOption(option)"
                >
                    <span v-if="showFlag" class="option-flag">{{ option.flag }}</span>
                    <span class="option-text">{{ option.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

export interface SelectOption {
    value: string | number;
    name: string;
    flag?: string;
}

interface Props {
    modelValue: string | number;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    showFlag?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: '请选择',
    disabled: false,
    showFlag: false
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void;
    (e: 'change', value: string | number): void;
}>();

const isOpen = ref(false);

// 计算当前选中的选项
const selectedOption = computed(() => {
    return props.options.find(option => option.value === props.modelValue);
});

// 切换下拉菜单
const toggleDropdown = () => {
    if (props.disabled) return;
    isOpen.value = !isOpen.value;
};

// 选择选项
const selectOption = (option: SelectOption) => {
    emit('update:modelValue', option.value);
    emit('change', option.value);
    isOpen.value = false;
};

// 点击外部关闭下拉菜单
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.select-container')) {
        isOpen.value = false;
    }
};

// 监听ESC键关闭下拉菜单
const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        isOpen.value = false;
    }
};

// 监听语言变化，关闭下拉菜单
const handleLanguageChange = () => {
    isOpen.value = false;
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);
    window.addEventListener('languageChanged', handleLanguageChange);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('languageChanged', handleLanguageChange);
});

// 监听modelValue变化，如果选项不存在则关闭下拉菜单
watch(() => props.modelValue, (newValue) => {
    const optionExists = props.options.some(option => option.value === newValue);
    if (!optionExists) {
        isOpen.value = false;
    }
});
</script>

<style scoped>
.select-container {
    position: relative;
    display: inline-block;
    min-width: 120px;
    user-select: none;
}

.select-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.select-trigger:hover:not(.is-disabled) {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

.select-trigger.is-open {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 126, 95, 0.5);
    box-shadow: 0 0 0 2px rgba(255, 126, 95, 0.2);
}

.select-value {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    min-width: 0;
}

.option-flag {
    font-size: 1.2rem;
    line-height: 1;
}

.option-text {
    color: #fff;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.select-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.7);
    transition: transform 0.2s ease;
    flex-shrink: 0;
}

.select-arrow.is-open {
    transform: rotate(180deg);
}

.select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(30, 30, 50, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    margin-top: 0.25rem;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    animation: dropdownFadeIn 0.2s ease;
}

@keyframes dropdownFadeIn {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.select-options {
    max-height: 200px;
    overflow-y: auto;
}

.select-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.select-option:last-child {
    border-bottom: none;
}

.select-option:hover {
    background: rgba(255, 255, 255, 0.1);
}

.select-option.is-selected {
    background: rgba(255, 126, 95, 0.2);
    color: #ff7e5f;
}

.select-option.is-selected .option-text {
    color: #ff7e5f;
}

.select-container.is-disabled .select-trigger {
    opacity: 0.5;
    cursor: not-allowed;
}

.select-container.is-disabled .select-trigger:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
}

/* 移动端优化 */
@media (max-width: 768px) {
    .select-container {
        min-width: 100px;
    }
    
    .select-trigger {
        padding: 0.6rem 0.8rem;
    }
    
    .select-option {
        padding: 0.8rem;
    }
    
    .option-text {
        font-size: 0.95rem;
    }
}

/* 滚动条样式 */
.select-options::-webkit-scrollbar {
    width: 6px;
}

.select-options::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

.select-options::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

.select-options::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}
</style>
