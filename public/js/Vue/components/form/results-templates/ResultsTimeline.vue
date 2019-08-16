<template>
    <div class="results-timeline">
        <results-timeline-content />
        <results-timeline-tabs class="results-timeline-tabs-desktop" />
        <results-timeline-mobile-tabs class="results-timeline-tabs-mobile"/>
        <results-resources />
    </div>
</template>

<script>

import ResultsTimelineContent from './ResultsTimelineContent';
import ResultsTimelineTabs from './ResultsTimelineTabs';
import ResultsTimelineMobileTabs from './ResultsTimelineMobileTabs';

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
    ResultsResources,
    ResultsTimelineMobileTabs
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