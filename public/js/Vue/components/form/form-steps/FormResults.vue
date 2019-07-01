<template>
  <div class="form-results">
    <results-user-selections />
    <results-timeline />
    <feedback-button />
    <feedback-modal />
    <feedback-success />
  </div>
</template>

<script>
import ResultsUserSelections from '../results-templates/ResultsUserSelections';
import ResultsTimeline from '../results-templates/ResultsTimeline';
import FeedbackButton from '../form-elements/FeedbackButton';
import FeedbackModal from '../form-elements/FeedbackModal';
import FeedbackSuccess from '../form-elements/FeedbackSuccessModal';

export default {
  props: {},
  data() {
    return {
  
    }
  },
  components: {
    ResultsUserSelections,
    ResultsTimeline,
    FeedbackButton,
    FeedbackModal,
    FeedbackSuccess
  },
  methods: {
  
  },
  computed: {
    selectedAnswers() {
      return this.$store.getters.GET_FORM_STATUS('formAnswers');
    },
    date() {
      return this.$store.getters.GET_FORM_STATUS('date');
    },
  },
  created() {

  },
  mounted() {
    this.$store.dispatch('GET_RETIREMENT_TOOL_RESULTS_SECTIONS');
    this.$store.dispatch('GET_TAB_LABELS');

  }
  
  }

</script>

<style>

</style>