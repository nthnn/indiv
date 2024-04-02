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
    background: black;
    background-image: url("../assets/background.gif");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    height: 100% !important;
    width: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.background {
    transform: scale(1.1);
}
</style>