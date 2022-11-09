import BaseApiService from './core';

class UserService extends BaseApiService {
  constructor() {
    super('/users');
  }
}

export default new UserService();
