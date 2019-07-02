<template>
    <div class="results-timeline">
        <results-timeline-content />
        <results-timeline-tabs />
        <results-resources />
    </div>
</template>

<script>

import ResultsTimelineContent from './ResultsTimelineContent';
import ResultsTimelineTabs from './ResultsTimelineTabs';
import ResultsResources from './ResultsResources';
export default {
  props: {},
  data() {
    return {
    }
  },
  components: {
    ResultsTimelineContent,
    ResultsTimelineTabs,
    ResultsResources
  },
  methods: {

  },
  computed: {

  },
  created() {

  },
  mounted() {

  }

  }

</script>

<style>

</style>