<template>
<div>
<svg v-if="!active" width="31px" height="31px" viewBox="0 0 31 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Tab-Item" transform="translate(-60.000000, -70.000000)" fill="#FFFFFF" stroke="#3777BC" stroke-width="3">
            <g transform="translate(0.000000, 17.000000)" id="Timeline-Stop-Empty">
                <g transform="translate(62.000000, 55.000000)">
                    <circle id="Oval" cx="13.5" cy="13.5" r="13.5"></circle>
                </g>
            </g>
        </g>
    </g>
</svg>

<svg v-if="active" width="43px" height="43px" viewBox="0 0 43 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Tab-Item-Selected" transform="translate(-54.000000, -64.000000)">
            <g id="Timeline-Selected" transform="translate(56.000000, 66.000000)">
                <circle id="Oval" stroke="#3777BC" stroke-width="3" fill="#FFFFFF" cx="19.5" cy="19.5" r="19.5"></circle>
                <circle id="Oval" fill="#3777BC" cx="19.5" cy="19.5" r="13.5"></circle>
            </g>
        </g>
    </g>
</svg>
</div>
</template>

<script>

export default {
  props: {
    active: {
          type: Boolean,
          required: true
    },
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