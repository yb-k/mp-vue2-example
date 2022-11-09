import { API_URL } from '@/common/config';
import { GETTERS } from '@/common/constants';
import { extend } from '@/native';
import store from '@/store';

export const UPLOAD_IMAGE = 'uploadImage';

extend(UPLOAD_IMAGE, (url, options = {}) => {
  // 기본값 선언
  const { access } = store.getters[GETTERS.AUTH.TOKENS];
  const _options = {
    url: `${API_URL}${url}`,
    header: {
      Authorization: `Bearer ${access}`,
    },
    params: {},
    body: [{ name: 'file', content: options.imagePath, type: 'FILE' }],
    progress: function (total, current) {
      if (typeof options.progress === 'function') {
        options.progress(total, current);
      }
    },
    encoding: 'UTF-8',
  };
  return new Promise((resolve, reject) => {
    M.net.http.upload({
      ..._options,
      finish: function (status, header, body) {
        if (status === '200') {
          resolve(JSON.parse(body));
        } else {
          reject(body);
        }
      },
    });
  });
});
