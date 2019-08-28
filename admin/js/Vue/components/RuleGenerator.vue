<template>
  <div class="retirement-tool-rule-generator">
    <button role="button" class="add-rule-button" @click.prevent="addRule">Add Rule</button>
    <transition-group name="list" tag="div">
      <div class="input-row" v-for="(rule, index) in rules" :key="'rule-' + index">
        If 
        <select v-model="rules[index].type">
          <option value="default">--Select Rule Type--</option>
          <option value="contains">Contains</option>
          <option value="contains-only">Contains Only</option>
          <option value="contains-all">Contains All</option>
          <option value="does-not-contain">Does not contain</option>
        </select>
        <div class="answers">
          <span :class="{active: expand === index}" @click="expandAnswers(index)">Answers ({{rules[index].answers.length}} selected)</span>
          <div class="answers-checkboxes" v-show="expand === index">
            <!-- <div class="answers-choice" v-for="answer in answerChoices">
              <input :id="answer.slug+index" :value="answer.slug" type="checkbox" v-model="rules[index].answers" />
              <label for="answer.slug">{{answer.name}}</label>
            </div> -->
            <div class="answers-question-label" v-for="(question, index) in allQuestions" v-if="question.questions && question.questions.length > 0">
              <div class="answers-question-label-title">{{question.name}}</div>
              <div class="answers-choice" v-for="answer in question.questions" v-if="question.id != answer.parent && rules[index].answers">
                <input :id="answer.slug+index" :value="answer.slug" type="checkbox" v-model="rules[index].answers" />
                <label for="answer.slug">{{answer.name}}</label>
              </div>
            </div>
          </div>
        </div>
        <select v-model="rules[index].action">
          <option value="default">--Select Action---</option>
          <option value="always-show">Always show</option>
          <option value="do-not-show">Do not show</option>
        </select>
        <button role="button" class="delete-button" @click.prevent="deleteRule(index)">X</button>
      </div>
    </transition-group>
    <input type="hidden" name="retirement_tool_rules" v-model="stringRules" />
  </div>
</template>

<script>
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
      const confirm = window.confirm('Are you sure you wish to delete this rule?');
      if (confirm) {
        this.rules.splice(index, 1);
      }
    },
    toggleExpand() {
      if (this.expand >=0) {
        this.expand = false;
      }
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
    },
    allQuestions() {
      return this.$store.getters.TOP_LEVEL_QUESTIONS;
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
.retirement-tool-rule-generator {
  padding: .5rem 0;
}
.add-rule-button {
  margin-bottom: 1rem;
  background-color: #49b2fc;
  color: #FFFFFF;
  border: none;
  padding: .25rem 2rem;
  font-size: 18px;
  font-weight: 700;
  border: 2px solid #49b2fc;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #000000;
    color: #49b2fc;
  }
}
.delete-button {
  background-color: #5a5859;
  color: #FFFFFF;
  font-weight: 700;
  border: 2px solid #5a5859;
  &:hover {
    cursor: pointer;
    background-color: #FFFFFF;
    color: #5a5859;
  }
}
button:focus {
  outline: none;
}
.input-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 18px;
  margin-bottom: .25rem;
  select {
    font-size: 18px;
    margin-bottom: .25rem;
  }
  select:hover, .answers:hover {
    cursor: pointer;
  }
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
      padding: .15rem 4rem .15rem .75rem;
      border-radius: 5px;
      position: relative;
      &:after {
        position: absolute;
        content: '';
        width: 0; 
        height: 0; 
        top: 10px;
        right: 20px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #000;
        transition: transform .5s ease;
      }
      &.active:after {
        transform: rotate(180deg);
        transition: transform .5s ease;
      }
      
    }
    &-question-label-title {
        font-weight: 700;
        margin-bottom: .5rem;
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

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to  {
  opacity: 0;
  transform: translateY(30px);
}
</style>