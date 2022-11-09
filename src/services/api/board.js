import BaseApiService from './core';

class BoardService extends BaseApiService {
  constructor() {
    super('/boards');
  }
}

export default new BoardService();
