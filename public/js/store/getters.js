export default {
  GET_FORM_STEP: (state) => {
    return state.formStep;
  },
  GET_LAST_STEP: (state) => {
    return (state.activePath) ? state.activePath.questions.filter(e => e.parent === state.activePath.id).length-1 : 0;
  },
  GET_FORM_STATUS: (state) => (key) => {
    return state[key];
  },
  GET_FORM_ANSWERS: (state) => {
    return state.formAnswers;
  },
  ACTIVE_QUESTIONS: (state) => {
    return (state.activePath) ? state.activePath.questions.filter(e => e.parent === state.activePath.id) : false;
  },
  ACTIVE_PATH: (state) => {
    return state.activePath;
  }
}