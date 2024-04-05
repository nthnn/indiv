<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
*,
html,
body,
.btn {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  scroll-behavior: smooth;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100% !important;
  height: 100% !important;
  overflow-x: hidden;
  background: black;
  background-image: url("../assets/background.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
}

.background {
  transform: scale(1.2);
}

.main-window {
  height: 85vh;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
