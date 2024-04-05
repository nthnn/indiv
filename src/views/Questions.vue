<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import Question from "@/components/Question.vue";
import TopMargin from "@/components/TopMargin.vue";

const index = ref(0);
const router = useRouter();

const contents: Array<Array<string>> = [
  [
    "You, Society, and Solace",
    "What defines individuality, and how does it intersect with societal norms and expectations?",
    "assets/image-1.png",
    "Assert",
    "Go back",
    "Individuality is a complex interplay of intrinsic essence and external influences, forever dancing on the threshold between autonomy and conformity. At its core, individuality is the unique amalgamation of traits, beliefs, experiences, and aspirations that distinguish one person from another.<br/><br/>Society, with its intricate web of cultural, religious, and ideological frameworks, exerts a profound influence on the formation and expression of individuality. It delineates the boundaries within which individuality can flourish or wither, often imposing norms and expectations that mold individuals into predefined roles and identities."
  ],
  [
    "Optimistic Socio-culturism",
    "How do cultural and societal pressures shape our understanding of personal identity and sanity?",
    "assets/image-2.png",
    "Proceed",
    "Return",
  ],
  [
    "Soundness of Prudence",
    "How do experiences of marginalization or oppression affect an individual's sense of sanity and identity?",
    "assets/image-3.gif",
    "Ok",
    "Previous",
  ],
];

function previous() {
  if (index.value == 0) {
    router.push("/");
    return;
  }

  index.value--;
}

function next() {
  index.value++;
}
</script>

<template>
  <TopMargin />

  <div align="center">
    <div class="col-lg-4 col-md-6 col-sm-10 mx-4 px-4">
      <Question
        :key="index"
        :title="contents[index][0]"
        :message="contents[index][1]"
        :banner="contents[index][2]"
        :nextButton="contents[index][3]"
        :previousButton="contents[index][4]"
        :answer="contents[index][5]"
        :onPrevious="previous"
        :onNext="next"
      />
    </div>
  </div>
</template>
