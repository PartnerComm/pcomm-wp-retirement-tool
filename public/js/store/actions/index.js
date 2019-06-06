import axios from 'axios';

const actions = {
  INCREMENT_FORM_STEP: (context) => {
    // const payload = ;
    context.commit('MUTATE_FORM_STEP', payload);
  },
  DECREMENT_FORM_STEP: (context) => {
    // const payload = ;
    context.commit('MUTATE_FORM_STEP', payload);
  },
  SELECT_PROGRAM: (context, value) => {
    const payload = value;
    context.commit('MUTATE_SELECTED_PROGRAM', payload);
  },
  SELECTED_PROGRAM_ID: (context, value) => {
    const payload = value;
    context.commit('MUTATE_SELECTED_PROGRAM_ID', payload);
  },
  DISABLE_FORM_INTRO: (context) => {
    const payload = false;
    context.commit('MUTATE_FORM_INTRO', payload);
  },
  ENABLE_FORM_QUESTIONS: (context) => {
    const payload = true;
    context.commit('MUTATE_FORM_QUESTIONS', payload);
    window.scrollTo(0,0);
  },
  SUBMIT_COMPLETED_FORM: async (context, value) => {
    let formAnswers = context.getters.GET_FORM_ANSWERS;
    let finalData = new FormData;
    finalData.append('action', 'pcomm_wp_secure_signup_save_entry');
    finalData.append('security', window.anthem_ajax.nonce);
    finalData.append('pilot_ID', formAnswers.id);
    finalData.append('firstName', formAnswers.firstName);
    finalData.append('lastName', formAnswers.lastName);
    finalData.append('email', formAnswers.email);
    finalData.append('phoneNumber', formAnswers.phoneNumber);
    finalData.append('otherAnswers', JSON.stringify(formAnswers.otherAnswers));
    finalData.append('answers', JSON.stringify(formAnswers));
    const response =  await axios.post(window.anthem_ajax.ajaxurl, finalData);
    if (response.status === 200) {
      let data = new FormData;
      data.append('action', 'decrement_spots_left');
      data.append('security', window.anthem_ajax.nonce);
      data.append('id', context.getters.GET_SELECTED_PROGRAM_ID);
      axios.post(window.anthem_ajax.ajaxurl, data).then(response => {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
    context.commit('MUTATE_FORM_QUESTIONS', false);
    context.commit('MUTATE_FORM_THANKS', true);
    window.scrollTo(0,0);
  },
  UPDATE_REGISTRATION_VALUE: (context, {key, value}) => {
    const formAnswers = context.getters.GET_FORM_ANSWERS;
    formAnswers[key] = value;
    context.commit('MUTATE_FORM_ANSWERS_KEY', {key: key, value: value});
  },
  UPDATE_OTHER_ANSWERS: (context, {key, value}) => {
    context.commit('MUTATE_OTHER_ANSWERS', {key: key, value: value});
  },
  NAVIGATE_FORM: (context, value) => {
    const currentStep = context.getters.GET_FORM_STEP;
    let newStep = ''
    if (value === 'plus') {
      newStep = parseInt(currentStep) + 1;
    } else {
      newStep = parseInt(currentStep) - 1;
      context.commit('MUTATE_ANSWER_VALID', true)
    }
    const payload = newStep;
    const disqualified = context.getters.GET_USER_ELIGIBILITY;
    if (disqualified === true) {
      context.commit('MUTATE_FORM_QUESTIONS', false);
      context.commit('MUTATE_FORM_INELIGIBLE', true);
      window.scrollTo(0,0);
    } else {
      context.commit('MUTATE_FORM_STEP', payload);
    }
  },
  UPDATE_VALIDATION: (context, value) => {
    const payload = value;
    context.commit('MUTATE_ANSWER_VALID', payload);
  },
  RESET_FORM_DEFAULTS: (context) => {
    const payload = { };
    payload.firstName = ''; 
    payload.lastName = '';
    payload.phoneNumber = ''; 
    payload.email = '' 
    payload.otherAnswers = {};
    context.commit('MUTATE_FORM_STATE', payload);
  },
  SET_FORM_DEFAULT_STATE: (context, dispatch) => {
    context.dispatch('RESET_FORM_DEFAULTS');
  }
}

export default actions;

