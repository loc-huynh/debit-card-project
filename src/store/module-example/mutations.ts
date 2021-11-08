import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  getUserInfo (state, payload: ExampleStateInterface) {
    state.total =  payload.total;
  },

  getRates (state, payload: ExampleStateInterface) {
    state.rateOptions =  payload.rateOptions;
  },

  applyLoan (state, payload: ExampleStateInterface) {
    const { loanAmount } = payload
    const {months, rate} = payload.selectedItem.value;

    const interest = Number(loanAmount) + (Number(loanAmount)  * rate / 100);
    state.total += Number(loanAmount);
    state.interest = interest;

    const perRepay = interest / months;
    state.perRepay = Math.round(perRepay);
    state.repayTimes = months;
    console.log(months);

  },

  repayMutation (state, payload: ExampleStateInterface) {
    console.log(payload);

    const total = state.total - state.perRepay;

    if (total >=0) {
      state.total -= state.perRepay;
      state.repayTimes -= 1;
    } else {
      state.isValid = true;
    }

  }
};

export default mutation;
