<template>

</template>

<script>

export default {
  props: {},
  data() {
    return {
  
    }
  },
  components: {
  
  },
  methods: {
  
  },
  computed: {
    filteredPosts() {
        return this.$store.getters.POSTS_FILTERED_BY_ANSWERS.filter(e => e.retirement_tool_timeframe.indexOf(this.section.slug) >-1 && e.retirement_tool_category.indexOf(this.category.slug) >-1 )
    },
  },
  created() {

  },
  mounted() {

  }
  
  }

</script>

<style>

</style>