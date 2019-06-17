<template>
  <div class="form-questions">
    <div class="form-questions-question" v-for="(question, index) in activeQuestions">
      <select-one :question="question" v-if="formStep === index && (question.question_type === 'select-one' || question.question_type === '')" />
      <select-many :question="question" v-if="formStep === index && question.question_type === 'select-many'" />
      <date :question="question" v-if="formStep === index && question.question_type === 'date'" />
    </div>
    <form-buttons />

  </div>
</template>

<script>
import SelectOne from '../question-templates/SelectOne';
import SelectMany from '../question-templates/SelectMany';
import Date from '../question-templates/DatePicker';
import FormButtons from '../form-elements/FormButtons';

export default {
  props: {},
  data() {
    return {
  
    }
  },
  components: {
    SelectOne,
    SelectMany,
    FormButtons,
    Date
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