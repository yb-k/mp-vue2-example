import _cloneDeep from 'lodash/cloneDeep';
import { authService } from '@/services/api';
import { ACTIONS, GETTERS, MUTATIONS, STORAGE_KEYS } from '@/common/constants';
import { storage, session } from '@/utils/storage';
import { executor } from '@/native';
import { STORAGE_DATA } from '@/native/data';

const INIT_SESSION_DATA = () => ({
  id: 0,
  email: '',
  name: '',
  regDate: '',
});

export default {
  state: {
    session: INIT_SESSION_DATA(),
    isSave: executor(STORAGE_DATA, STORAGE_KEYS.IS_SAVE) === 'true',
  },
  mutations: {
    [MUTATIONS.AUTH.IS_SAVE](state, payload) {
      storage(STORAGE_KEYS.IS_SAVE, payload === true ? 'true' : '');
      state.isSave = payload;
    },
    [MUTATIONS.AUTH.SESSION]({ session }, { id, email, name, regDate }) {
      session.id = id;
      session.email = email;
      session.name = name;
      session.regDate = regDate;
    },
  },
  actions: {
    async [ACTIONS.AUTH.LOGIN](context, { email, password }) {
      const { user: session } = await authService.sessionLogin(email, password);
      context.commit(MUTATIONS.AUTH.SESSION, session);
    },
    async [ACTIONS.AUTH.LOGOUT](context) {
      await authService.sessionLogout();
      context.commit(MUTATIONS.AUTH.SESSION, INIT_SESSION_DATA());
      // context.commit(MUTATIONS.AUTH.CLEAR_TOKEN);
    },
    async [ACTIONS.AUTH.SESSION](context) {
      const session = await authService.getSession();
      context.commit(MUTATIONS.AUTH.SESSION, session);
      return session;
    },
  },
  getters: {
    [GETTERS.AUTH.SESSION]({ session }) {
      return _cloneDeep(session);
    },
    [GETTERS.AUTH.IS_ANONYMOUS]({ session }) {
      return session.id === 0;
    },
    [GETTERS.AUTH.IS_SAVE]({ isSave }) {
      return isSave;
    },
  },
};
