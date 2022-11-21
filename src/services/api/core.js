import _merge from 'lodash/merge';
import { SERVER_NAME } from '@/common/config';
import httpSend from '@/common/httpSend';

export default class BaseApiService {
  constructor(resource, options = {}) {
    this.server = SERVER_NAME;
    this.resource = `/mp${resource}`;
    this.options = options;
    this.send = httpSend;
  }
  post(path, data, options = {}) {
    const _options = _merge(this.options, options);
    return this.send(`${this.resource}${path}`, data, _options);
  }
}
