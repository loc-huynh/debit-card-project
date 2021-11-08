import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';
import { UserInfoAPI } from '../../service/api/UserInfo';
import { RatesAPI } from '../../service/api/RatesAPI';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  getUserInfo ({commit}) {
    try {
      const user = UserInfoAPI.getUserInfo();
      commit('getUserInfo', user);
    } catch(err) {
      // TODO: update state to show error message when calling API
    }
  },

  getRates ({commit}) {
    try {
      const rates = RatesAPI.getRates();
      commit('getRates', { rateOptions: rates });
    } catch(err) {
      // TODO: update state to show error message when calling API
    }
  },

  applyLoan ({commit}, payload: ExampleStateInterface) {
    try {
      commit('applyLoan', payload);
    } catch(err) {
      // TODO: update state to show error message when calling API
    }
  },

  repayAction ({commit}, payload: ExampleStateInterface) {
    try {
      commit('repayMutation', payload);
    } catch(err) {
      // TODO: update state to show error message when calling API
    }
  }
};

export default actions;
