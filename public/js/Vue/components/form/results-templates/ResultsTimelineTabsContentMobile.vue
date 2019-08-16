<template>
  <div class="results-timeline-tabs-content" v-if="currentTab">
    <div class="results-timeline-tabs-content-header-title" v-if="tabs.length > 0">
      {{tab.name}} <span v-if="tab.secondary_title != ''">{{tab.secondary_title}}</span>
    </div>
    <div class="results-timeline-tabs-content-header-pill" v-if="retirementDate">
      <div class="pill" v-if="tab.numeric_value != 1">{{adjustedDate}}</div>
    </div>
    <results-timeline-tabs-content-container-mobile v-for="(section, index) in resultsSections" :key="index" :section="section" :tabs="true" v-if="tabs.length > 0" :tab="tab" />
    <results-timeline-tabs-content-container-mobile v-for="(section, index) in resultsSections" :key="index" :section="section" :tabs="false" v-if="tabs.length === 0" />
  </div>
</template>

<script>
import moment from 'moment';
import ResultsTimelineTabsContentContainerMobile from './ResultsTimelineTabsContentContainerMobile';
export default {
  props: {
    tab: {
      type: Object,
      required: false
    }
  },
  data() {
    return {

    }
  },
  components: {
    ResultsTimelineTabsContentContainerMobile
  },
  methods: {
    incrementTab() {
      this.$store.dispatch('SET_CURRENT_TAB', this.tabs[this.tabs.indexOf(this.currentTab) + 1]);
      window.scrollTo(0,800);
    },
    decrementTab() {
      this.$store.dispatch('SET_CURRENT_TAB', this.tabs[this.tabs.indexOf(this.currentTab) - 1]);
      window.scrollTo(0,800);

    },
    adjustMonths(months) {
      const date= moment(this.retirementDate);
      const newDate = date.subtract(parseInt(months), 'month');
      return newDate.format('LL');
    },
    adjustDays(days) {
      const date= moment(this.retirementDate);
      const newDate = date.subtract(days, 'day');
      return newDate.format('LL');
    }
  },
  computed: {
    currentTab() {
      return this.$store.getters.GET_FORM_STATUS('currentTab')
    },
    resultsSections() {
      return this.$store.getters.GET_FORM_STATUS('resultsSections').filter(e => parseInt(e.parent) === 0);
    },
    allPosts() {
      return this.$store.getters.POSTS_FILTERED_BY_ANSWERS;
    },
    tabs() {
      return this.$store.getters.GET_FORM_STATUS('tabs').filter(e => parseInt(e.parent) === 0 && this.allPosts.filter(elem => elem.retirement_tool_timeframe.indexOf(e.slug) > -1).length > 0);
    },
    retirementDate() {
      return this.$store.getters.GET_FORM_STATUS('date');
    },
    adjustedDate() {
      if (this.currentTab.numeric_value != '' && parseInt(this.currentTab.numeric_value) != -1) {
        const date = this.adjustMonths(this.currentTab.numeric_value);
        return date;
      } 
      if (parseInt(this.currentTab.numeric_value) === -1) {
        const date = this.adjustDays(1);
        return date;
      } 
      const date = moment(this.retirementDate).format('LL');
      return date;
      
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