import _cloneDeep from 'lodash/cloneDeep';
import { authService } from '@/services/api';
import { ACTIONS, GETTERS, MUTATIONS, STORAGE_KEYS } from '@/common/constants';
import { storage, session } from '@/utils/storage';

const INIT_TOKEN_DATA = () => ({
  access: '',
  refresh: '',
});

const STORAGE_TOKEN_DATA = () => ({
  access: storage(STORAGE_KEYS.ACCESS_TOKEN) || session(STORAGE_KEYS.ACCESS_TOKEN) || '',
  refresh: storage(STORAGE_KEYS.REFRESH_TOKEN) || session(STORAGE_KEYS.REFRESH_TOKEN) || '',
});

const INIT_SESSION_DATA = () => ({
  id: 0,
  email: '',
  name: '',
  regDate: '',
});

export default {
  state: {
    token: STORAGE_TOKEN_DATA(),
    session: INIT_SESSION_DATA(),
    isSave: storage(STORAGE_KEYS.IS_SAVE) === 'true',
  },
  mutations: {
    [MUTATIONS.AUTH.TOKEN]({ token, isSave }, { access, refresh }) {
      token.access = access;
      token.refresh = refresh;
      this.commit(MUTATIONS.AUTH.CLEAR_TOKEN);
      if (isSave) {
        storage(STORAGE_KEYS.ACCESS_TOKEN, access);
        storage(STORAGE_KEYS.REFRESH_TOKEN, refresh);
      } else {
        session(STORAGE_KEYS.ACCESS_TOKEN, access);
        session(STORAGE_KEYS.REFRESH_TOKEN, refresh);
      }
    },
    [MUTATIONS.AUTH.IS_SAVE](state, payload) {
      storage(STORAGE_KEYS.IS_SAVE, payload === true ? 'true' : '');
      state.isSave = payload;
    },
    [MUTATIONS.AUTH.CLEAR_TOKEN]() {
      session(STORAGE_KEYS.ACCESS_TOKEN, '');
      session(STORAGE_KEYS.REFRESH_TOKEN, '');
      storage(STORAGE_KEYS.ACCESS_TOKEN, '');
      storage(STORAGE_KEYS.REFRESH_TOKEN, '');
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
      const { user: session, tokens } = await authService.login(email, password);
      context.commit(MUTATIONS.AUTH.SESSION, session);
      context.commit(MUTATIONS.AUTH.TOKEN, {
        access: tokens.access.token,
        refresh: tokens.refresh.token,
      });
    },
    async [ACTIONS.AUTH.LOGOUT](context) {
      await authService.logout(this.state.auth.token.refresh);
      context.commit(MUTATIONS.AUTH.SESSION, INIT_SESSION_DATA());
      context.commit(MUTATIONS.AUTH.TOKEN, INIT_TOKEN_DATA());
      context.commit(MUTATIONS.AUTH.CLEAR_TOKEN);
    },
    async [ACTIONS.AUTH.SESSION](context) {
      const session = await authService.getSession();
      context.commit(MUTATIONS.AUTH.SESSION, session);
      return session;
    },
    async [ACTIONS.AUTH.REFRESH_ACCESS](context) {
      const tokens = authService.refreshToken(this.state.auth.token.refresh);
      context.commit(MUTATIONS.AUTH.TOKEN, {
        access: tokens.access.token,
        refresh: tokens.refresh.token,
      });
      return tokens;
    },
  },
  getters: {
    [GETTERS.AUTH.TOKENS]({ token }) {
      return _cloneDeep(token);
    },
    [GETTERS.AUTH.SESSION]({ session }) {
      return _cloneDeep(session);
    },
    [GETTERS.AUTH.IS_ANONYMOUS]({ token }) {
      return !token.access;
    },
    [GETTERS.AUTH.IS_SAVE]({ isSave }) {
      return isSave;
    },
  },
};
