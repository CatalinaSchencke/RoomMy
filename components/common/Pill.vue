<template>
    <div class="inline-flex bg-secondary text-white px-4 py-1 rounded-full font-bold tracking-widest">
        {{ text }}
    </div>
</template>
<script setup>

const props = defineProps({
    text: String,
});

</script>