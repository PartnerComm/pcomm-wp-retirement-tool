<template>
  <div class="results-timeline-tabs">
        <div class="results-timeline-tabs-nav">
            <div v-for="(tab, i) in tabs" :key="i" class="" :value="tab.id">
                <div class="results-timeline-tabs-nav-content">
                    <div class="results-timeline-tabs-nav-content-title">
                        {{tab.title}}
                    </div>
                    <div class="results-timeline-tabs-nav-content-label">
                        {{tab.label}}
                    </div>
                </div>
                <div class="results-timeline-tabs-nav-button">
                    <button>

                    </button>
                </div>
            </div>
        </div>
        <results-timeline-tabs-content />
  </div>
</template>

<script>
import ResultsTimelineTabsContent from './ResultsTimelineTabsContent';
export default {
  props: {
    tabs: {
        type: Array,
        required: true,
    },
  },
  data() {
    return {

    }
  },
  components: {
      ResultsTimelineTabsContent
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