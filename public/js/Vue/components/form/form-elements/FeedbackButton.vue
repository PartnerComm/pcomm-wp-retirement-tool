<template>
  <div class="feedback-button" v-show="showButton">
    <div class="feedback-button-inner">
      <div class="feedback-button-icon" @click="showForm"></div>
      <div class="feedback-button-title"@click="showForm">Feedback</div>
      <div class="feedback-button-close" @click="closeFeedback">X</div>
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
    showFeedbackButton() {
      if (window.localStorage.getItem("feedback") != "complete") {
        this.$store.dispatch('UPDATE_FEEDBACK_BUTTON', true);
      }
    },
    closeFeedback() {
      this.$store.dispatch('UPDATE_FEEDBACK_BUTTON', false);
    },
    showForm() {
      this.$store.dispatch('UPDATE_FEEDBACK_BUTTON', false);
      this.$store.dispatch('UPDATE_FEEDBACK_FORM', true);
    },
  },
  computed: {
    showButton() {
      return this.$store.getters.GET_FORM_STATUS('showFeedbackButton');
    }
  },
  created() {

  },
  mounted() {
    setTimeout(this.showFeedbackButton, 60000);
    // this.showFeedbackButton(); // Use for debug to avoid the minute wait
  }
  
  }

</script>

<style>

</style>