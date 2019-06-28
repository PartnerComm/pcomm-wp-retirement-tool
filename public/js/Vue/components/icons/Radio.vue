<template>
  <svg width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Radio Icon</title>
    <g id="Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="MSK-RetirementTool-05" transform="translate(-367.000000, -884.000000)">
            <g id="SingleSelection" transform="translate(368.000000, 885.000000)">
                <circle id="Oval" :stroke="color" stroke-width="2" :fill="fill" cx="13.5" cy="13.5" r="13.5"></circle>
                <circle id="Oval" :fill="background" cx="13.5" cy="13.5" r="7.5"></circle>
            </g>
        </g>
    </g>
</svg>
</template>

<script>

export default {
  props: {
    fill: {
      type: String,
      required: false,
      default: '#FFFFFF'
    },
    color: {
      type: String,
      required: false,
      default: '#C6C6C6'
    },
    background: {
      type: String,
      required: false,
      default: '#FFFFFF'
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