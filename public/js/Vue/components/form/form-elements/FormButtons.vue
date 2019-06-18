<template>
  <div class="form-buttons">
    <div class="form-buttons-intro" v-if="formIntro">
      <button class="form-buttons-next nav-button" @click="activateQuestions">{{buttonText}}</button>
    </div>
    <div class="form-buttons-steps" v-if="formQuestions && formStep < lastStep">
      <button class="form-buttons-previous nav-button" @click="navigateBackward">Back</button>
      <button class="form-buttons-next nav-button" @click="navigateForward">Next</button>
    </div>
    <div class="form-buttons-final" v-if="formQuestions && formStep === lastStep">
      <button class="form-buttons-previous nav-button" @click="navigateBackward">Back</button>
      <button class="form-buttons-submit nav-button" @click="submitForm">Submit</button>
    </div>
  </div>
</template>

<script>

export default {
  props: [],
  data() {
    return {
  
    }
  },
  methods: {
    activateQuestions() {
      this.$emit('navigate-forward');
    },
    navigateForward() {
      this.$store.dispatch('COMMIT_CURRENT_SELECTION');
      this.$store.dispatch('NAVIGATE_STEPS', 'plus');
    },
    navigateBackward() {
      this.$store.dispatch('REMOVE_LAST_SELECTION');
      if (this.formStep === 0) {
        this.$store.dispatch('UPDATE_FORM_QUESTIONS', false);
        this.$store.dispatch('UPDATE_FORM_INTRO', true);
      } else {
        this.$store.dispatch('NAVIGATE_STEPS', 'minus');
      }
    },
    submitForm() {
      this.$store.dispatch('SUBMIT_COMPLETED_FORM');
    },
  },
  computed: {
    formIntro() {
      return this.$store.getters.GET_FORM_STATUS('formIntro');
    },
    formQuestions() {
      return this.$store.getters.GET_FORM_STATUS('formQuestions');
    },
    formResults() {
      return this.$store.getters.GET_FORM_STATUS('formResults');
    },
    formStep() {
      return this.$store.getters.GET_FORM_STEP;
    },
    lastStep() {
      return this.$store.getters.GET_LAST_STEP;
    },
    buttonText() {
      if (this.selectedAnswer && this.selectedAnswer.questions.length === 0) {
        return 'Submit';
      }
      return 'Next'
    },
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