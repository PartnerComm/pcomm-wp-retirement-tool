<template>
  <div class="retirement-form">
    <form-intro v-if="formIntro"></form-intro>
    <form-questions v-if="formQuestions"></form-questions>
    <form-results v-if="formResults"></form-results>
  </div>
</template>

<script>
import FormIntro from './form-steps/FormIntro';
import FormQuestions from './form-steps/FormQuestions';
import FormResults from './form-steps/FormResults';

export default {
  props: {},
  data() {
    return {
  
    }
  },
  components: {
    FormIntro,
    FormQuestions,
    FormResults
  },
  methods: {
  
  },
  computed: {
    formIntro() {
      return this.$store.getters.GET_FORM_STATUS('formIntro');
    },
    formQuestions() {
      return this.$store.getters.GET_FORM_STATUS('formQuestions');
    },
    formResults() {
      return this.$store.getters.GET_FORM_STATUS('formResults');
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