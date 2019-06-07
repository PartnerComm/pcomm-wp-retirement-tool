<template>
  <div class="question multiple-choice-question">
    <div class="question-title">{{question.name}}</div>
    <div class="answers">
      <div class="answer-choice" v-for="(answer,index) in this.question.answers" :key="index" @click="selectAnswer(answer)">
        <form-answer :data="answer" :active="(selectedAnswer && selectedAnswer === answer) ? true : false"/>
      </div>
    </div>
  </div>
</template>

<script>
import Checkmark from '../../icons/Checkmark';
import FormAnswer from './FormAnswer';
export default {
  props: ['question'],
  data() {
    return {
    }
  },
  components: {
    Checkmark,
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