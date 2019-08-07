<template>
  <div class="results-timeline-tabs-content" v-if="currentTab">
    <div class="results-timeline-tabs-content-header-title" v-if="tabs.length > 0">
      {{currentTab.name}} <span v-if="currentTab.secondary_title != ''">{{currentTab.secondary_title}}</span>
    </div>
    <div class="results-timeline-tabs-content-header-pill" v-if="retirementDate">
      <div class="pill" v-if="currentTab.numeric_value != 1">{{adjustedDate}}</div>
    </div>
    <results-timeline-tabs-content-container v-for="(section, index) in resultsSections" :key="index" :section="section" :tabs="true" v-if="tabs.length > 0" />
    <results-timeline-tabs-content-container v-for="(section, index) in resultsSections" :key="index" :section="section" :tabs="false" v-if="tabs.length === 0" />
    <div class="form-button text-center">
        <button v-if="tabs.indexOf(currentTab) > 0" class="form-buttons-previous nav-button" @click="decrementTab">Previous</button>
        <button v-if="tabs.indexOf(currentTab) < tabs.length-1" class="form-buttons-next nav-button" @click="incrementTab">Next Milestone</button>
    </div> 
  </div>
</template>

<script>
import moment from 'moment';
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