<template>
  <div class="question multiple-choice-question">
    <div class="question-title">{{question.name}}</div>
    <div class="answers">
        <div class="answer-choice" v-for="(answer,index) in question.answers" :key="index" @click="selectAnswer(answer)">
          <div class="checkmark-icon"><checkmark :color="(selectedAnswers.indexOf(answer.slug) > -1) ? '#FF9900' : '#C6C6C6'" :fill="(selectedAnswers.indexOf(answer.slug) > -1) ? '#FF9900' : '#FFFFFF'"/></div>
          <div class="answer-output">{{answer.name}} <span v-if="answer.disqualifier === 'yes'"><a :href="answer.description" target="_blank">(Go here to determine your BMI.)</a></span></div>
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
      selectedAnswers: []
    }
  },
  components: {
    Checkmark,
  },
  methods: {
    selectAnswer(answer) {
      if (answer.slug === "none-of-the-above") {
        this.selectedAnswers = [];
        this.selectedAnswers.push(answer.slug);
        this.$store.dispatch('DISQUALIFY_USER');
        this.$store.dispatch('UPDATE_VALIDATION', true);
      } else {
        if (this.selectedAnswers.indexOf(answer.slug) > -1) {
        const index = this.selectedAnswers.indexOf(answer.slug);
        this.selectedAnswers.splice(index, 1);
        if (this.selectedAnswers.length === 0) {
          this.$store.dispatch('UPDATE_VALIDATION', false);
        }
      } else {
        if (this.selectedAnswers.indexOf('none-of-the-above') > -1) {
          this.selectedAnswers = [];
        }
        this.selectedAnswers.push(answer.slug);
        this.$store.dispatch('UPDATE_VALIDATION', true);
        }
        if (this.question.minimumAnswers != '' && this.selectedAnswers.length < parseInt(this.question.minimumAnswers)) {
          this.$store.dispatch('DISQUALIFY_USER');
        } else {
          this.$store.dispatch('QUALIFY_USER');
        }
      }
      
      const payload = {key: this.question.slug, value: this.selectedAnswers};
      this.$store.dispatch('UPDATE_OTHER_ANSWERS', payload);
    },
    newWindow(url) {
      url = new DOMParser().parseFromString(url, "text/xml");
      url.firstChild.setAttribute('target', '_blank');
      console.log(url);
      console.log(url.firstChild);
      return url.firstChild;
    }
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