import BaseApiService from './core';

class TodoService extends BaseApiService {
  constructor() {
    super('/todos');
  }
  list() {
    return this.post('/list');
  }

  regist(params = {}) {
    return this.post('/regist', params);
  }

  update(params = {}) {
    return this.post('/update', params);
  }

  delete(id) {
    return this.post('/delete', { id });
  }
}

export default new TodoService();
