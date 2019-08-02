<template>
<div class="answers-checkboxes" @click="">
  <div class="answers-choice" v-for="(answer, index) in answerChoices">
    <input name="answer.slug" type="checkbox" value="answer.slug"/>
    <label for="answer.slug">{{answer.name}}</label>
  </div>
</div>
</template>

<script>

export default {
  props: {},
  data() {
    return {
      expand: false;
    }
  },
  components: {
  
  },
  methods: {
  
  },
  computed: {
    answerChoices() {
      return this.$store.getters.GET_ANSWERS;
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