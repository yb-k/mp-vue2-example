import Vue from 'vue';
import { executor } from '@/native';
import { HTTP_SEND } from '@/native/net';
import { STATUS_CODE } from './constants';

const httpSend = (path, data, options) => {
  return new Promise((resolve, reject) => {
    console.log(`PATH :: ${path}`);
    console.log(`BODY :: ${JSON.stringify(data)}`);
    executor(HTTP_SEND, path, data, options)
      .then((res) => {
        if (res.code && res.code !== STATUS_CODE.SUCC) {
          debugger;
          Vue.$alert(`${res.message}(${res.code})`);
          reject(res);
        } else {
          console.log(`SUCC :: ${path}`);
          console.log(`RESPONSE :: `, res);
          resolve(res);
        }
      })
      .catch((...args) => {
        console.log(`FAIL :: ${path}`);
        console.log(`RESPONSE :: `, args);
        reject(...args);
      })
      .finally(() => {});
  });
};

export default httpSend;
