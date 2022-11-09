/**
 * 전역 컴포넌트를 선언 파일
 *
 */
import Vue from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { ModalLayout } from '@/plugins/modal';

Vue.component('modal-layout', ModalLayout);
Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);
