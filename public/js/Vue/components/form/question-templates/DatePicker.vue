<template>
  <div class="form-datepicker">
    <datepicker :inline="true" v-model="selectedDate" @selected="setDate($event)" />
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  props: {},
  data() {
    return {
      selectedDate: new Date()
    }
  },
  components: {
    Datepicker
  },
  methods: {
    setDate(event) {
      const payload = event;
      this.$store.dispatch('SET_DATE',payload)
    }
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