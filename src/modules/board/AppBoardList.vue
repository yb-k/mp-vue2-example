<template>
  <v-row dense ref="section">
    <v-col v-for="(item, index) in boardList" :key="`board-item-${item.id}-${index}`" cols="12">
      <v-card :color="$vuetify.theme.defaults.light.secondary" dark @click="moveDetail(item)">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5" v-text="item.title"></v-card-title>
            <v-card-subtitle v-text="item.writer.name"></v-card-subtitle>
          </div>
          <v-avatar v-if="item.thumnail" class="ma-3" size="125" tile>
            <v-img :src="item.thumnail_url"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
    <div v-intersect="onIntersect"></div>
  </v-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { ACTIONS, GETTERS, MUTATIONS, VIEW_NAVI } from '@/common/constants';
import { bindPullToRefresh, unBindPullToRefresh } from '@/common/helpers';
const INIT_PARAM = () => ({
  page: 1,
  size: 10,
  pageSize: 10,
});
const INIT_STATE = () => ({
  end: false,
});
export default {
  data() {
    return {
      state: INIT_STATE(),
      params: INIT_PARAM(),
    };
  },
  async created() {
    this.initList();
    await this.appendList(this.params);
  },
  activated() {
    bindPullToRefresh(this.$refs.section, this.refresh);
  },
  deactivated() {
    unBindPullToRefresh();
  },
  computed: {
    ...mapGetters({
      boardList: GETTERS.BOARD.LIST,
    }),
  },
  methods: {
    ...mapActions({
      appendList: ACTIONS.BOARD.APPEND,
    }),
    ...mapMutations({
      initList: MUTATIONS.BOARD.INIT,
    }),
    moveDetail({ id }) {
      this.$router.push({ name: VIEW_NAVI.BOARD_DETAIL, params: { id } });
    },
    async refresh(done) {
      this.params = INIT_PARAM();
      this.state.end = false;
      this.initList();
      await this.appendList(this.params);
      done();
    },
    async onIntersect(entries, observer, isIntersecting) {
      if (!this.state.end && isIntersecting) {
        this.params.page = this.params.page + 1;
        const res = await this.appendList(this.params);
        this.state.end = res.contents.length < this.params.size;
      }
    },
  },
};
</script>

<style></style>
