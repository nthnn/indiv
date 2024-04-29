<script lang="ts">
export default {
  props: {
    title: { type: String },
    message: { type: String },
    previousButton: { type: String },
    nextButton: { type: String },
    banner: { type: String },
    answer: { type: String },
    onNext: { type: Function },
    onPrevious: { type: Function },
  },
};
</script>

<template>
  <div class="background d-inline-block" align="left">
    <div class="window glass active">
      <div class="title-bar">
        <div class="title-bar-text">{{ title }}</div>
        <div class="title-bar-controls">
          <RouterLink to="/"><button aria-label="Close"></button></RouterLink>
        </div>
      </div>

      <div class="window-body has-space">
        <center>
          <img :src="banner" class="glitch text twitch-effect medium" />
        </center>
        <hr />

        <b>{{ message }}</b>
        <p v-html="answer"></p>
        <hr />
        <div class="row">
          <div class="col-6">
            <button :onclick="onPrevious">{{ previousButton }}</button>
          </div>

          <div class="col-6" align="right">
            <button :onclick="onNext">{{ nextButton }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
