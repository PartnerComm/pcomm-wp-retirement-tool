<template>
  <div class="question multiple-choice-question">
    <div class="question-title">{{question.name}}</div>
    <div class="question-subtitle">(Check all that apply)</div>
    <div class="question-description" v-if="question.description" v-html="question.description"></div> 
    <div class="answers">
        <div class="form-option" v-for="(answer,index) in this.question.answers" :key="index" @click="selectAnswer(answer)" :class="{'form-option-last': answer.slug === 'none-of-the-above', 'form-option-first': index === 0}">
          <form-answer 
          :question="question" 
          :data="answer" 
          :active="(currentSelection.length > 0 && currentSelection.indexOf(answer) > -1) ? true : false"
          :inactive="((currentSelection[0] && currentSelection[0].slug === 'none-of-the-above' && answer.slug != 'none-of-the-above') || (currentSelection[0] && currentSelection[0].slug !== 'none-of-the-above' && answer.slug === 'none-of-the-above')) ? true : false" />
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
      selectedAnswers: []
    }
  },
  components: {
    FormAnswer,
  },
  methods: {
    selectAnswer(answer) {
      if (answer.slug === "none-of-the-above") {
        this.selectedAnswers = [];
        this.selectedAnswers.push(answer);
      } else {
        if (this.selectedAnswers.indexOf(answer) > -1) {
        const index = this.selectedAnswers.indexOf(answer);
        this.selectedAnswers.splice(index, 1);
        if (this.selectedAnswers.length === 0) {
          // this.$store.dispatch('UPDATE_VALIDATION', false);
        }
      } else {
        // if (this.selectedAnswers.indexOf('none-of-the-above') > -1) {
        //   this.selectedAnswers = [];
        // }
        if (this.selectedAnswers.map(e => e.slug).indexOf('none-of-the-above') > -1) {
          this.selectedAnswers = [];
        }
        this.selectedAnswers.push(answer);
        // this.$store.dispatch('UPDATE_VALIDATION', true);
        }
      }
      
      const payload = this.selectedAnswers;
      const payload2 = this.question.answers.filter(e => this.selectedAnswers.indexOf(e) === -1);
      this.$store.dispatch('SET_CURRENT_SELECTION', payload);
      this.$store.dispatch('SET_EXCLUDED_ANSWERS', payload2);
    },
    newWindow(url) {
      url = new DOMParser().parseFromString(url, "text/xml");
      url.firstChild.setAttribute('target', '_blank');
      console.log(url);
      console.log(url.firstChild);
      return url.firstChild;
    },
    
  },
  computed: {
    currentSelection() {
      return this.$store.getters.GET_FORM_STATUS('currentSelection');
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