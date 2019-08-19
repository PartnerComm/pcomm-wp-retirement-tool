<template>
  <div class="form-answer" :class="{active: data.active, inactive: inactive}">
    <div class="form-answer-icon">
      <checkmark v-if="question && question.question_type === 'select-many'" :color="circleColor" :fill="(active) ? '#00A69A' : '#FFFFFF'" />
      <radio v-if="question.question_type === 'select-one' || question.question_type === '' || !question" :color="circleColor" :fill="(active) ? '#00A69A' : '#FFFFFF'" />
    </div>
    <span class="form-answer-text" v-html="filteredAnswer"></span>
    <div class="form-answer-tooltip" :class="{active: tooltip}" v-if="data.description" @mouseover="toggleTooltip(true)" @mouseleave="toggleTooltip(false)">
      <info />
      <div class="form-answer-tooltip-body" v-if="data.description && tooltip" v-html="data.description"></div>
    </div>
  </div>
</template>

<script>
import Checkmark from '../../icons/Checkmark';
import Radio from '../../icons/Radio';
import Info from '../../icons/Info';

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
    },
    inactive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      tooltip: false
    }
  },
  components: {
    Checkmark,
    Radio,
    Info
  },
  methods: {
    toggleTooltip(value) {
      this.tooltip = value;
    },
  },
  computed: {
    circleColor() {
      if (this.inactive) {
        return '#C6C6C6';
      }
      return '#00A69A';
    },
    filteredAnswer() {
      let answer = this.data.name;
      if (answer.includes('`')) {
          var rx = answer.match(/`(.*)`/)[1];
          var re = answer.match(/`(.*)`/)[0];
          answer = answer.replace(re, "<span>" + rx + "</span>");
      }
      return answer
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