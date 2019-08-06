<template>
<div v-if="categorizedPosts">
  <div class="instruction-block-category">{{category.name}}</div>
  <div v-for="(post, index) in categorizedPosts" class="instruction-block instruction-block-categories" :key="index">
      <div class="pr-2">
        <checkmark class="results-checkmark" color="#00A69A" fill="#00A69A" />
      </div>
      <div>
          <div class="instruction-block-text-strong" v-html="post.title.rendered"></div>
          <div class="instruction-block-text" v-html="post.content.rendered"></div>
      </div>
  </div>
</div>
</template>

<script>
import Checkmark from '../../icons/Checkmark';

export default {
  props: {
    filteredPosts: {
      type: Array,
      required: true
    },
    category: {
      type: Object,
      required: true
    },
    type: {
      type: String,
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
    categorizedPosts() {
      if (this.type === 'timeframe') {
        return this.filteredPosts.filter(e => e.retirement_tool_timeframe.indexOf(this.category.slug) > -1);
      }
      return this.filteredPosts.filter(e => e.retirement_tool_category.indexOf(this.category.slug) > -1);
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