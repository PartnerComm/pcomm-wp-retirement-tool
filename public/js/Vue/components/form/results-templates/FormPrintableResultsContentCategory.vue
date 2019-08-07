<template>
  <div :class="category.slug">
    <div class="results-timeline-tabs-content-container-header-title printable" v-if="filteredPosts.length > 0">
      <span class="italics" v-if="category.secondary_title.length > 0">{{category.secondary_title}} </span><span class="strong">{{category.name}}</span>
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
import Checkmark from '../../icons/Checkmark';
import StandardResults from './InstructionBlockStandard';
import CategorizedResults from './InstructionBlockCategories';
export default {
  props: {
    section: {
      type: Object,
      required: true
    },
    category: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
  
    }
  },
  components: {
    Checkmark,
    StandardResults,
    CategorizedResults
  },
  methods: {
  
  },
  computed: {
    filteredPosts() {
        return this.$store.getters.POSTS_FILTERED_BY_ANSWERS.filter(e => e.retirement_tool_timeframe.indexOf(this.section.slug) >-1 && e.retirement_tool_category.indexOf(this.category.slug) >-1 )
    },
    resultsSubSections() {
      return this.$store.getters.GET_FORM_STATUS('tabs').filter(e => this.filteredPosts.some(elem => elem.retirement_tool_timeframe.indexOf(e.slug) > -1) && parseInt(e.parent) != 0);
    },
    resultsSubCategories() {
      return this.$store.getters.GET_FORM_STATUS('subCategories').filter(e => this.filteredPosts.some(elem => elem.retirement_tool_category.indexOf(e.slug) > -1) && parseInt(e.parent) != 0 );
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