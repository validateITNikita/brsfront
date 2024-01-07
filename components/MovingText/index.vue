<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'

let index = ref(1);
let time = ref(3000);

const { pause, resume, isActive } = useIntervalFn(() => {
    if(index.value+1 >= titles.value.length){
        return index.value = 0;
    }
    return index.value++;
}, time.value)

const titles = ref(['COOLEST', 'CUTEST', 'NICEST', 'BEAUTY']);
const images = ref([
    "url('/bg/bg1.png')",
    "url('/bg/bg2.png')",
    "url('/bg/bg3.png')",
    "url('/bg/bg4.png')",
    "url('/bg/bg5.png')",
    "url('/bg/bg6.png')",
    "url('/bg/bg7.png')",
    "url('/bg/bg8.png')",
    "url('/bg/bg9.png')",
]);
const imagesIndex = ref(0);
const { } = useIntervalFn(() => {
    if(imagesIndex.value+1 >= images.value.length){
        return imagesIndex.value = 0;
    }
    return imagesIndex.value++;
}, time.value)

const nextImageIndex = computed(() => {
    if(imagesIndex.value+1 >= images.value.length){
        return 0;
    }
    return imagesIndex.value++;
})
</script>


<template>
    <div class="w-full grid justify-items-center relative">
        <span class="bg-clip-text text-transparent imagebg font-black text-center w-full break-all z-10 ">
            {{ titles[index] }}
        </span>
        <span class="text-black font-black text-center w-full break-all  translate-4 absolute z-0 ">
            {{ titles[index] }}
        </span>
    </div>
</template>


<style scoped>
.imagebg {
    background-position: top;
    background-size: 80%;
    object-fit: contain;
    animation: bg v-bind(time + 'ms') infinite linear reverse;
}

@keyframes bg {
    0% {
        background-position-x: -100%;
        background-image: v-bind(images[imagesIndex]);
        opacity: 0%;
    }
    10%{
        opacity: 100%;
    }
    50%{
        background-position-x: 50%;
        opacity: 100%;
    }
    90%{
        opacity: 100%;
    }
    100%{
        background-position-x: 100%;
        background-image: v-bind(images[nextImageIndex]);
        opacity: 0%;
    }
}
</style>