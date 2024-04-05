<script setup lang="ts">
import { RouterLink } from "vue-router";
import Margin from "@/components/Margin.vue";
</script>

<template>
  <Margin />

  <div class="glitch text twitch-effect medium" align="center">
    <div class="col-lg-3 col-md-4 col-sm-10 mx-4 px-4">
      <div class="background">
        <div class="window glass active">
          <div class="title-bar">
            <div class="title-bar-text">Indivus</div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>

          <div class="window-body has-space">
            <center>
              <br />
              <img src="/pentagram.png" style="width: 32px !important" />
              <br /><br />
              <hr />
            </center>

            <p>
              Amidst the vast expanse of human existence, the inquiry into
              individuality emerges as a guiding light amidst the turbulent sea
              of societal norms and cultural expectations.
            </p>
            <p>
              It is a poignant inquiry that delves into the essence of our
              being, asking whether the spark of our true selves can endure the
              relentless pressures to conform. In this quest for authenticity,
              we grapple with the shadows of doubt and uncertainty, seeking to
              unravel the tangled threads of identity that bind us to the
              collective consciousness of humanity.
            </p>
            <p>
              Yet, amidst the tumult of introspection, there lies a glimmer of
              hope—a whisper that reminds us of the inherent beauty in embracing
              our quirks, flaws, and eccentricities. For it is in the raw
              authenticity of our existence that we find solace, forging a
              sanctuary of selfhood amidst the chaos of the world.
            </p>

            <hr />
            <center>
              <RouterLink to="/questions"><button>Iudicium</button></RouterLink>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Margin />
</template>
