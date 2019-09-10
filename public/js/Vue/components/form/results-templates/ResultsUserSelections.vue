<template>
  <div class="results-user-selections">
    <div class="results-user-selections-top">
        <div class="results-user-selections-header" @click="handleClick">
          <h1 class="results-user-selections-heading" v-html="selectionText"></h1>
          <circled-plus :showSelection="showSelection"/>
        </div>
        <div class="form-button">
            <button @click="activatePrinting" class="print-button mr-1" > <print /> Print</button>
            <button @click="resetForm" class="nav-button start-over" >Start Over</button>
        </div>
    </div>
    <div v-if="showSelection" class="results-user-selections-bottom">
            <div class="results-user-selections-item" v-for="(selection, index) in userSelections">
              <check-no-circle />
              {{selection.replace(/`/g, '')}}
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
      if (!this.showSelection) {
        window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: 'Button',label: 'show your selections'});
      }
       this.showSelection = !this.showSelection;
    },
    async activatePrinting() {
      this.$store.dispatch('UPDATE_PRINT_RESULTS', true);
      window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: 'Button',label: 'print'});

    },
    resetForm() {
      window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: 'Button',label: 'start over'});
      this.$store.dispatch('RESET_FORM');
    }
  },
  computed: {
    userSelections() {
      return this.$store.getters.GET_FORM_STATUS('selectionSummary');
    },
    selectionText() {
      return (this.showSelection) ? 'Hide your selections'  : 'Show your selections';
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