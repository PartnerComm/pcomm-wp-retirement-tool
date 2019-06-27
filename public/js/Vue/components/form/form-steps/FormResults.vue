<template>
  <div class="form-results">
    <results-user-selections />
    <results-timeline />
  </div>
</template>

<script>
import ResultsUserSelections from '../results-templates/ResultsUserSelections';
import ResultsTimeline from '../results-templates/ResultsTimeline';
export default {
  props: {},
  data() {
    return {
  
    }
  },
  components: {
    ResultsUserSelections,
    ResultsTimeline
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