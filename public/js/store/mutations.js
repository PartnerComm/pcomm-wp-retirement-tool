export default {
  MUTATE_FORM_STEP: (state, value) => {
    state.formStep = value;
  },
  MUTATE_SELECTED_PROGRAM: (state, value) => {
    state.selectedProgram = value;
  },
  MUTATE_SELECTED_PROGRAM_ID: (state, value) => {
    state.selectedProgramID = value;
  },
  MUTATE_FORM_INTRO: (state, value) => {
    state.formIntro = value;
  },
  MUTATE_FORM_QUESTIONS: (state, value) => {
    state.formQuestions = value;
  },
  MUTATE_FORM_THANKS: (state, value) => {
    state.formThanks = value;
  },
  MUTATE_FORM_INELIGIBLE: (state, value) => {
    state.formIneligible = value;
  },
  MUTATE_FORM_ANSWERS_KEY: (state, {key, value}) => {
    state.formAnswers[key] = value;
  },
  MUTATE_OTHER_ANSWERS: (state, {key, value}) => {
    state.formAnswers.otherAnswers[key] = value;
  },
  MUTATE_DISQUALIFY_USER: (state, value) => {
    state.userDisqualified = value;
  },
  MUTATE_FORM_STATE: (state, value) => {
    state.formAnswers = value;
  },
  MUTATE_ANSWER_VALID: (state, value) => {
    state.answerValid = value;
  }
};
