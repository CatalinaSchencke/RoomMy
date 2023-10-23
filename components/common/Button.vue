<template>
    <button
        class="cursor-pointer px-6 py-2 rounded-md bg-primary-700 disabled:bg-primary/30 text-white disabled:cursor-not-allowed"
        :disabled="disabled" :type="type">
        {{ text }}
    </button>
</template>
<script setup>

defineProps({
    text: {
        type: String,
        default: 'Botón',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button',
    }
});

</script>