<template>
  <div class="form-datepicker">
    <div class="question-title">{{question.name}}</div>
    <div class="question-description" v-if="question.description" v-html="question.description"></div> 
    <datepicker wrapper-class="calendar-wrap" calendar-class="calendar-inner" :disabledDates="{to: currentCalendarDate, from: twoYearsAhead}" :inline="true" :value="currentSelection" @selected="setDate($event)" />
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedDate: ''
    }
  },
  components: {
    Datepicker
  },
  methods: {
    setDate(event) {
      const payload = event;
      this.$store.dispatch('SET_DATE',payload);
      this.$store.dispatch('SET_CURRENT_SELECTION', payload);
    }
  },
  computed: {
    currentCalendarDate() {
      var date = new Date();
      date.setDate(date.getDate() - 1);
      return date;
    },
    twoYearsAhead() {
      var date = new Date();
      date.setFullYear(date.getFullYear() + 2);
      return date;
    },
    currentSelection() {
      return this.$store.getters.GET_FORM_STATUS('currentSelection');
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