import { authService } from '@/services/api';
import store from '@/store';
import axios, { AxiosError } from 'axios';
import { API_URL } from './config';
import { GETTERS, STATUS_CODE, MUTATIONS } from './constants';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

const getAccessToken = async () => {
  try {
    const { refresh: refreshToken } = store.getters[GETTERS.AUTH.TOKENS];
    const tokens = await authService.refreshToken(refreshToken);

    store.commit(MUTATIONS.AUTH.TOKEN, {
      access: tokens.access.token,
      refresh: tokens.refresh.token,
    });
    return tokens.access.token;
  } catch (error) {
    store.commit(MUTATIONS.AUTH.TOKEN, { access: '', refresh: '' });
  }
  return '';
};

/**
 * 요청에 대한 interceptor
 */
instance.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    const { access } = store.getters[GETTERS.AUTH.TOKENS];
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

/**
 * 응답에 대한 interceptor
 */
instance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행

    return response.data;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    if (!(error instanceof AxiosError)) {
      // 런타임 에러 발생시 처리
      return Promise.reject(error);
    }
    const { config, response = {} } = error;
    if (config.url.includes('/refresh-tokens') || response.status !== 401 || config.sent) {
      return Promise.reject(error);
    }

    if (status === STATUS_CODE.UNAUTHORIZED) {
      // 액세스 토큰 만료시 또는 세션 만료시..
      return new Promise((resolve, reject) => {
        getAccessToken()
          .then(() => {
            config.sent = true;
            /**
             * axios bug report
             * https://github.com/axios/axios/issues/5187#issue-1423776361
             * 자세한 내용
             */
            config.headers = {
              ...config.headers,
            };
            return instance(config);
          })
          .then((result) => resolve(result))
          .catch((err) => {
            console.warn(err);
            reject(config);
          });
      });
    }
    return Promise.reject(config);
  }
);

export default instance;
