const Vue = require('vue');
const axios = require('axios');
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

// General Components


// Globally registered components

const elementExists = document.getElementById('pc-retirement-tool');
if (elementExists) {
  const app = new Vue({
    el: '#pc-retirement-tool',
    components: {
      
    }
  });
}

