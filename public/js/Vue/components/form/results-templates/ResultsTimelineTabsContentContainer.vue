<template>
  <div class="results-timeline-tabs-content-container" :class="section.slug" v-if="filteredPosts.length > 0">
        <div class="results-timeline-tabs-content-container-header-title">
          <span class="italics" v-if="section.secondary_title.length > 0">{{section.secondary_title}} </span><span class="strong">{{section.name}}</span>
        </div>
        <div v-if="resultsSubSections.length === 0">
          <standard-results  class="instruction-block" v-for="(post, index) in filteredPosts" :key="index" :post="post" />
        </div>
        <div v-if="resultsSubSections.length > 0">
          <categorized-results v-for="(section, index) in resultsSubSections" :key="index" :filteredPosts="filteredPosts" :category="section" />
        </div>
  </div>
</template>

<script>
import StandardResults from './InstructionBlockStandard';
import CategorizedResults from './InstructionBlockCategories';
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
    StandardResults,
    CategorizedResults
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
    resultsSubSections() {
      return this.$store.getters.GET_FORM_STATUS('currentTab').subTabs.filter(e => this.filteredPosts.some(elem => elem.retirement_tool_timeframe.indexOf(e.slug) > -1));
    },
    activeRules() {
      return this.$store.getters.ACTIVE_RULES;
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