<template>
  <div class="form-questions">
    <div class="form-questions-question" v-for="(question, index) in activeQuestions">
      <select-one :question="question" v-if="formStep === index" />
    </div>
    <form-buttons />

  </div>
</template>

<script>
import SelectOne from '../question-templates/SelectOne';
import FormButtons from '../form-elements/FormButtons';

export default {
  props: {},
  data() {
    return {
  
    }
  },
  components: {
    SelectOne,
    FormButtons
  },
  methods: {
  
  },
  computed: {
    activeQuestions() {
      return this.$store.getters.ACTIVE_QUESTIONS;
    },
    formStep() {
      return this.$store.getters.GET_FORM_STEP;
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