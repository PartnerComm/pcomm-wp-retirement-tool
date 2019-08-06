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
    if (state.filterAnswers.length > 0) {
      let monthsPosts = getters.POSTS_FILTERED_BY_ANSWERS.filter(e => e.retirement_tool_timeframe.indexOf(state.currentTab.slug) > -1);
      
      return monthsPosts;
    }
  },
  POSTS_FILTERED_BY_ANSWERS: (state, getters) => {
    if (state.filterAnswers.length > 0) {
      let filteredPosts = state.allPosts.filter(e => {
        return state.filterAnswers.every(elem => e.retirement_tool_question.indexOf(elem) > -1) && e.post_tag.indexOf('intro-text') === -1 && e.post_tag.indexOf('feedback-additional-content') === -1;
      });
      if (getters.ACTIVE_RULES.always_show_only.length > 0) {
        getters.ACTIVE_RULES.always_show_only.forEach(e => {
          if (filteredPosts.indexOf(e) === -1) {
            filteredPosts.push(e);
          }
        })
      }
      if (getters.ACTIVE_RULES.always_show_contains.length > 0) {
        getters.ACTIVE_RULES.always_show_contains.forEach(e => {
          if (filteredPosts.indexOf(e) === -1) {
            filteredPosts.push(e);
          }
        })
      }
      if (getters.ACTIVE_RULES.always_show_contains_all.length > 0) {
        getters.ACTIVE_RULES.always_show_contains_all.forEach(e => {
          if (filteredPosts.indexOf(e) === -1) {
            filteredPosts.push(e);
          }
        })
      }
      if (getters.ACTIVE_RULES.always_show_not_contains.length > 0) {
        getters.ACTIVE_RULES.always_show_not_contains.forEach(e => {
          if (filteredPosts.indexOf(e) === -1) {
            filteredPosts.push(e);
          }
        })
      }
      if (getters.ACTIVE_RULES.dont_show_only.length > 0) {
        getters.ACTIVE_RULES.dont_show_only.forEach(e => {
          if (filteredPosts.indexOf(e) > -1) {
            filteredPosts.splice(filteredPosts.indexOf(e), 1);
          }
        })
      }
      if (getters.ACTIVE_RULES.dont_show_contains.length > 0) {
        getters.ACTIVE_RULES.dont_show_contains.forEach(e => {
          if (filteredPosts.indexOf(e) > -1) {
            filteredPosts.splice(filteredPosts.indexOf(e), 1);
          }
        })
      }
      if (getters.ACTIVE_RULES.dont_show_contains_all.length > 0) {
        getters.ACTIVE_RULES.dont_show_contains_all.forEach(e => {
          if (filteredPosts.indexOf(e) > -1) {
            filteredPosts.splice(filteredPosts.indexOf(e), 1);
          }
        })
      }
      if (getters.ACTIVE_RULES.dont_show_not_contains.length > 0) {
        getters.ACTIVE_RULES.dont_show_not_contains.forEach(e => {
          if (filteredPosts.indexOf(e) > -1) {
            filteredPosts.splice(filteredPosts.indexOf(e), 1);
          }
        })
      }
      return filteredPosts;
    }

    return false;
  },
  HELPFUL_RESOURCES: (state) => {
    if (state.allPosts && state.allPosts.length > 0) {
      return state.allPosts.filter(e => e.post_tag.indexOf('helpful-resources') >-1);
    }
  },
  INTRO_POSTS: (state) => {
    if (state.allPosts && state.allPosts.length > 0) {
      return state.allPosts.filter(e => {
        return e.retirement_tool_question.indexOf(state.filterAnswers[0]) > -1 && e.post_tag.indexOf('intro-text') > -1;
      })
    }
  },
  ADDITIONAL_CONTENT: (state) => {
    if (state.allPosts && state.allPosts.length > 0) {
      return state.allPosts.filter(e => {
        return e.post_tag.indexOf('feedback-additional-content') > -1;
      })
    }
  },
  FEEDBACK_NEW_POST: (state) => {
    return state.feedbackPost;
  },
  POSTS_WITH_OVERRIDES: (state) => {
    if (state.allPosts && state.allPosts.length > 0) {
      return state.allPosts.filter(e => {
        return e.meta.retirement_tool_rules.length > 0;
      })
    }
  },
  ACTIVE_RULES: (state, getters) => {
    if (getters.POSTS_WITH_OVERRIDES && getters.POSTS_WITH_OVERRIDES.length > 0) {
      const posts = getters.POSTS_WITH_OVERRIDES;
      return {
        "always_show_only": posts.filter(e => e.meta.always_show.filter(elem => elem.answers.every(element => state.filterAnswers.indexOf(element) > -1) && state.selectAllAnswers.length === elem.answers.length && elem.type === 'contains-only' && elem.action === 'always-show').length > 0),
        "always_show_contains": posts.filter(e => e.meta.always_show.filter(elem => elem.answers.some(element => state.filterAnswers.indexOf(element) > -1) && elem.type === 'contains' && elem.action === 'always-show').length > 0),
        "always_show_contains_all": posts.filter(e => e.meta.always_show.filter(elem => elem.answers.every(element => state.filterAnswers.indexOf(element) > -1) && elem.type === 'contains-all' && elem.action === 'always-show').length > 0),
        "always_show_not_contains": posts.filter(e => e.meta.always_show.filter(elem => elem.answers.some(element => state.filterAnswers.indexOf(element) === -1) && elem.type === 'does-not-contain' && elem.action === 'always-show').length > 0),
        "dont_show_only": posts.filter(e => e.meta.dont_show.filter(elem => elem.answers.every(element => state.filterAnswers.indexOf(element) > -1) && state.selectAllAnswers.length === elem.answers.length && elem.type === 'contains-only' && elem.action === 'do-not-show').length > 0),
        "dont_show_contains": posts.filter(e => e.meta.dont_show.filter(elem => elem.answers.some(element => state.filterAnswers.indexOf(element) > -1) && elem.type === 'contains' && elem.action === 'do-not-show').length > 0),
        "dont_show_contains_all": posts.filter(e => e.meta.dont_show.filter(elem => elem.answers.every(element => state.filterAnswers.indexOf(element) > -1) && elem.type === 'contains-all' && elem.action === 'do-not-show').length > 0),
        "dont_show_not_contains": posts.filter(e => e.meta.dont_show.filter(elem => elem.answers.every(element => state.filterAnswers.indexOf(element) === -1) && elem.type === 'does-not-contain' && elem.action === 'do-not-show').length > 0),
      }
    }
    return {
        "always_show_only": [],
        "always_show_contains": [],
        "always_show_contains_all": [],
        "always_show_not_contains": [],
        "dont_show_only": [],
        "dont_show_contains": [],
        "dont_show_contains_all": [],
        "dont_show_not_contains": [],
      
    }
  }
}