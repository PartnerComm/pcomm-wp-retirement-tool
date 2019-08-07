<template>
  <div class="results-timeline-tabs-content-container" :class="section.slug" v-if="filteredPosts.length > 0">
        <div class="results-timeline-tabs-content-container-header-title">
          <span class="italics" v-if="section.secondary_title.length > 0" v-html="section.secondary_title"></span>&nbsp;<span class="strong" v-html="section.name"></span>
        </div>
        <div v-if="resultsSubSections.length === 0 && resultsSubCategories.length === 0">
          <standard-results  class="instruction-block" v-for="(post, index) in filteredPosts" :key="index" :post="post" />
        </div>
        <div v-if="resultsSubSections.length > 0">
          <categorized-results v-for="(section, index) in resultsSubSections" :key="index" :filteredPosts="filteredPosts" :category="section" type="timeframe"/>
        </div>
        <div v-if="resultsSubCategories.length > 0">
          <categorized-results v-for="(category, index) in resultsSubCategories" :key="index" :filteredPosts="filteredPosts" :category="category" type="category"/>
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
      },
      tabs: {
        type: Boolean,
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
    sortTerms(a,b) {
        if (parseInt(a.menu_order) < parseInt(b.menu_order))
          return -1;
        if (parseInt(a.menu_order) > parseInt(b.menu_order))
          return 1;
        return 0;
    }
  },
  computed: {
    filteredPosts() {
      if (this.tabs) {
        return this.$store.getters.POSTS_FILTERED_BY_MONTH.filter(e => e.retirement_tool_category.indexOf(this.section.slug) >-1 ).sort(this.sortTerms)
      }
      return this.allPosts.filter(e => e.retirement_tool_category.indexOf(this.section.slug) >-1).sort(this.sortTerms);
    },
    allPosts() {
      return this.$store.getters.POSTS_FILTERED_BY_ANSWERS;
    },
    resultsSections() {
      return this.$store.getters.GET_FORM_STATUS('resultsSections');
    },
    resultsSubSections() {
      return this.$store.getters.GET_FORM_STATUS('currentTab').subTabs.filter(e => this.filteredPosts.some(elem => elem.retirement_tool_timeframe.indexOf(e.slug) > -1));
    },
    resultsSubCategories() {
      return this.$store.getters.GET_FORM_STATUS('subCategories').filter(e => this.filteredPosts.some(elem => elem.retirement_tool_category.indexOf(e.slug) > -1) && parseInt(e.parent) != 0 );
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