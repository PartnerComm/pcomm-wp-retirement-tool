<template>
  <div class="results-timeline-tabs-content-container" :class="[(section) ? section.slug : '']" v-if="filteredPosts.length > 0">
        <div class="results-timeline-tabs-content-header-title" v-if="section">
          <span class="strong">{{section.name}}</span>&nbsp;<span class="italics" v-if="section.secondary_title.length > 0">{{section.secondary_title}} </span>
        </div>
        <div class="results-timeline-tabs-content-header-pill" v-if="retirementDate">
          <div class="pill" v-if="section.numeric_value != 1">{{adjustedDate}}</div>
        </div>
        <div class="" v-for="(category, index) in resultsSections">
          <form-printable-results-content-category :category="category" :section="section" />
        </div>
  </div>
</template>

<script>
import moment from 'moment';
import FormPrintableResultsContentCategory from './FormPrintableResultsContentCategory';
export default {
  props: {
      section: {
          type: Object,
          required: false
      }
  },
  data() {
    return {

    }
  },
  components: {
    FormPrintableResultsContentCategory
  },
  methods: {
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
    filteredPosts() {
      if (this.section) {
        return this.$store.getters.POSTS_FILTERED_BY_ANSWERS.filter(e => e.retirement_tool_timeframe.indexOf(this.section.slug) >-1)
      }
      return this.$store.getters.POSTS_FILTERED_BY_ANSWERS;
    },
      
    retirementDate() {
      return this.$store.getters.GET_FORM_STATUS('date');
    },
    adjustedDate() {
      if (this.section.numeric_value != '' && parseInt(this.section.numeric_value) != -1) {
        const date = this.adjustMonths(this.section.numeric_value);
        return date;
      } 
      if (parseInt(this.section.numeric_value) === -1) {
        const date = this.adjustDays(1);
        return date;
      } 
      const date = moment(this.retirementDate).format('LL');
      return date;
    },
    resultsSections() {
      return this.$store.getters.GET_FORM_STATUS('resultsSections').filter(e => parseInt(e.parent) === 0); 
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