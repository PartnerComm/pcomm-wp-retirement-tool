<template>
  <div class="question multiple-choice-question">
    <div class="question-title">{{question.name}}</div>
    <div class="question-subtitle">(Check all that apply)</div>
    <div class="question-description" v-if="question.description" v-html="question.description"></div> 
    <div class="answers">
        <div class="form-option" v-for="(answer,index) in sortedAnswers" :key="index" @click="selectAnswer(answer)" :class="{'form-option-last': answer.slug.match(/none-of-the-above/gi), 'form-option-first': index === 0}">
          <form-answer 
          :question="question" 
          :data="answer" 
          :active="(currentSelection.length > 0 && currentSelection.indexOf(answer) > -1) ? true : false"
          :inactive="((currentSelection[0] && currentSelection[0].slug.match(/none-of-the-above/gi) && !answer.slug.match(/none-of-the-above/gi)) || (currentSelection[0] && !currentSelection[0].slug.match(/none-of-the-above/gi) && answer.slug.match(/none-of-the-above/gi))) ? true : false" />
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
      if (answer.slug.match(/none-of-the-above/gi)) {
        this.selectedAnswers = [];
        this.selectedAnswers.push(answer);
      } else {
        if (this.selectedAnswers.indexOf(answer) > -1) {
        const index = this.selectedAnswers.indexOf(answer);
        this.selectedAnswers.splice(index, 1);
        if (this.selectedAnswers.length === 0) {
        }
      } else {
        if (this.selectedAnswers.map(e => e.slug).filter(elem => elem.match(/none-of-the-above/gi)).length > 0) {
          this.selectedAnswers = [];
        }
        this.selectedAnswers.push(answer);
        }
      }
      const payload = this.selectedAnswers;
      const payload2 = this.question.answers.filter(e => this.selectedAnswers.indexOf(e) === -1);
      const payload3 = this.question.answers.filter(e => this.selectedAnswers.indexOf(e) > -1);
      this.$store.dispatch('SET_CURRENT_SELECTION', payload);
      this.$store.dispatch('SET_EXCLUDED_ANSWERS', payload2);
      this.$store.dispatch('SET_SELECT_ALL_ANSWERS', payload3);
    },
    newWindow(url) {
      url = new DOMParser().parseFromString(url, "text/xml");
      url.firstChild.setAttribute('target', '_blank');
      console.log(url);
      console.log(url.firstChild);
      return url.firstChild;
    },
    sortTerms(a,b) {
        if (parseInt(a.term_order) < parseInt(b.term_order))
          return -1;
        if (parseInt(a.term_order) > parseInt(b.term_order))
          return 1;
        return 0;
    }
  },
  computed: {
    currentSelection() {
      return this.$store.getters.GET_FORM_STATUS('currentSelection');
    },
    sortedAnswers() {
      return this.question.answers.sort(this.sortTerms);
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