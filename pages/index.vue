<script setup lang="ts">
import slider from "vue3-slider";
import { useMintInput } from "@/composables/useMintInput";
const { MINT_AMOUNT } = useMintInput();
</script>

<template>
    <div class="overflow-clip flex">

    <!-- <div class="flex items-center w-fit mx-auto md:ml-auto mr-0 md:pr-36">
        <div class="w-[275px] flex flex-col space-y-2">
            <ClientOnly>
                <slider
                    v-model="amount"
                    color="#8C54A1"
                    track-color="#FAFBD4"
                    height="20"
                    :min="1"
                    :max="100"
                    :alwaysShowHandle="true"
                />
            </ClientOnly>
            <UIButton>
                <div
                    class="flex font-semibold text-black/70 space-x-2 align-bottom items-center justify-center"
                >
                    <div>MINT</div>
                    <span class="text-black font-black text-lg">{{
                        amount
                    }}</span>
                    <span>ANIMALS</span>
                </div>
            </UIButton>
        </div>
    </div> -->
    <div class="overflow-clip">
        <NuxtImg
            src="/first2.png"
            alt=""
            class="fixed -bottom-40 md:-bottom-16 md:-left-8 z-0 object-center overflow-clip object-contain"
        />
    </div>
    <div class="hidden md:block w-full flex flex-col items-center md:items-end justify-center z-10">
        <div class="text-7xl md:text-9xl font-black text-black/80 text-center md:text-right p-2 md:p-10 md:pb-4 select-none">
            <p class="text-5xl md:text-7xl lg:text-9xl">BRISE ANIMALS</p>
            <p class="text-7xl md:text-7xl lg:text-[8rem]">THE MOST</p>
            <p class="text-5xl md:text-7xl lg:text-[8rem] flex flex-col w-fit mx-auto md:ml-auto md:mr-0 items-center justify-center">
            <MovingText />
            </p>
        </div>
        <div class="py-4 space-y-2 w-[500px]">
            <UIInput class=""/>
            <div class="mx-auto w-fit">
                <UIButton class="w-fit py-3 text-xl">
                    MINT {{ MINT_AMOUNT }} ANIMALS
                </UIButton>
                <div class="font-semibold text-black/60 mx-auto w-fit">
                    Supply: 0 / 3000
                </div>
            </div>
        </div>
    </div>

    <div class="md:hidden">
        <div class="text-7xl md:text-9xl font-black text-black/80 text-center md:text-right p-2 md:p-10 md:pb-4 select-none">
            <p class="text-5xl md:text-7xl lg:text-9xl">BRISE ANIMALS</p>
            <p class="text-7xl md:text-7xl lg:text-[8rem]">THE MOST</p>
            <p class="text-5xl md:text-7xl lg:text-[8rem] flex flex-col w-fit mx-auto md:ml-auto md:mr-0 items-center justify-center">
            <MovingText />
            </p>
        </div>
    </div>
</div>

</template>

<style scoped>
</style>
