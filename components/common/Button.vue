<template>
    <button :type="type"
        class="cursor-pointer mt-2 px-6 py-2 rounded-full bg-darken-blue disabled:bg-darken-blue/30 text-white disabled:cursor-not-allowed"
        :disabled="disabled">
        {{ text }}
    </button>
</template>
<script setup>
import { defineProps } from 'vue';

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