import { RUNTIME } from '@/common/config';
import { OS_ENV, APP_ENV } from '@/common/constants';
import { extend } from '@/native';
/**
 * 샘플용 템플릿
 */

export const SAMPLE = 'sample';

extend(SAMPLE, (options = {}) => {
  // 기본값 선언
  const _options = {
    poo: 'poo',
    bar: options.bar || 'bar',
  };
  return new Promise((resolve, reject) => {
    // 만약, 크로스 클랫폼 처리도 하는 경우
    if (RUNTIME.TYPE !== APP_ENV.APP) {
      alert('브라우저에서는 지원하지 않습니다. 앱을 통해 접속해주세요.');
      return reject({});
    }
    if (RUNTIME.OS === OS_ENV.ANDROID) {
      // 분기처리
    } else if (RUNTIME.OS === OS_ENV.IOS) {
      _options.isIos = true;
    }

    // M not defined 에러 발생시 .eslintrc.js -> globals에 M : 'readonly' 추가
    M.execute('some', _options);
  });
});
