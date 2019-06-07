import axios from 'axios';

const actions = {
  SELECT_PROGRAM: (context, value) => {
    const payload = value;
    context.commit('MUTATE_SELECTED_PROGRAM', payload);
  },
  SELECTED_PROGRAM_ID: (context, value) => {
    const payload = value;
    context.commit('MUTATE_SELECTED_PROGRAM_ID', payload);
  },
  UPDATE_FORM_INTRO: (context, value) => {
    const payload = value;
    context.commit('MUTATE_FORM_INTRO', payload);
  },
  UPDATE_FORM_QUESTIONS: (context, value) => {
    const payload = value;
    context.commit('MUTATE_FORM_QUESTIONS', payload);
    if (payload === true) {
      window.scrollTo(0,0);
    }
  },
  UPDATE_FORM_RESULTS: (context, value) => {
    const payload = value;
    context.commit('MUTATE_FORM_RESULTS', payload);
  },
  SUBMIT_COMPLETED_FORM: async (context, value) => {
    context.dispatch('COMMIT_CURRENT_SELECTION');
    context.commit('MUTATE_FORM_QUESTIONS', false);
    context.commit('MUTATE_FORM_RESULTS', true);
    window.scrollTo(0,0);
  },
  NAVIGATE_STEPS: (context, value) => {
    const currentStep = context.getters.GET_FORM_STEP;
    let newStep = ''
    if (value === 'plus') {
      newStep = parseInt(currentStep) + 1;
    } else {
      newStep = parseInt(currentStep) - 1;
      context.commit('MUTATE_ANSWER_VALID', true)
    }
    const payload = newStep;
    context.commit('MUTATE_FORM_STEP', payload);
  },
  RESET_FORM_DEFAULTS: (context) => {
    context.commit('MUTATE_KEY', {key: 'formAnswers', value: []});
  },
  SET_FORM_DEFAULT_STATE: (context, dispatch) => {
    context.dispatch('RESET_FORM_DEFAULTS');
  },
  GET_FORM_INTRO_PATHS: async (context) => {
    const response = await axios.get('/wp-json/wp/v2/retirement_tool_question?parent=0&per_page=100');
    if (response.status === 200) {
      const payload = response.data;
      context.commit('MUTATE_KEY', {key: 'formIntroPaths', value: payload});
    }
  }, 
  SET_ACTIVE_PATH: (context, value) => {
    const payload = value;
    context.commit('MUTATE_KEY', {key: 'activePath', value: payload});
    context.commit('ADD_ANSWER', payload);
    context.dispatch('SET_CURRENT_SELECTION', '');
  },
  SET_CURRENT_SELECTION: (context, value) => {
    const payload = value;
    context.commit('MUTATE_KEY', {key: 'currentSelection', value: payload})
  },
  COMMIT_CURRENT_SELECTION: (context) => {
    const payload = context.getters.GET_FORM_STATUS('currentSelection');
    context.commit('ADD_ANSWER', payload);
    context.dispatch('SET_CURRENT_SELECTION', '');
  },
  REMOVE_LAST_SELECTION: (context, value) => {
    context.commit('REMOVE_ANSWER');
  }
}

export default actions;

