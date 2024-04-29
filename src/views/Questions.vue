<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import Question from "@/components/Question.vue";
import Margin from "@/components/Margin.vue";

const index = ref(0);
const router = useRouter();

const contents: Array<Array<string>> = [
  [
    "You, Society, and Solace",
    "What defines individuality, and how does it intersect with societal norms and expectations?",
    "assets/image-1.png",
    "Assert",
    "Go back",
    "Individuality is a complex interplay of intrinsic essence and external influences, forever dancing on the threshold between autonomy and conformity. At its core, individuality is the unique amalgamation of traits, beliefs, experiences, and aspirations that distinguish one person from another.<br/><br/>Society, with its intricate web of cultural, religious, and ideological frameworks, exerts a profound influence on the formation and expression of individuality. It delineates the boundaries within which individuality can flourish or wither, often imposing norms and expectations that mold individuals into predefined roles and identities.<br/><br/>However, true individuality transcends the constraints of societal conventions, daring to defy the status quo and challenge the boundaries of collective consciousness. It is a delicate balance, a constant negotiation between the pull of conformity and the yearning for authentic self-expression.",
  ],
  [
    "Optimistic Socio-culturism",
    "How do cultural and societal pressures shape our understanding of personal identity and sanity?",
    "assets/image-2.png",
    "Proceed",
    "Return",
    "Cultural and societal pressures exert a profound influence on the intricate tapestry of personal identity and sanity. From the moment of birth, individuals are enveloped in a web of norms, values, and expectations constructed by the society they inhabit. These constructs mold their perceptions of self and others, shaping the very essence of their identity.<br/><br/>Consequently, individuals find themselves navigating a labyrinth of societal expectations, striving to conform while grappling with the innate desire for authenticity. While, cultural narratives weave themselves into the fabric of our psyche, dictating not only how we perceive ourselves but also how we interpret the world around us.<br/><br/>Thus, personal identity becomes a negotiation between the self and society, a delicate balancing act between conformity and self-expression.",
  ],
  [
    "Soundness of Prudence",
    "How do experiences of marginalization or oppression affect an individual's sense of sanity and identity?",
    "assets/image-3.gif",
    "Ok",
    "Previous",
    "Experiences of marginalization or oppression carve deep into the psyche, not merely as external assaults on one's social standing, but as existential wounds that reverberate within the individual's sense of self. The weight of discrimination, whether it be based on race, gender, sexuality, or any other defining characteristic, can erode the very foundation of one's identity.<br/><br/>In a world that often fails to recognize or validate the full humanity of marginalized individuals, the constant barrage of microaggressions and systemic injustices can lead to a profound sense of alienation and dissonance. This dissonance fractures the individual's understanding of themselves and their place in the world, sowing seeds of doubt and insecurity that gnaw away at their sense of sanity.",
  ],
  [
    "Cognitive Neuropsychology",
    "Can cognitive dissonance serve as a protective mechanism for individuals with sociopathic tendencies, shielding them from the emotional repercussions of their actions?",
    "assets/image-4.png",
    "Accept",
    "Back",
    "Cognitive dissonance, the discomfort experienced when holding conflicting beliefs or attitudes, is a complex psychological phenomenon that often compels individuals to reconcile their inconsistencies to maintain a sense of internal coherence. In the context of individuals with sociopathic tendencies, cognitive dissonance can indeed serve as a protective mechanism, albeit in a morally ambiguous manner.<br/><br/>Sociopathy, characterized by a lack of empathy, guilt, and remorse, often enables individuals to engage in behavior that would typically evoke profound emotional repercussions in others. However, the presence of cognitive dissonance may facilitate a form of psychological insulation, allowing sociopaths to rationalize their actions and mitigate any potential cognitive dissonance by altering their beliefs or attitudes to align with their behavior.<br/><br/>Nonetheless, cognitive dissonance in individuals with sociopathic tendencies operates not as a genuine moral compass but rather as a pragmatic tool for self-preservation, enabling them to navigate the complexities of their psychological landscape while remaining impervious to the ethical implications of their actions.",
  ],
  [
    "Soulessness",
    "How does the absence of a perceived soul influence the experience of cognitive dissonance, if at all?",
    "assets/image-5.png",
    "Assert",
    "Return",
    "The notion of a &quot;soul&quot; in the context of human experience is deeply rooted in philosophical, religious, and cultural perspectives. While some may perceive the soul as an essential aspect of identity and consciousness, others view it as a metaphorical or nonexistent entity. In either case, cognitive dissonance, the psychological discomfort that arises from holding conflicting beliefs or attitudes, transcends metaphysical concepts.<br/><br/>The absence of a perceived soul does not inherently dictate one's experience of cognitive dissonance, as this phenomenon operates within the realm of psychological processes rather than metaphysical assumptions. However, the absence of a belief in a soul could potentially impact how individuals reconcile conflicting beliefs about their existence, purpose, and morality.<br/><br/>Without a belief in an immortal soul, individuals may confront cognitive dissonance with a more existential perspective, grappling with questions of identity, meaning, and moral responsibility solely within the framework of their earthly existence. In this sense, the absence of a perceived soul may not directly influence cognitive dissonance itself, but it could shape the existential context within which such conflicts are understood and resolved."
  ],
  [
    "Cosmogical Coincidence?",
    "To what extent does our biological existence, including genetic predispositions and physiological processes, influence our self-consciousness?",
    "assets/image-6.png",
    "Accept",
    "Previous",
    "Our self-consciousness, that profound awareness of our own existence, is intricately intertwined with our biological existence. These genetic blueprints set the stage for a myriad of physiological processes, from the firing of neurons in our brains to the release of hormones that regulate our emotions and behaviors. Thus, our biology forms the canvas upon which our self-consciousness is painted.<br/><br/>And so, our upbringing, culture, environment, and personal choices all contribute to the masterpiece of our self-consciousness, adding layers of complexity and nuance. Therefore, while our biological existence undeniably influences our self-consciousness, it is ultimately the synthesis of nature and nurture that gives rise to the rich tapestry of human consciousness."
  ],
  [
    "Thoughts and Prayers and Thoughts",
    "In what vastness does the plasticity of the prefrontal cortex allow for adaptation and resilience in the face of adversity and trauma?",
    "assets/image-7.jpg",
    "Yes",
    "Back",
    "The plasticity of the prefrontal cortex serves as a profound testament to the remarkable adaptability inherent within the human brain. In the crucible of adversity and trauma, this cerebral region emerges as a pivotal arena where resilience is forged. The prefrontal cortex, with its capacity for neuroplasticity, enables individuals to navigate the labyrinthine complexities of emotional upheaval and existential turmoil.<br/><br/>It is within this intricate neural network that the alchemy of adaptation unfolds, reshaping cognitive frameworks and recalibrating emotional responses in the wake of adversity. Through the intricate interplay of synaptic connections and neural reorganization, individuals harness the transformative potential of their prefrontal cortex to confront adversity with an unwavering resilience."
  ],
  [
    "Neuropsychologically Dilema-Deprivation",
    "How do disturbances in perception and cognition characteristic of schizophrenia influence the experience and interpretation of optical illusions?",
    "assets/image-8.gif",
    "Finish",
    "Revert",
    "Disturbances in perception and cognition, hallmark features of schizophrenia, fundamentally alter the individual's relationship with reality.<br/><br/>In the realm of optical illusions, where perception dances with ambiguity, the schizophrenic mind traverses a labyrinth of distorted signals and fragmented interpretations. Here, the lines between illusion and reality blur into a kaleidoscope of uncertainty. Perception, typically a reliable guide through the maze of sensory stimuli, becomes an unreliable narrator, weaving tales of deception and misdirection. Within this cognitive landscape, the schizophrenic psyche may confront optical illusions not merely as playful anomalies but as ominous reflections of its own fractured state. Each illusion becomes a mirror, reflecting the disarray within, echoing the dissonance between perception and truth.<br/><br/>Yet, amidst the chaos, there exists a poignant truth: the interpretation of optical illusions by the schizophrenic mind transcends mere visual phenomena; it becomes a poignant metaphor for the perpetual struggle to discern reality from illusion, a struggle emblematic of the human condition itself."
  ]
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
  <Margin />

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

  <Margin />
</template>
