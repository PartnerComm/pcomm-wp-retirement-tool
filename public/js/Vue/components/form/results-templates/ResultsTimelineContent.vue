<template>
    <div class="results-timeline-content">
        <div class="results-timeline-content-title">
            <span class="italics">Your Retirement</span> <span class="strong">Timeline</span>
        </div>
        <div class="results-timeline-content-strong" v-if="retirementDate">
            <div class="pill">You have {{monthsLeft}} to go!</div>
        </div>
        <div class="results-timeline-content-text" v-if="introPost" v-html="introPost.content.rendered">
        </div>
    </div>
</template>

<script>

export default {
  props: {},
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    
  },
  computed: {
      retirementDate() {
          return this.$store.getters.GET_FORM_STATUS('date');
      },
      currentDate() {
          return new Date();
      },
      differenceDates() {
        const date1 = this.currentDate;
        const date2 = this.retirementDate;
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const diffMonths = Math.round((diffTime / (1000 * 60 * 60 * 24))/30); 
        return diffMonths;
      },
      monthsLeft() {
          if (this.differenceDates === 1) {
              return 'about 1 month';
          }
          if (this.differenceDates === 0) {
              return 'less than a month'
          }
          return 'about ' + this.differenceDates + ' months'
      },
      introPost() {
          return this.$store.getters.INTRO_POSTS[0];
      }
  },
  created() {

  },
  mounted() {
    if (this.retirementDate) {
        window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: 'Retirement Timeline',label: this.monthsLeft + ' to retirement'});
    }
  }

  }

</script>

<style>

</style>