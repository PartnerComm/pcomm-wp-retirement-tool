<template>
  <div class="form-print-results">
    <button class="form-buttons-previous nav-button" @click="closePrintResults">Back to Results</button>
    <results-timeline-content />
    <div class="results-timeline-tabs" v-if="tabs">
        <div v-for="(tab, index) in tabs" :key="index" class="printable-results-box">
            <form-printable-results-content :section="tab" />
        </div>
    </div>
  </div>
</template>

<script>
import TabsIcon from '../../icons/Tabs';
import FormPrintableResultsContent from './FormPrintableResultsContent';
import ResultsTimelineContent from '../results-templates/ResultsTimelineContent';


export default {
  props: {},
  data() {
    return {
  
    }
  },
  components: {
    TabsIcon,
    FormPrintableResultsContent,
    ResultsTimelineContent,

  },
  methods: {
    closePrintResults() {
      this.$store.dispatch('UPDATE_PRINT_RESULTS', false);
    }
  },
  computed: {
    tabs() {
      return this.$store.getters.GET_FORM_STATUS('tabs').filter(e => parseInt(e.parent) === 0);
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