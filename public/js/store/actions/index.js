import {RepositoryFactory} from '../../repository/RepositoryFactory.js';
import axios from 'axios';
import moment from 'moment';

const PostRepository = RepositoryFactory.get('post');
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
      window.scrollTo(0,220);
    }
  },
  UPDATE_FORM_RESULTS: (context, value) => {
    const payload = value;
    context.commit('MUTATE_FORM_RESULTS', payload);
  },
  UPDATE_PRINT_RESULTS: (context, value) => {
    const payload = value;
    context.commit('MUTATE_PRINT_RESULTS', payload);
  },
  SUBMIT_COMPLETED_FORM: async (context, value) => {
    context.dispatch('COMMIT_CURRENT_SELECTION');
    const selectedAnswers = context.getters.GET_FORM_STATUS('formAnswers');
    const monthNames = ["January", "February", "March","April", "May", "June", "July","August", "September", "October","November", "December"];
    selectedAnswers.forEach((el) => {
      if (el instanceof Date) {
        const day = el.getDate();
        const monthIndex = el.getMonth();
        const year = el.getFullYear();
        context.commit('ADD_SUMMARY_ANSWER',monthNames[monthIndex] + ' ' + day + ', ' + year)
      }
      else if (Object.prototype.toString.call(el) == '[object Array]') {
        el.forEach((arrayEl) => {
          context.commit('ADD_SUMMARY_ANSWER', arrayEl.name);
          context.commit('ADD_FILTER_ANSWER', arrayEl.slug);
        })
      }
      else {
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
    window.scrollTo(0,220);
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
      context.commit('SET_TABS', payload);
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
      let payload = response.data;
      payload.forEach(e => {
        if (e.meta.retirement_tool_rules.length > 0) {
          e.meta.retirement_tool_rules = JSON.parse(e.meta.retirement_tool_rules);
          e.meta.dont_show = e.meta.retirement_tool_rules.filter(elem => elem.action === 'do-not-show');
          e.meta.always_show = e.meta.retirement_tool_rules.filter(elem => elem.action === 'always-show');
        }
      })

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
    if (context.getters.GET_FORM_STATUS('currentExclusions') != '') {
      const payload2 = context.getters.GET_FORM_STATUS('currentExclusions');
      context.commit('COMMIT_EXCLUSIONS', payload2);
      context.dispatch('SET_EXCLUDED_ANSWERS', '');
    }
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
  },
  UPDATE_FEEDBACK_SUCCESS: (context, value) => {
    const payload = {key: 'showFeedbackSuccess', value: value};
    context.commit('MUTATE_KEY', payload);
  },
  SUBMIT_FEEDBACK: async (context) => {
    const post = context.getters.FEEDBACK_NEW_POST;
    post.title = moment().format('LL hh:mma');
    post.content = 'Rating: ' + post.rating + '.  Feedback: ' + post.feedback;
    const response = await PostRepository.post(post);
    if (response && response.status === 201) {
      context.dispatch('UPDATE_FEEDBACK_FORM', false);
      context.dispatch('UPDATE_FEEDBACK_SUCCESS', true);
    }
  },
  UPDATE_FEEDBACK_VALUE: (context, {key, value}) => {
    const feedbackPost = context.getters.FEEDBACK_NEW_POST;
    feedbackPost[key] = value;
    context.commit('MUTATE_FEEDBACK_KEY', feedbackPost);
  },
  RESET_FORM: (context) => {
    context.dispatch('SET_CURRENT_SELECTION', '');
    context.dispatch('SET_CURRENT_TAB', context.getters.GET_FORM_STATUS('tabs')[0]);
    context.commit('MUTATE_KEY', {key: 'date', value: ''});
    context.commit('MUTATE_KEY', {key: 'formAnswers', value: []});
    context.commit('MUTATE_KEY', {key: 'selectionSummary', value: []});
    context.commit('MUTATE_KEY', {key: 'filterAnswers', value: []});
    context.commit('MUTATE_KEY', {key: 'activePath', value: ''});
    context.commit('MUTATE_KEY', {key: 'formAnswers', value: []});
    context.commit('MUTATE_KEY', {key: 'formStep', value: 0});
    context.commit('MUTATE_FORM_RESULTS', false);
    context.commit('MUTATE_FORM_INTRO', true);

  },
  SET_EXCLUDED_ANSWERS: (context, value) => {
    context.commit('MUTATE_KEY', {key: 'currentExclusions', value: value});
  },
  SET_SELECT_ALL_ANSWERS: (context, value) => {
    context.commit('MUTATE_KEY', {key: 'selectAllAnswers', value: value});
  }
}

export default actions;

