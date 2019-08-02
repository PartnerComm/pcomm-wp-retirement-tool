<template>
  <div class="retirement-tool-rule-generator">
    <button role="button" @click.prevent="addRule">Add Rule</button>
    <div class="input-row" v-for="(rule, index) in rules">
      If 
      <select v-model="rules[index].type">
        <option value="default">--Select Rule Type--</option>
        <option value="contains">Contains</option>
        <option value="does-not-contain">Does not contain</option>
        <option value="contains-at-least">Contains at least</option>
      </select>
      <select v-model="rules[index].amount" v-if="rules[index].type === 'contains-at-least'">
        <option value="default">--Select Amount---</option>
        <option value="multiple">Multiple</option>
        <option value="all">All</option>
      </select>
      <select v-model="rules[index].answer">
        <option value="default">--Select Answers---</option>
        <option>Medical</option>
        <option>Pension</option>
        <option>RSP</option>
      </select>
      <select v-model="rules[index].action">
        <option value="default">--Select Action---</option>
        <option>Always show</option>
        <option>Do not show</option>
      </select>
      <button role="button" @click.prevent="deleteRule(index)">X</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {},
  data() {
    return {
      rules: [
        {
          type: 'default',
          amount: 'default',
          answer: 'default',
          action: 'default'
        }
      ]
    }
  },
  components: {
  
  },
  methods: {
    addRule() {
      const blankObject = {
          type: 'default',
          amount: 'default',
          answer: 'default',
          action: 'default'
        }
      this.rules.push(blankObject);
    },
    deleteRule(index) {
      this.rules.splice(index, 1);
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