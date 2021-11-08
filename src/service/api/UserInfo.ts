import {data} from '../data';

class UserAPI {

  /**
   *
   * @returns {Object}
   */
  getUserInfo () {
    return data.user;
  }
}

export const UserInfoAPI = new UserAPI();
