<template>
  <div class="form-results">
    <h1 class="form-results-title">I'm the form results!</h1>
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
    selectedAnswers() {
      return this.$store.getters.GET_FORM_STATUS('formAnswers');
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