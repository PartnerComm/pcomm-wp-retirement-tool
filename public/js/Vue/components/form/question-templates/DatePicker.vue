<template>
  <div class="form-datepicker">
    <div class="question-title">{{question.name}}</div>
    <div class="question-description" v-if="question.description" v-html="question.description"></div> 
    <datepicker wrapper-class="calendar-wrap" :disabledDates="{to: currentCalendarDate}" :inline="true" v-model="selectedDate" @selected="setDate($event)" />
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
    }
  },
  created() {

  },
  mounted() {
    this.setDate(this.selectedDate);
  }
  
  }

</script>

<style>

</style>