<template>
  <div class="results-timeline-tabs">
        <div class="results-timeline-tabs-nav" v-if="tabs.length > 0">
            <div v-for="(tab, index) in tabs" :key="index" class="results-timeline-tabs-nav-tab" :value="tab.id" @click="selectTab(tab)">
                <div class="results-timeline-tabs-nav-content">
                    <div class="results-timeline-tabs-nav-content-title" v-html="tab.name">

                    </div>
                    <div class="results-timeline-tabs-nav-content-label" v-if="tab.secondary_title != ''">
                        {{tab.secondary_title}}
                    </div>
                </div>
                <div class="results-timeline-tabs-nav-button">
                    <tabs-icon :active="(index <= tabs.indexOf(currentTab))" />
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

  },
  data() {
    return {
    }
  },
  components: {
      ResultsTimelineTabsContent,
      TabsIcon
  },
  methods: {
    selectTab(tab) {
        this.$store.dispatch('SET_CURRENT_TAB', tab)
    },
    
  },
  computed: {
    tabs() {
      return this.$store.getters.GET_FORM_STATUS('tabs').filter(e => parseInt(e.parent) === 0 && this.allPosts.filter(elem => elem.retirement_tool_timeframe.indexOf(e.slug) > -1).length > 0);
    },
    posts() {
      return this.$store.getters.POSTS_FILTERED_BY_MONTH;
    },
    allPosts() {
      return this.$store.getters.POSTS_FILTERED_BY_ANSWERS;
    },
    currentTab() {
      return this.$store.getters.GET_FORM_STATUS('currentTab')
    },
    numericValues() {
      return this.tabs.map(e => {
        return e.numeric_value;
      })
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