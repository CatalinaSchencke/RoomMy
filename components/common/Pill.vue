<template>
    <div class="text-center text-white rounded-full font-bold tracking-widest uppercase">
        <slot></slot>
    </div>
</template>
<script setup>

const props = defineProps({
    text: String,
});

</script>