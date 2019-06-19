<template>
  <div class="question multiple-choice-question">
    <div class="question-title">{{question.name}}</div>
    <div class="question-subtitle">(Please select one)</div>
    <div class="answers">
      <div class="form-option" v-for="(answer,index) in this.question.answers" :key="index" @click="selectAnswer(answer)" :class="{'form-option-first': index === 0}">
        <form-answer :question="question" :data="answer" :active="(selectedAnswer && selectedAnswer === answer) ? true : false" :inactive="(selectedAnswer && selectedAnswer !== answer) ? true : false"/>
      </div>
    </div>
  </div>
</template>

<script>
import FormAnswer from './FormAnswer';
export default {
  props: ['question'],
  data() {
    return {
    }
  },
  components: {
    FormAnswer
  },
  methods: {
    selectAnswer(answer) {
      this.$store.dispatch('SET_CURRENT_SELECTION', answer);
    },
  },
  computed: {
    selectedAnswer() {
      return this.$store.getters.GET_FORM_STATUS('currentSelection');
    },
  },
  created() {

  },
  mounted() {
  }
  
  }

</script>

<style>

</style>