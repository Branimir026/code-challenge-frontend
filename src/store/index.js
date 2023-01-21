import { createStore } from 'vuex';

import auth from '@/modules/auth';
import encode from '@/modules/encode';

export default createStore({
  state: {
  },

  mutations: {
  },

  actions: {
  },

  modules: {
    auth,
		encode
  }
});