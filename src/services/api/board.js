import BaseApiService from './core';

class BoardService extends BaseApiService {
  constructor() {
    super('/boards');
  }
  list(params = {}) {
    return this.post('/list', params);
  }

  detail(id) {
    return this.post('/info', { id });
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

export default new BoardService();
