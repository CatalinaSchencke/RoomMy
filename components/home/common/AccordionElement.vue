<template>
    <div>
        <button @click="toggleAccordion" type="button"
            class="accordion-button flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 hover:bg-gray-100"
            :class="id == 1 ? ' rounded-t-xl' : ''">
            <span>
                {{ title }}
            </span>
            <svg class="transition-all duration-500 w-6 h-6 shrink-0" :class="accordionToggleIcon" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div>
            <div class="border border-b-0 border-gray-200 transition-[max-height] duration-500 overflow-hidden"
                :class="accordionToggleContent">
                <p class="mb-2 text-gray-500 p-5">
                    {{ content }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>

import { computed } from 'vue';

const props = defineProps(
    {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        open: {
            type: Boolean,
            required: false,
            default: false
        }
    }
);

const emit = defineEmits(['toggleAccordion']);

const toggleAccordion = () => {
    emit('toggleAccordion', props.id);
}

const accordionToggleContent = computed(() => {
    return props.open ? 'max-h-[200px]' : 'max-h-[0]';
})

const accordionToggleIcon = computed(() => {
    return props.open ? 'rotate-0' : '-rotate-180';
});


</script>