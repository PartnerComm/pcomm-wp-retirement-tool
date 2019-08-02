<template>
  <div class="retirement-tool-rule-generator">
    <button role="button" @click.prevent="addRule">Add Rule</button>
    <div class="input-row" v-for="(rule, index) in rules">
      If 
      <select v-model="rules[index].type">
        <option value="default">--Select Rule Type--</option>
        <option value="contains">Contains</option>
        <option value="contains-only">Contains Only</option>
        <option value="contains-all">Contains All</option>
        <option value="does-not-contain">Does not contain</option>
      </select>
      <div class="answers">
        <span @click="expandAnswers(index)">Answers</span>
        <div class="answers-checkboxes" v-show="expand === index">
          <div class="answers-choice" v-for="answer in answerChoices">
            <input :id="answer.slug+index" :value="answer.slug" type="checkbox" @click="addAnswer(index, answer.slug)" v-model="rules[index].answers" />
            <label for="answer.slug">{{answer.name}}</label>
          </div>
        </div>
      </div>
      <select v-model="rules[index].action">
        <option value="default">--Select Action---</option>
        <option value="always-show">Always show</option>
        <option value="do-not-show">Do not show</option>
      </select>
      <button role="button" @click.prevent="deleteRule(index)">X</button>
    </div>
    <input type="hidden" name="retirement_tool_rules" v-model="stringRules" />
  </div>
</template>

<script>
// v-model="rules[index].answer"
export default {
  props: {
    ruleset: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      rules: (this.ruleset) ? JSON.parse(this.ruleset) : [],
      expand: false
    }
  },
  components: {
  
  },
  methods: {
    addRule() {
      const blankObject = {
          type: 'default',
          amount: 'default',
          answers: [],
          action: 'default'
        }
      this.rules.push(blankObject);
    },
    deleteRule(index) {
      this.rules.splice(index, 1);
    },
    expandAnswers(index) {
      if (this.expand === index) {
        this.expand = false;
      } else {
        this.expand = index;
      }
    },
  },
  computed: {
    stringRules() {
      return JSON.stringify(this.rules);
    },
    answerChoices() {
      return this.$store.getters.GET_ANSWERS;
    }
  },
  created() {

  },
  mounted() {
    this.$store.dispatch('GET_RETIREMENT_QUESTIONS');
  }
  
}

</script>

<style lang="scss" scoped>
.input-row {
  display: flex;
  align-items: center;
  select, div, button {
    margin-left: 1rem;
  }
  .answers {
    position: relative;
    span {
      border: 1px solid #ddd;
      box-shadow: inset 0 1px 2px rgba(0,0,0,.07);
      background-color: #fff;
      color: #32373c;
      padding: .25rem 4rem .25rem .75rem;
      border-radius: 5px;
    }
    
    &-checkboxes {
      background-color: #FFFFFF;
      box-shadow: 0 3px 9px 0 rgba(0,0,0,.12);
      position: absolute;
      top: 2rem;
      left: -1rem;
      min-width: 300px;
      padding: .5rem 2rem .5rem 0;
      z-index: 2000;
    }
    &-choice {
      display: flex;
      margin-bottom: .25rem;
      align-items: center;
    }
  }
}
</style>