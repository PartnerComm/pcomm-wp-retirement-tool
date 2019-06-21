<template>
  <div class="results-timeline-tabs-content">
    <div class="results-timeline-tabs-content-header-title">
        Dynamic title should go here
    </div>
    <div class="results-timeline-tabs-content-header-pill">
            <div class="pill">Date</div>
    </div>
    <results-timeline-tabs-content-container />
    <results-timeline-tabs-content-container />
    <div class="form-button text-center">
        <button class="nav-button next" >Next Milestone</button>
    </div>
  </div>
</template>

<script>
import ResultsTimelineTabsContentContainer from './ResultsTimelineTabsContentContainer';
export default {
  props: {

  },
  data() {
    return {

    }
  },
  components: {
    ResultsTimelineTabsContentContainer
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