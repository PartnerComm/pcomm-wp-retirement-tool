<template>
    <div class="results-timeline-content">
        <div class="results-timeline-content-title">
            <span class="italics">Your Retirement</span> <span class="strong">Timeline</span>
        </div>
        <div class="results-timeline-content-strong">
            <div class="pill">You have about {{monthsLeft}} to go!</div>
        </div>
        <div class="results-timeline-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nulla elit. In ut erat at felis tincidunt condimentum. Nam non urna sed turpis ullamcorper i mperdiet.
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
          if (this.differenceDates <= 1) {
              return '1 month';
          }
          return this.differenceDates + ' months'
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