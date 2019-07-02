<template>
  <div class="results-user-selections">
    <div class="results-user-selections-top">
        <div class="content">
            <span class="results-user-selections-header" @click="handleClick">
              <h1 v-if="!showSelection">Show your selections</h1><h1 v-if="showSelection">Hide your selections</h1>
              <circled-plus :showSelection="showSelection"/>
            </span>
        </div>
        <div class="form-button">
            <button @click="activatePrinting" class="print-button mr-1" > <print /> Print</button>
            <button @click="resetForm" class="nav-button start-over" >Start Over</button>
        </div>
    </div>
    <div v-if="showSelection" class="results-user-selections-bottom">
            <div class="results-user-selections-item" v-for="(selection, index) in userSelections">
              <check-no-circle />
              {{selection}}
            </div>
    </div>
  </div>
</template>

<script>
import Radio from '../../icons/Radio';
import Checkmark from '../../icons/Checkmark';
import Print from '../../icons/Print';
import CheckNoCircle from '../../icons/CheckNoCircle';
import CircledPlus from '../../icons/CircledPlus';
export default {
  props: {

  },
  data() {
    return {
        showSelection: false
    }
  },
  components: {
    Radio,
    Checkmark,
    Print,
    CheckNoCircle,
    CircledPlus
  },
  methods: {
    handleClick() {
       this.showSelection = !this.showSelection;
    },
    activatePrinting() {
      this.$store.dispatch('UPDATE_PRINT_RESULTS', true);
    },
    resetForm() {
      this.$store.dispatch('RESET_FORM');
    }
  },
  computed: {
    userSelections() {
      return this.$store.getters.GET_FORM_STATUS('selectionSummary');
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