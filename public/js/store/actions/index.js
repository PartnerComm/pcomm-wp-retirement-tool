import {RepositoryFactory} from '../../repository/RepositoryFactory.js';
import axios from 'axios';
import moment from 'moment';

const PostRepository = RepositoryFactory.get('post');
const WpAjaxRepository = RepositoryFactory.get('wp');

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
      setTimeout(window.scrollTo(0,220), 100);
    }
  },
  UPDATE_FORM_RESULTS: (context, value) => {
    const payload = value;
    context.commit('MUTATE_FORM_RESULTS', payload);
  },
  UPDATE_PRINT_RESULTS: async (context, value) => {
    const payload = value;
    await context.commit('MUTATE_PRINT_RESULTS', payload);
    if (value === true) {
      window.print();
    }
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
          context.commit('ADD_ANALYTICS_ANSWER', arrayEl.name);
          context.commit('ADD_FILTER_ANSWER', arrayEl.slug);
        })
      }
      else {
        context.commit('ADD_SUMMARY_ANSWER', el.name);
        context.commit('ADD_ANALYTICS_ANSWER', el.name);
        context.commit('ADD_FILTER_ANSWER', el.slug);
      }
    })
    window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: 'Button',label: 'submit'});
    window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: 'Responses',label: context.getters.GET_FORM_STATUS('analyticsAnswers').join(',')});

    context.commit('MUTATE_FORM_QUESTIONS', false);
    context.commit('MUTATE_FORM_RESULTS', true);
      setTimeout(window.scrollTo(0,0), 100);
  },
  NAVIGATE_STEPS: (context, value) => {
    const currentStep = context.getters.GET_FORM_STEP;
    let newStep = ''
    if (value === 'plus') {
      newStep = parseInt(currentStep) + 1;
      window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: 'Button',label: 'next ' + parseInt(currentStep+2)});
    } else {
      newStep = parseInt(currentStep) - 1;

      context.commit('MUTATE_ANSWER_VALID', true);
    }
    const payload = newStep;
    context.commit('MUTATE_FORM_STEP', payload);
    setTimeout(window.scrollTo(0,220), 100);
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
      context.dispatch('SET_INITIAL_TAB');
      context.commit('MUTATE_KEY', {key: 'tabsFetched', value: true});

    }
  }, 
  SET_INITIAL_TAB: (context) => {
    const tabs = context.getters.GET_FORM_STATUS('tabs');
    const activePath = context.getters.ACTIVE_PATH;
    const questions = context.getters.GET_FORM_STATUS('formIntroPaths');
    if (activePath === questions[questions.length-1]) {
      context.dispatch('SET_CURRENT_TAB', tabs[tabs.length-1]);
    } else {
      context.dispatch('SET_CURRENT_TAB', tabs[0]);
    }
  },
  GET_SUBCATEGORIES: async (context) => {
    const response = await axios.get('/wp-json/wp/v2/retirement_tool_category?per_page=100');
    if (response.status === 200) {
      const payload = response.data;
      context.commit('MUTATE_KEY', {key: 'subCategories', value: payload});
      context.commit('MUTATE_KEY', {key: 'categoriesFetched', value: true});
    }
  },
  GET_RETIREMENT_TOOL_RESULTS_SECTIONS: async (context) => {
    const response = await axios.get('/wp-json/wp/v2/retirement_tool_category?per_page=100');
    if (response.status === 200) {
      const payload = response.data;
      context.commit('MUTATE_KEY', {key: 'resultsSections', value: payload});
      context.commit('MUTATE_KEY', {key: 'sectionsFetched', value: true});

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
    const questions = context.getters.GET_FORM_STATUS('formQuestions');
    const formStep = context.getters.GET_FORM_STATUS('formStep');
    const activeQuestion = context.getters.ACTIVE_QUESTIONS[formStep];
    if (questions && activeQuestion) {
      if (activeQuestion.question_type === 'date') {
        window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: activeQuestion.name ,label: payload});
      }
      if (activeQuestion.question_type === 'select-one') {
        window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: activeQuestion.name ,label: payload.name});
      }
      if (activeQuestion.question_type === 'select-many') {
        window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: activeQuestion.name ,label: payload.map(e => e.name).join(',')});
      }
    }
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
    window.pcommAnalytics.trackAnalyticsEvent({category: 'RP Tool',action: 'Retirement Timeline',label: value.slug});
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
    const data = new FormData();
    data.append('title', moment().format('LL hh:mma'));
    data.append('content', 'Rating: ' + post.rating + '.  Feedback: ' + post.feedback);
    data.append('rating', post.rating);
    const response = await WpAjaxRepository.post('feedback_post', data);

    if (response && response.data.data.code === 201) {
      context.dispatch('UPDATE_FEEDBACK_FORM', false);
      context.dispatch('UPDATE_FEEDBACK_SUCCESS', true);
      window.localStorage.setItem("feedback", "complete");

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

