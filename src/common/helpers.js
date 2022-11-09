/**
 * 앱 서비스에서 필요한 함수를 선언합니다.
 * helper는 유틸성 함수들과 다르게 앱 내의 특정 서비스 / 함수에 관련되어 작성 될 수 있습니다.
 * 구현해야할 헬퍼 함수가 많아지면
 * 폴더로 분리하여 모듈화 하여 관리할 필요가 있습니다.
 * 예) 서버와 클라이언트간 특정 알고리즘을 통한 암복호화 함수
 * 예) 외부 서비스 연동을 위한 함수
 */

import PullToRefresh from 'pulltorefreshjs';

export function bindPullToRefresh(el = 'body', callback = () => {}) {
  PullToRefresh.init({
    mainElement: el,
    onRefresh(done) {
      callback(done);
    },
  });
}

export function unBindPullToRefresh() {
  PullToRefresh.destroyAll();
}
