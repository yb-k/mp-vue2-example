import { RUNTIME } from '@/common/config';
import { APP_ENV } from '@/common/constants';
import { extend } from '@/native';

export const STORAGE_DATA = 'storageData';

extend(STORAGE_DATA, (key, value) => {
  if (RUNTIME.TYPE === APP_ENV.BROWSER) {
    // 브라우저인 경우
    if (value !== undefined) {
      return localStorage.setItem(key, value);
    } else {
      return localStorage.getItem(key);
    }
  } else {
    if (value !== undefined) {
      return M.data.storage(key, value);
    } else {
      return M.data.storage(key);
    }
  }
});

const SESSION_DATA = 'sessionData';

extend(SESSION_DATA, (key, value) => {
  if (RUNTIME.TYPE === APP_ENV.BROWSER) {
    // 브라우저인 경우
    if (value !== undefined) {
      return sessionStorage.setItem(key, value);
    } else {
      return sessionStorage.getItem(key);
    }
  } else {
    if (value !== undefined) {
      return M.data.global(key, value);
    } else {
      return M.data.global(key);
    }
  }
});
