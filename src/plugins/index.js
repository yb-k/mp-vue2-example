import Vue from 'vue';
import Fragment from 'vue-fragment';
import AppPlugin from './app';
import ModalPlugin from './modal';
import './modal/style.css';

Vue.use(Fragment.Plugin);
Vue.use(ModalPlugin, { useSweet: false });
Vue.use(AppPlugin);
