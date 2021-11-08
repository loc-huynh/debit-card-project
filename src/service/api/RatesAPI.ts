import {data} from '../data';

class RatesInfoAPI {

  /**
   *
   * @returns {Object}
   */
  getRates () {
    return data.rates;
  }
}

export const RatesAPI = new RatesInfoAPI();
