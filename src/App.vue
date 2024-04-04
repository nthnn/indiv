<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100% !important;
    height: 100% !important;
    background: black;
    background-image: url("../assets/background.gif");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
}

.main-window {
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
}

.background {
    transform: scale(1.2);
}
</style>