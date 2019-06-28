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
  },
  POSTS_FILTERED_BY_MONTH: (state, getters) => {
    return getters.POSTS_FILTERED_BY_ANSWERS.filter(e => e.retirement_tool_timeframe.indexOf(state.currentTab.slug) > -1);
  },
  POSTS_FILTERED_BY_ANSWERS: (state) => {
    return state.allPosts.filter(e => {
      return state.filterAnswers.every(elem => e.retirement_tool_question.indexOf(elem) > -1 && e.post_tag.indexOf('intro-text') === -1 && e.post_tag.indexOf('feedback-additional-content') === -1);
    })
  },
  HELPFUL_RESOURCES: (state) => {
    return state.allPosts.filter(e => e.post_tag.indexOf('helpful-resources') >-1);
  },
  INTRO_POSTS: (state) => {
    return state.allPosts.filter(e => {
      return e.retirement_tool_question.indexOf(state.filterAnswers[0]) > -1 && e.post_tag.indexOf('intro-text') > -1;
    })
  },
  ADDITIONAL_CONTENT: (state) => {
    return state.allPosts.filter(e => {
      return e.post_tag.indexOf('feedback-additional-content') > -1;
    })
  }

}