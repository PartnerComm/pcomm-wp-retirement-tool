<template>
<div>
  <div class="pr-2">
      <checkmark class="results-checkmark" color="#00A69A" fill="#00A69A" />
  </div>
  <div >
      <div class="instruction-block-text-strong" v-html="post.title.rendered"></div>
      <div class="instruction-block-text" v-html="post.content.rendered"></div>
  </div>
</div>
</template>

<script>
import Checkmark from '../../icons/Checkmark';

export default {
  props: {
    post: {
      type: Object,
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