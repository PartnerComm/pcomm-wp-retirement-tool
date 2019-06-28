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
    const selectedAnswers = context.getters.GET_FORM_STATUS('formAnswers');
    const monthNames = ["January", "February", "March","April", "May", "June", "July","August", "September", "October","November", "December"];
    selectedAnswers.forEach((el) => {
      console.log(el);
      if (el instanceof Date) {
        console.log('date');
        const day = el.getDate();
        const monthIndex = el.getMonth();
        const year = el.getFullYear();
        context.commit('ADD_SUMMARY_ANSWER',monthNames[monthIndex] + ' ' + day + ', ' + year)
      }
      else if (Object.prototype.toString.call(el) == '[object Array]') {
        console.log('array')
        el.forEach((arrayEl) => {
          context.commit('ADD_SUMMARY_ANSWER', arrayEl.name);
          context.commit('ADD_FILTER_ANSWER', arrayEl.slug);
        })
      }
      else {
        console.log('other');
        context.commit('ADD_SUMMARY_ANSWER', el.name);
        context.commit('ADD_FILTER_ANSWER', el.slug);
      }
    })
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
      context.commit('MUTATE_ANSWER_VALID', true);
    }
    const payload = newStep;
    context.commit('MUTATE_FORM_STEP', payload);
    window.scrollTo(0,0);
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
  GET_TAB_LABELS: async (context) => {
    const response = await axios.get('/wp-json/wp/v2/retirement_tool_timeframe?per_page=100');
    if (response.status === 200) {
      const payload = response.data;
      context.commit('MUTATE_KEY', {key: 'tabs', value: payload});
      context.dispatch('SET_CURRENT_TAB', payload[0]);
    }
  }, 
  GET_RETIREMENT_TOOL_RESULTS_SECTIONS: async (context) => {
    const response = await axios.get('/wp-json/wp/v2/retirement_tool_category?per_page=100');
    if (response.status === 200) {
      const payload = response.data;
      context.commit('MUTATE_KEY', {key: 'resultsSections', value: payload});
    }
  }, 
  GET_RETIREMENT_TOOL_POSTS: async (context) => {
    const response = await axios.get('/wp-json/wp/v2/retirement_tool_post?per_page=100');
    if (response.status === 200) {
      const payload = response.data;
      context.commit('MUTATE_KEY', {key: 'allPosts', value: payload});
    }
  },
  SET_ACTIVE_PATH: (context, value) => {
    const payload = value;
    context.commit('MUTATE_KEY', {key: 'activePath', value: payload});
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
  },
  SET_DATE: (context, value) => {
    const payload = {key: 'date', value: value};
    context.commit('MUTATE_KEY', payload);
  },
  SET_CURRENT_TAB: (context, value) => {
    const payload = {key: 'currentTab', value: value};
    context.commit('MUTATE_KEY', payload);
  },
  UPDATE_FEEDBACK_BUTTON: (context, value) => {
    const payload = {key: 'showFeedbackButton', value: value};
    context.commit('MUTATE_KEY', payload);
  },
  UPDATE_FEEDBACK_FORM: (context, value) => {
    const payload = {key: 'showFeedbackForm', value: value};
    context.commit('MUTATE_KEY', payload);
  }
}

export default actions;

