<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12" v-for="todo in todos" :key="`todo-${todo.id}`">
        <todo-card
          @delete="onDelete(todo)"
          @finish="onFinish(todo)"
          :content="todo.content"
          :completed="todo.completed"
        ></todo-card>
      </v-col>
      <v-col cols="12" v-if="regist">
        <todo-card-regist @submit="onSubmit" @close="toggelRegister" />
      </v-col>
    </v-row>
    <v-fab-transition v-if="!regist">
      <v-btn color="primary" dark fixed bottom right fab @click="toggelRegister">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import TodoCard from '@/modules/todo/TodoCard.vue';
import TodoCardRegist from '@/modules/todo/TodoCardRegist.vue';
import { mapActions, mapGetters } from 'vuex';
import { ACTIONS, GETTERS } from '@/common/constants';
export default {
  components: {
    TodoCard,
    TodoCardRegist,
  },
  data() {
    return {
      regist: false,
    };
  },
  async created() {
    await this.fetchList();
  },
  computed: {
    ...mapGetters({
      todos: GETTERS.TODO.LIST,
    }),
  },
  methods: {
    ...mapActions({
      fetchList: ACTIONS.TODO.LIST,
      deleteTodo: ACTIONS.TODO.DELETE,
      finishTodo: ACTIONS.TODO.DONE,
      registTodo: ACTIONS.TODO.REGIST,
    }),
    toggelRegister() {
      this.regist = !this.regist;
    },
    async onSubmit(content) {
      await this.registTodo({ content });
      this.toggelRegister();
      await this.$alert('등록되었습니다.');
    },
    async onDelete({ id }) {
      await this.deleteTodo(id);
    },
    async onFinish({ id }) {
      await this.finishTodo(id);
    },
  },
};
</script>
