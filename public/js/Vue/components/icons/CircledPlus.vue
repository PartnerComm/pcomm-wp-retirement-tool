<template>
  <svg class="svg-circleplus" viewBox="0 0 100 100" >
    <circle cx="50" cy="50" r="45" fill="none" stroke-width="7.5"></circle>
    <line x1="32.5" y1="50" x2="67.5" y2="50" stroke-width="5" ></line>
    <line x1="50" y1="32.5" x2="50" y2="67.5" stroke-width="5" v-if="!showSelection"></line>
  </svg>
</template>

<script>

export default {
  props: {
    showSelection: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
  
    }
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