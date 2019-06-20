<template>
  <div class="results-timeline-tabs">
        <div class="results-timeline-tabs-nav">
            <div v-for="(tab, i) in tabs" :key="i" class="" :value="tab.id" @click="selectTab(i)">
                <div class="results-timeline-tabs-nav-content">
                    <div class="results-timeline-tabs-nav-content-title" v-html="tab.title">
                       
                    </div>
                    <div class="results-timeline-tabs-nav-content-label">
                        {{tab.label}}
                    </div>
                </div>
                <div class="results-timeline-tabs-nav-button">
                    <tabs-icon :active="(currentTab  >= i) ? true : false" />

                </div>
            </div>
        </div>

        <results-timeline-tabs-content />
  </div>
</template>

<script>
import ResultsTimelineTabsContent from './ResultsTimelineTabsContent';
import TabsIcon from '../../icons/Tabs';
export default {
  props: {
    tabs: {
        type: Array,
        required: true,
    },
  },
  data() {
    return {
        currentTab: 0
    }
  },
  components: {
      ResultsTimelineTabsContent,
      TabsIcon
  },
  methods: {
    selectTab(tab) {
        this.currentTab = tab
    },
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