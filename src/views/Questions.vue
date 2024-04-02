<script setup lang="ts">
import { ref } from "vue";
import Question from "../components/Question.vue";

const index = ref(0);
const contents: Array<Array<string>> = [
    [
        "You, in the society",
        "What defines individuality, and how does it intersect with societal norms and expectations?",
        "assets/image-1.jpeg",
        "Assert"
    ],
    [
        "Optimistic Socio-culturism",
        "How do cultural and societal pressures shape our understanding of personal identity and sanity?",
        "assets/image-2.jpg",
        "Proceed"
    ]
];

function next() {
    index.value++;
    console.log(index.value);
}
</script>

<template>
    <div align="center" class="px-4">
        <div class="col-lg-3 col-md-4 col-sm-10 mx-4">
            <Question
                :key="index"
                :title="contents[index][0]"
                :message="contents[index][1]"
                :banner="contents[index][2]"
                :button="contents[index][3]"
                :onNext="next" />
        </div>
    </div>
</template>