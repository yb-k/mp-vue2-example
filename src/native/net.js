import { API_URL, RUNTIME, SERVER_NAME } from '@/common/config';
import { APP_ENV } from '@/common/constants';
import { extend } from '@/native';

export const HTTP_SEND = 'httpSend';

/**
 * M.net.http.send 대응
 */

extend(HTTP_SEND, (path = '', data = {}, options) => {
  const _options = {
    server: options.server || SERVER_NAME,
    path,
    method: options.method || 'POST',
    timeout: options.timeout || 30000,
    userData: options.userData || {},
    indicator: { show: false },
    data,
  };

  return new Promise((resolve, reject) => {
    if (RUNTIME.OS === APP_ENV.ANDROID) {
      // 안드로이드인 경우
    } else if (RUNTIME.OS === APP_ENV.IOS) {
      // iOS인 경우
    } else if (RUNTIME.TYPE === APP_ENV.BROWSER) {
      // 브라우저인 경우
    }

    M.net.http.send({
      ..._options,
      success(...args) {
        resolve(...args);
      },
      error(...args) {
        reject(...args);
      },
    });
  });
});

export const UPLOAD_FILE = 'uploadFile';

/**
 * M.net.http.upload 대응
 */

extend(UPLOAD_FILE, (url, filePath, paramKey = 'file', options = {}) => {
  // 기본값 선언
  const _options = {
    url: `${API_URL}${url}`,
    params: {},
    body: [{ name: paramKey, content: filePath, type: 'FILE' }],
    progress: function (total, current) {
      if (typeof options.progress === 'function') {
        options.progress(total, current);
      }
    },
    encoding: 'UTF-8',
  };
  return new Promise((resolve, reject) => {
    if (RUNTIME.OS === APP_ENV.ANDROID) {
      // 안드로이드인 경우
    } else if (RUNTIME.OS === APP_ENV.IOS) {
      // iOS인 경우
    } else if (RUNTIME.TYPE === APP_ENV.BROWSER) {
      // 브라우저인 경우
    }
    M.net.http.upload({
      ..._options,
      finish: function (status, header, body) {
        if (status === '200') {
          let res;
          try {
            res = JSON.parse(body);
          } catch (err) {
            console.error(err);
          }
          resolve(res);
        } else {
          reject(body);
        }
      },
    });
  });
});
