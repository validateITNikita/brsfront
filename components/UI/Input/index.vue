<script setup lang="ts">
import { useMintInput } from "@/composables/useMintInput";
const { MINT_AMOUNT } = useMintInput();
</script>
<template>
    <div class="w-full flex flex-col items-center justify-center">
        <input type="range" min="1" max="100" v-model="MINT_AMOUNT" class="w-[280px] md:w-[300px]"/>
    </div>
</template>
<style scoped>
/*********** Baseline, reset styles ***********/
input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
}

/* Removes default focus */
input[type="range"]:focus {
    outline: none;
}

/******** Chrome, Safari, Opera and Edge Chromium styles ********/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
    background-color: #525252;
    border-radius: 0.5rem;
    height: 1rem;
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -4px; /* Centers thumb on the track */
    background-color: #f6ffb3;
    border-radius: 1rem;
    height: 1.5rem;
    width: 1.5rem;
}

input[type="range"]:focus::-webkit-slider-thumb {
    outline: 3px solid #f6ffb3;
    outline-offset: 0.125rem;
}

/*********** Firefox styles ***********/
/* slider track */
input[type="range"]::-moz-range-track {
    background-color: #525252;
    border-radius: 0.5rem;
    height: 1rem;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
    background-color: #f6ffb3;
    border: none; /*Removes extra border that FF applies*/
    border-radius: 1rem;
    height: 1.5rem;
    width: 1.5rem;
}

input[type="range"]:focus::-moz-range-thumb {
    outline: 3px solid #f6ffb3;
    outline-offset: 0.125rem;
}
</style>
