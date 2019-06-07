<template>
  <div class="form-answer" :class="{active: data.active}">
    <checkmark :color="(active) ? '#00A69A':'#C6C6C6' " :fill="(active) ? '#00A69A' : '#FFFFFF'" />
    {{data.name}}
  </div>
</template>

<script>
import Checkmark from '../../icons/Checkmark';

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
  
    }
  },
  components: {
    Checkmark
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