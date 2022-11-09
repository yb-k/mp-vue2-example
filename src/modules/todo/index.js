import { MUTATIONS, ACTIONS, GETTERS } from '@/common/constants';
import { todoService } from '@/services/api';

export default {
  state: {
    todos: [],
  },
  mutations: {
    [MUTATIONS.TODO.LIST](state, payload = []) {
      state.todos = payload;
    },
  },
  actions: {
    async [ACTIONS.TODO.LIST](context) {
      const todos = await todoService.get();
      context.commit(MUTATIONS.TODO.LIST, todos);
    },
    async [ACTIONS.TODO.REGIST](context, payload) {
      await todoService.post('', payload);
      await context.dispatch(ACTIONS.TODO.LIST);
    },
    async [ACTIONS.TODO.DELETE](context, payload) {
      await todoService.delete(`/${payload}`);
      await context.dispatch(ACTIONS.TODO.LIST);
    },
    async [ACTIONS.TODO.DONE](context, payload) {
      await todoService.patch(`/${payload}`, { completed: true });
      await context.dispatch(ACTIONS.TODO.LIST);
    },
  },
  getters: {
    [GETTERS.TODO.LIST](state) {
      const list = state.todos.map((item) => item);
      return list;
    },
  },
};
