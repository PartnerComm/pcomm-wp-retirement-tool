<template>
  <section class="qf-view helpful-resources-view">
      <div class="container">
          <div class="qf-view-content qf-view-helpful-resources">
          <h2 v-html="resourcesPost.title.rendered"></h2>

        <div class="callout-content">
          <div class="text col-sm-12 retirement-tool-resources" v-html="resourcesPost.content.rendered">
           
          </div>
        </div>
          </div>
      </div>
  </section>
</template>

<script>

export default {
  props: [],
  data() {
    return {
      
    }
  },
  methods: {
  
  },
  computed: {
    resourcesPost() {
      return this.$store.getters.HELPFUL_RESOURCES[0];
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