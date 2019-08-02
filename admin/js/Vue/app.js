const Vue = require('vue');
const axios = require('axios');
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
import RuleGenerator from './components/RuleGenerator'

import store from '../store/store';

// General Components

// Globally registered components
setTimeout(() => {
  const elementExists = document.getElementById('pcretirementtooladmin');
  if (elementExists) {
    const app = new Vue({
      el: '#pcretirementtooladmin',
      components: {
        RuleGenerator
      },
      store
    });
  }
}, 500);
