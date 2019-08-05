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
  MUTATE_FORM_RESULTS: (state, value) => {
    state.formResults = value;
  },
  MUTATE_PRINT_RESULTS: (state, value) => {
    state.printingResults = value;
  },
  MUTATE_ANSWER_VALID: (state, value) => {
    state.answerValid = value;
  },
  MUTATE_KEY: (state, {key, value}) => {
    state[key] = value;
  },
  ADD_ANSWER: (state, value) => {
    const payload = value;
    state.formAnswers.push(payload);
  },
  ADD_SUMMARY_ANSWER: (state, value) => {
    const payload = value;
    state.selectionSummary.push(payload);
  },
  ADD_FILTER_ANSWER: (state, value) => {
    const payload = value;
    state.filterAnswers.push(payload);
  },
  REMOVE_ANSWER: (state, value) => {
    state.formAnswers.pop();
  },
  MUTATE_FEEDBACK_KEY: (state, value) => {
    state.feedbackPost = value;
  },
  COMMIT_EXCLUSIONS: (state, value) => {
    value.forEach(e => {
      state.excludedAnswers.push(e.slug);
     })
  }
};
