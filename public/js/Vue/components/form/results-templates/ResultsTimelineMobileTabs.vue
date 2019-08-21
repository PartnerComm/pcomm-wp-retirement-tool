<template>
  <div class="results-timeline-tabs">
        <div class="results-timeline-tabs-nav" v-if="tabs.length > 0">
            <div v-for="(tab, index) in tabs" :key="index" class="results-timeline-tabs-nav-accordion-outer" :value="tab.id" @click="selectTab(tab)">
                <div class="results-timeline-tabs-nav-accordion-header" :id="tab.slug" :class="{active: index <= tabs.indexOf(currentTab), last: index === tabs.length-1}">
                  <span class="results-timeline-tabs-nav-button-wrapper">
                    <div class="results-timeline-tabs-nav-button">
                        <tabs-icon :active="(index <= tabs.indexOf(currentTab))" />
                    </div>
                    <div class="results-timeline-tabs-nav-content">
                        <div class="results-timeline-tabs-nav-content-title" v-html="tab.name">

                        </div>
                        <div class="results-timeline-tabs-nav-content-label" v-if="tab.secondary_title != ''">
                            {{tab.secondary_title}}
                        </div>
                    </div>
                  </span>
                  <div class="results-timeline-tabs-nav-expand">
                    <div class="results-timeline-tabs-nav-expand-icon" :class="{expanded: tab.slug === currentTab.slug }"></div>
                    <div class="results-timeline-tabs-nav-expand-text" v-html="(tab.slug !== currentTab.slug) ? 'Show' : 'Hide'"></div>
                  </div>
                </div>
                <div class="results-timeline-tabs-nav-accordion-content" :class="{expanded: tab.slug === currentTab.slug}">
                  <results-timeline-tabs-content-mobile :tab="tab" />
                </div>
            </div>
        </div>
        <div class="results-timeline-tabs-nav" v-if="tabs.length === 0">
          <results-timeline-tabs-content-mobile />
        </div>

  </div>
</template>

<script>
import ResultsTimelineTabsContentMobile from './ResultsTimelineTabsContentMobile';
import TabsIcon from '../../icons/Tabs';
export default {
  props: {

  },
  data() {
    return {
    }
  },
  components: {
      ResultsTimelineTabsContentMobile,
      TabsIcon
  },
  methods: {
    selectTab(tab) {
        if (tab === this.currentTab){
          this.$store.dispatch('SET_CURRENT_TAB', false);
        } else {
          this.$store.dispatch('SET_CURRENT_TAB', tab);
        }
        window.scrollTo(0, 1025);
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