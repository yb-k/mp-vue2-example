import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: colors.purple.accent3,
        secondary: colors.purple.accent1,
        accent: colors.purple.accent4,
        error: colors.black,
      },
    },
  },
});
