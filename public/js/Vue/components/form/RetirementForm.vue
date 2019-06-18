<template>
  <section class="retirement-tool-wrapper">
    <questions-header :title="formtitle" v-if="formIntro || formQuestions" />
    <results-header v-if="formResults" />
    <div class="container">
      <div class="retirement-form">
        <form-intro :title="introtitle" :subtitle="introsubtitle" v-if="formIntro"></form-intro>
        <form-questions v-if="formQuestions"></form-questions>
        <form-results v-if="formResults"></form-results>
      </div>
    </div>
  </section>
</template>

<script>
import FormIntro from './form-steps/FormIntro';
import FormQuestions from './form-steps/FormQuestions';
import FormResults from './form-steps/FormResults';
import QuestionsHeader from './form-elements/QuestionsHeader';
import ResultsHeader from './form-elements/ResultsHeader';

export default {
  props: {
    formtitle: {
      type: String,
      required: false
    },
    introtitle: {
      type: String,
      required: false
    },
    introsubtitle: {
      type: String,
      required: false
    }
  },
  data() {
    return {
  
    }
  },
  components: {
    FormIntro,
    FormQuestions,
    FormResults,
    QuestionsHeader,
    ResultsHeader
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