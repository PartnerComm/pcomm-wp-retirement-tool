<template>
  <div class="results-timeline-tabs-content-container" :class="section.slug" v-if="filteredPosts.length > 0">
        <div class="results-timeline-tabs-content-container-header-title">
          <span class="italics" v-if="section.secondary_title.length > 0">{{section.secondary_title}} </span><span class="strong">{{section.name}}</span>
        </div>
        <div class="instruction-block" v-for="(post, index) in filteredPosts" :key="index">
            <div class="pr-2">
                <checkmark class="results-checkmark" color="#00A69A" fill="#00A69A" />
            </div>
            <div >
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
      section: {
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
    filteredPosts() {
        return this.$store.getters.POSTS_FILTERED_BY_MONTH.filter(e => e.retirement_tool_category.indexOf(this.section.slug) >-1 )
    },
    resultsSections() {
      return this.$store.getters.GET_FORM_STATUS('resultsSections');
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