<template>
  <div class="feedback-form" v-if="showForm">
    <div class="feedback-form-modal feedback-form-modal-success">
      <div class="feedback-form-success-icon">
        <success />
      </div>
      <div class="feedback-form-title">Thank you for sharing your feedback!</div>
      <div class="form-button feedback-form-submit">
        <button class="next nav-button" @click="closeModal">Back to Retirement Tool</button>
      </div>
    </div>
  </div>
</template>

<script>
import Success from '../../icons/Success'
export default {
  props: [],
  data() {
    return {
    }
  },
  components: {
    Success
  },
  methods: {
    closeModal() {
      this.$store.dispatch('UPDATE_FEEDBACK_SUCCESS', false);
    },
  },
  computed: {
    showForm() {
      return this.$store.getters.GET_FORM_STATUS('showFeedbackSuccess');
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