import axios from 'axios';
import router from '../router';

const state = {
};

const getters = {
};

const actions = {
  //encode action
  async encode({ commit }, string) {
    try {
      let res = await axios.post('api/encode', string);
			
			if (res.status === 200) {
				const encodedString = res.data;

      	return {
					status: res.status,
					encodedString
				};
			}
    } catch (err) {
			console.log(err);
    }
  },
};

const mutations = {
};

export default {
  state,
  getters,
  actions,
  mutations
}