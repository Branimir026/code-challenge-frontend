import axios from 'axios';
import router from '../router';

const state = {
  token: localStorage.getItem('token') || '',
};

const getters = {
  isLoggedIn: state => {
    return state.token ? true : false;
  },
	token: state => state.token
};

const actions = {
  //login action
  async login({ commit }, user) {
    try {
      let res = await axios.post('api/login', user);
			
			if (res.data.token && res.status === 200) {
				const token = res.data.token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['authorization'] = token;

				commit('auth_success', token);

      	return res.data;
			}
    } catch (err) {
			return err.response;
    }
  },

  //logout user
  async logout({ commit }) {
    localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['authorization'];
    router.push('/login');
    return;
  }
};

const mutations = {
  auth_success(state, token) {
    state.token = token;
  },
	logout(state) {
		state.token = '';
	}
};

export default {
  state,
  getters,
  actions,
  mutations
}