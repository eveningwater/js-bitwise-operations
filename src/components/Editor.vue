<template>
    <div ref="container" class="monaco-editor-container"></div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, PropType, ref } from 'vue'
import * as monaco from 'monaco-editor';
import loader from "@monaco-editor/loader";
const container = ref<HTMLElement | null>();
const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    options: {
        type: Object as PropType<monaco.editor.IStandaloneEditorConstructionOptions>,
        default: () => ({})
    },
})
const editor = ref<ReturnType<typeof loader.init> | null>(null);

const emit = defineEmits(['update:value']);

onMounted(() => {
    editor.value = loader.init();
    editor.value?.then((monaco) => {
        if (!container.value) {
            return;
        }
        const instance = monaco.editor.create(container.value!, {
            value: props.value,
            language: 'javascript',
            ...props.options,
        });
        instance.onDidChangeModelContent(() => {
            const value = instance?.getValue();
            if (value !== props.value) {
                emit('update:value', value);
            }
        })
    })

});

onUnmounted(() => {
    editor.value?.cancel();
})
</script>
<style scoped>
.monaco-editor-container {
    max-width: 1000px;
}
</style>