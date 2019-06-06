<template>
  <div class="form-buttons-outer" :class="{single: (formStep === 0 && numberOfSteps != formStep) || (formStep === numberOfSteps && numberOfSteps === 0) }">
    <div v-if="formStep === 0 && numberOfSteps != formStep">
      <a href="#" class="btn btn-orange arrow" @click.prevent="navigateFormForward">Next</a>
    </div>
    <div class="form-buttons" v-if="formStep > 0 && formStep<numberOfSteps">
        <a href="#" class="btn btn-gray arrow" @click.prevent="navigateFormBackward">Back</a>
        <a href="#" class="btn btn-orange arrow" @click.prevent="navigateFormForward">Next</a>
    </div>
    <div class="form-buttons" v-if="formStep === numberOfSteps && numberOfSteps != 0">
      <a href="#" class="btn btn-gray arrow" @click.prevent="navigateFormBackward">Back</a>
      <a href="#" class="btn btn-orange arrow" @click.prevent="submitForm">Submit</a>
    </div>
    <div v-if="formStep === numberOfSteps && numberOfSteps === 0">
      <a href="#" class="btn btn-orange" @click.prevent="submitForm">Submit</a>
    </div>
  </div>
</template>

<script>

export default {
  props: [],
  data() {
    return {
  
    }
  },
  methods: {
    submitForm() {
      console.log('form submitted');

    }
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