import instnace from '@/common/axios';
export default class BaseApiService {
  constructor(resource) {
    this.instance = instnace;
    this.resource = resource;
  }
  get(path = '', params = {}, config = {}) {
    return this.instance.get(`${this.resource}${path}`, { params, ...config });
  }
  post(path = '', params = {}, config = {}) {
    return this.instance.post(`${this.resource}${path}`, params, config);
  }
  patch(path = '', params = {}, config = {}) {
    return this.instance.patch(`${this.resource}${path}`, params, config);
  }
  delete(path = '', params = {}, config = {}) {
    return this.instance.delete(`${this.resource}${path}`, params, config);
  }
}
