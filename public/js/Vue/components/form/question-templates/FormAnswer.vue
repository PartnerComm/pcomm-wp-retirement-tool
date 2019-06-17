<template>
  <div class="form-answer" :class="{active: data.active}">
    <checkmark v-if="question && question.question_type === 'select-many'" :color="(active) ? '#00A69A':'#C6C6C6' " :fill="(active) ? '#00A69A' : '#FFFFFF'" />
    <radio v-if="question.question_type === 'select-one' || question.question_type === '' || !question" :color="(active) ? '#00A69A':'#C6C6C6' " :fill="(active) ? '#00A69A' : '#FFFFFF'" />
    {{data.name}}
  </div>
</template>

<script>
import Checkmark from '../../icons/Checkmark';
import Radio from '../../icons/Radio';

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    question: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
  
    }
  },
  components: {
    Checkmark,
    Radio
  },
  methods: {
  
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