<template>
  <div class="form-print-results">
    <button class="form-buttons-previous nav-button" @click="closePrintResults">Back to Results</button>
    <results-timeline-content />
    <div class="results-timeline-tabs" v-if="tabs.length > 0">
        <div v-for="(tab, index) in tabs" :key="index" class="printable-results-box">
            <form-printable-results-content :section="tab" />
        </div>
    </div>
    <div class="results-timeline-tabs" v-if="tabs.length === 0">
      <form-printable-results-content />
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
      return this.$store.getters.GET_FORM_STATUS('tabs').filter(e => parseInt(e.parent) === 0 && this.allPosts.filter(elem => elem.retirement_tool_timeframe.indexOf(e.slug) > -1).length > 0);
    },
    allPosts() {
      return this.$store.getters.POSTS_FILTERED_BY_ANSWERS;
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