<template>
  <div class="form-intro">
    <div class="form-option" v-for="(path, index) in paths" @click="selectPath(path)">
      <div class="form-answer" :active="(selectedPath && selectedPath.id === path.id) ? true : false" :class="{active: selectedPath && selectedPath.id === path.id}">
        <radio :color="(selectedPath && selectedPath.id === path.id) ? '#00A69A':'#C6C6C6' " :fill="(selectedPath && selectedPath.id === path.id) ? '#00A69A' : '#FFFFFF'" />
          {{path.name}}
      </div>
    </div>
    <form-buttons @navigate-forward="setActivePath"/>
  </div>
</template>

<script>
import FormAnswer from '../question-templates/FormAnswer';
import FormButtons from '../form-elements/FormButtons';
import Radio from '../../icons/Radio';

export default {
  props: {},
  data() {
    return {
      selectedPath: ''
    }
  },
  components: {
    FormAnswer,
    FormButtons,
    Radio
  },
  methods: {
    selectPath(path) {
      this.selectedPath = path;
      this.$store.dispatch('SET_CURRENT_SELECTION', path);
    },
    setActivePath() {
      this.$store.dispatch('SET_ACTIVE_PATH', this.selectedPath);
      this.$store.dispatch('UPDATE_FORM_INTRO', false);
      if (this.activeQuestions.length>0) {
        this.$store.dispatch('UPDATE_FORM_QUESTIONS', true);
      } else {
        this.$store.dispatch('UPDATE_FORM_RESULTS', true);
      }
    }
  },
  computed: {
    paths() {
      return this.$store.getters.GET_FORM_STATUS('formIntroPaths');
    },
    activeQuestions() {
      return this.$store.getters.ACTIVE_QUESTIONS;
    },
  },
  created() {

  },
  mounted() {
    this.$store.dispatch('GET_FORM_INTRO_PATHS');
  }
  
  }

</script>

<style>

</style>