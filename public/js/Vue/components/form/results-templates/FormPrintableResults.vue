<template>
  <div class="form-print-results">
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
    ResultsTimelineContent
  },
  methods: {
  
  },
  computed: {
    tabs() {
      return this.$store.getters.GET_FORM_STATUS('tabs');
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