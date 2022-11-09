import Vue from 'vue';
import store from '@/store';
import { GETTERS, VIEW_NAVI } from '@/common/constants';

const { INTRO, HOME, LOGIN, USER_REGIST } = VIEW_NAVI;
const ANONYMOUS_VIEW = [INTRO, HOME, LOGIN, USER_REGIST];
export default (to, from, next) => {
  if (!ANONYMOUS_VIEW.includes(to.name) && store.getters[GETTERS.AUTH.IS_ANONYMOUS]) {
    next(false);
    Vue.prototype.$alert('로그인이 필요한 서비스입니다.');
    return;
  }
  next();
};
