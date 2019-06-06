<template>
  <div class="question multiple-choice-question">
    <div class="question-title">{{question.name}}</div>
    <div class="answers">
        <div class="answer-choice" v-for="(answer,index) in question.answers" :key="index" @click="selectAnswer(answer)">
          <div class="checkmark-icon"><checkmark :color="(selectedAnswer === answer.slug) ? '#FF9900' : '#C6C6C6'" :fill="(selectedAnswer === answer.slug) ? '#FF9900' : '#FFFFFF'"/></div>
          <div class="answer-output" v-html="answer.name"></div>
        </div>
    </div>
  </div>
</template>

<script>
import Checkmark from '../../icons/checkmark-icon';
export default {
  props: ['question'],
  data() {
    return {
      selectedAnswer: ''
    }
  },
  components: {
    Checkmark,
  },
  methods: {
    selectAnswer(answer) {
      this.selectedAnswer = answer.slug;
      if (answer.disqualifier === 'yes') {
        this.$store.dispatch('DISQUALIFY_USER');
      } else {
        this.$store.dispatch('QUALIFY_USER');
      }
      const payload = {key: this.question.slug, value: answer.name};
      this.$store.dispatch('UPDATE_OTHER_ANSWERS', payload);
      this.$store.dispatch('UPDATE_VALIDATION', true);
    },
  },
  computed: {
    filteredAnswers() {

    }
  },
  created() {

  },
  mounted() {
  }
  
  }

</script>

<style>

</style>