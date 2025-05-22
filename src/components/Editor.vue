<template>
    <div ref="editorRef" class="monaco-editor-container"></div>
</template>

<script setup lang="ts">
import {
    onUnmounted,
    defineEmits,
    defineProps,
    onMounted,
    ref,
    toRaw,
    watch,
    nextTick,
    PropType
} from "vue";

import { debounce } from "lodash-es";
import loader from "@monaco-editor/loader";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
    modelValue: {
        type: String,
        default: ""
    },
    options: {
        type: Object as PropType<monaco.editor.IStandaloneEditorConstructionOptions>,
        default: () => ({})
    },
});


const editorRef = ref<HTMLElement | null>(null);
const editorLoader = ref<ReturnType<typeof loader.init> | null>(null);
const editorInstance = ref<ReturnType<typeof monaco.editor.create> | null>(null);
const debouncedUpdateModelValue = debounce(() => {
    emits("update:modelValue", toRaw(editorInstance.value)!.getValue());
}, 500);

async function increment() {
    await nextTick();
    editorLoader.value = loader.init();
    if (editorRef.value && !editorInstance.value) {
        try {
            const instance = await editorLoader.value;
            editorInstance.value = instance.editor.create(editorRef.value!, {
                value: props.modelValue,
                language: "javascript",
                ...props.options,
            });
            editorInstance.value.onDidChangeModelContent(() => {
                debouncedUpdateModelValue();
            });
        } catch (error) {
            console.error("Failed to load Monaco editor:", error);
        }
    }
}

onMounted(() => {
    increment();
});

watch(
    () => props.modelValue,
    (newVal) => {
        let currValue = toRaw(editorInstance.value)?.getValue();
        if (newVal !== currValue) {
            toRaw(editorInstance.value)?.setValue(newVal);
        }
    },
    { deep: true }
);

onUnmounted(() => {
    debouncedUpdateModelValue.cancel();
    editorLoader.value?.cancel();
});
</script>
<style scoped>
.monaco-editor-container {
    max-width: 1000px;
}
</style>