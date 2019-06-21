<template>
  <div class="results-user-selections">
    <div class="results-user-selections-top">
        <div class="content">
            <h1 v-if="!showSelection">Show your selections</h1><h1 v-if="showSelection">Hide your selections</h1>
            <svg class="svg-circleplus" viewBox="0 0 100 100" v-on:click="handleClick" >
              <circle cx="50" cy="50" r="45" fill="none" stroke-width="7.5"></circle>
              <line x1="32.5" y1="50" x2="67.5" y2="50" stroke-width="5" ></line>
              <line x1="50" y1="32.5" x2="50" y2="67.5" stroke-width="5" v-if="!showSelection"></line>
            </svg>
        </div>
        <div class="form-button">
            <button class="print-button mr-1" > <print /> Print</button>
            <button class="nav-button start-over" >Start Over</button>
        </div>
    </div>
    <div v-if="showSelection" class="results-user-selections-bottom">
            <svg width="31px" height="31px">
                <polygon id="Path" fill="#00A69A" points="16.8794319 10.125 12.5864101 14.3813903 10.9643181 12.7731162 9.28125 14.4418129 10.9033588 16.0501037 12.5864101 17.71875 14.2694275 16.0501037 18.5625 11.7936631"></polygon>
            </svg>
            Test
    </div>
  </div>
</template>

<script>
import Radio from '../../icons/Radio';
import Checkmark from '../../icons/Checkmark';
import Print from '../../icons/Print';
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
    Print
  },
  methods: {
    handleClick() {
       this.showSelection = !this.showSelection;
    },
  
  },
  computed: {
  
  },
  created() {

  },
  mounted() {

  }
  
  }

</script>

<style>

</style>