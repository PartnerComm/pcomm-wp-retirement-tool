export default {
  GET_FORM_STEP: (state) => {
    return state.formStep;
  },
  GET_FORM_STATUS: (state) => (key) => {
    return state[key];
  },
  GET_SELECTED_PROGRAM: (state) => {
    return state.selectedProgram;
  },
  GET_SELECTED_PROGRAM_ID: (state) => {
    return state.selectedProgramID;
  },
  GET_FORM_ANSWERS: (state) => {
    return state.formAnswers;
  },
  GET_USER_ELIGIBILITY: (state) => {
    return state.userDisqualified;
  },
  ANSWER_VALID: (state) => {
    return state.answerValid;
  },
  EMAIL_VALID: (state) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(state.formAnswers.email).toLowerCase());
  },
  PHONE_VALID: (state) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return phoneRegex.test(String(state.formAnswers.phoneNumber).toLowerCase());
  }
}