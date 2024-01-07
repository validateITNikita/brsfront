<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
const tabs = ref<
    {
        tab: string;
        route: string;
    }[]
>([
    {
        tab: "MINT",
        route: "/",
    },
    {
        tab: "ABOUT",
        route: "/about",
    },
    {
        tab: "FAQ",
        route: "/faq",
    },
]);

const isEnabled = ref(false);
const navbar = ref<null | HTMLDivElement>(null);
onClickOutside(navbar, () => {
    isEnabled.value = false;
    console.log("tested");
});
</script>

<template>
    <div class="w-screen overflow-hidden">
        <!-- ? Tabs on small screens -->
        <Transition name="bounce">
            <div
                v-if="isEnabled"
                class="text-xl fixed left-0 h-screen w-full bg-black/90 flex justify-center items-center z-90"
            >
                <div
                    class="bg-buttons rounded-xl w-1/2 relative max-w-[500px] xs:h-[80vh] sm:max-h-[500px] flex flex-col items-center justify-center z-100 select-none"
                    ref="navbar"
                >
                    <div class="h-[20%] mb-4">
                        <!-- ? exit icon -->
                        <div
                            class="absolute top-4 right-4 opacity-50 hover:opacity-100 duration-100 cursor-pointer"
                            @click="isEnabled = !isEnabled"
                        >
                            <Icon name="ic:sharp-close" size="24" />
                        </div>
                        <!-- ? logo icon -->
                        <div class="absolute top-4 left-4 opacity-50">
                            <IconsAnimalLogo />
                        </div>
                    </div>
                    <!-- ? tabs -->
                    <div
                        v-for="(tab, index) in tabs"
                        class="h-fit"
                        :key="index"
                    >
                        <div
                            class="opacity-50 hover:opacity-100 duration-150 cursor-pointer xs:text-base sm:text-xl"
                        >
                            {{ tab }}
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        <div
            class="block md:hidden text-lg md:text-2xl bg-accent/50 h-fit py-2 p-4 text-black shadow-black/20 shadow-lg select-none"
        >
            <div class="flex items-center justify-between">
                <div class="flex md:hidden">
                    <Icon
                        name="icon-park-outline:hamburger-button"
                        size="30"
                        class="cursor-pointer"
                        @click="isEnabled = !isEnabled"
                    />
                </div>
                <div class="hidden md:flex">
                    <IconsAnimalLogo />
                </div>
                <div
                    class="hidden md:flex md:flex-1 gap-x-6 items-center justify-center font-semibold"
                >
                    <div v-for="(tab, index) in tabs" class="flex">
                        <div
                            class="opacity-50 hover:opacity-100 duration-150 cursor-pointer"
                        >
                            {{ tab }}
                        </div>
                        <UIDivider v-if="index != tabs.length - 1" />
                    </div>
                </div>
                <div class="">
                    <UIButton> Connect wallet </UIButton>
                </div>
            </div>
        </div>
        <div
            class="hidden md:block bg-accent/50 h-fit text-black shadow-black/50 shadow-xl"
        >
            <div
                class="flex items-center justify-between text-lg h-full py-4 px-8 select-none"
            >
                <div class="font-bold flex space-x-2 items-end">
                    <div>
                        <IconsAnimalLogo />
                    </div>
                    <div class="font-500">ANIMALS</div>
                </div>
                <div class="flex gap-x-6 font-semibold">
                    <div v-for="{tab, route}, index in tabs" class="flex">
                        <NuxtLink
                            :to="route"
                            class="opacity-50 hover:opacity-100 duration-150 cursor-pointer text-2xl"
                        >
                            {{ tab }}
                        </NuxtLink>
                        <UIDivider v-if="index != tabs.length - 1" />
                    </div>
                </div>
                <div class="">
                    <UIButton>Connect wallet</UIButton>
                </div>
            </div>
        </div>
    </div>
</template>
