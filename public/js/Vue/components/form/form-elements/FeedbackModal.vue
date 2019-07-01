<template>
  <div class="feedback-form" v-if="showForm">
    <div class="feedback-form-modal">
      <div class="feedback-form-close" @click="closeForm">Close <span>X</span></div>
      <div class="feedback-form-title">Are you finding the tool helpful?</div>
      <div class="feedback-form-rating">
        <div class="feedback-form-rating-buttons">
          <div class="feedback-form-radio" v-for="a in 5" @click="setFormRating(a)">
            <radio :color="(formRating === a) ? '#00A69A' : '#A2B8D9'" :fill="(formRating === a) ? '#00A69A' : '#E9F1FD'" background="#E9F1FD" />
            <span>{{a}}</span>
          </div>
        </div>
        <div class="feedback-form-rating-labels">
          <div class="feedback-form-rating-label">Not very much</div>
          <div class="feedback-form-rating-label">Very helpful!</div>
        </div>
      </div>
      <div class="feedback-form-additional-content" v-if="additionalContent">
        <div class="feedback-form-additional-content-title" v-html="additionalContent.title.rendered"></div>
        <div class="feedback-form-additional-content-content" v-html="additionalContent.content.rendered"></div>
      </div>
      <div class="feedback-form-feedback">
        <textarea name="feedback" v-model="feedback" @input="setFeedbackContent"/>
      </div>
      <div class="form-button feedback-form-submit">
        <button class="next nav-button" @click="submitFeedback">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from '../../icons/Radio'
export default {
  props: [],
  data() {
    return {
      formRating: '',
      feedback: ''
    }
  },
  components: {
    Radio
  },
  methods: {
    setFormRating(a) {
      if (this.formRating === a) {
        this.formRating = ''
      } else {
        this.formRating = a;
      }
      this.setFeedbackRating(this.formRating);
    },
    closeForm() {
      this.$store.dispatch('UPDATE_FEEDBACK_BUTTON', true);
      this.$store.dispatch('UPDATE_FEEDBACK_FORM', false);
    },
    setFeedbackRating(value) {
        const payload = {key: 'rating', value};
        this.$store.dispatch('UPDATE_FEEDBACK_VALUE', payload);
    },
    setFeedbackContent() {
        const payload = {key: 'feedback', value: this.feedback};
        this.$store.dispatch('UPDATE_FEEDBACK_VALUE', payload);
    },
    submitFeedback() {
      this.$store.dispatch('SUBMIT_FEEDBACK');
    }
  },
  computed: {
    additionalContent() {
      return this.$store.getters.ADDITIONAL_CONTENT[0];
    },
    showForm() {
      return this.$store.getters.GET_FORM_STATUS('showFeedbackForm');
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