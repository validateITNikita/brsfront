<template>
    <div class="min-w-screen min-h-screen overflow-clip">
        <NavBar />
        <NuxtPage />
    </div>
</template>
<style>
@import "@unocss/reset/tailwind-compat.css";
@import "@/styles/basic.css";

.bounce-enter-active {
    animation: bounce-in 0.3s;
}

.bounce-leave-active {
    animation: bounce-out 0.3s;
}

@keyframes bounce-in {
    0% {
        transform: translateY(100%);
    }
    60% {
        transform: translateY(-10px);
    }
    80% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes bounce-out {
    0% {
        transform: translateY(0);
    }
    20% {
        transform: translateY(-5px);
    }
    40%,
    45% {
        opacity: 1;
        transform: translateY(20px);
    }
    100% {
        opacity: 0;
        transform: translateY(-100%);
    }
}
</style>
