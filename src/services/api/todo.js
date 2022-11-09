import BaseApiService from './core';

class TodoService extends BaseApiService {
  constructor() {
    super('/todos');
  }
}

export default new TodoService();
