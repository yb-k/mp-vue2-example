import Alert from './components/VAlert.vue';
import Confirm from './components/VConfirm.vue';
import vuetify from '@/plugins/vuetify';

export const createDivInBody = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
};

function install(Vue, option) {
  /**
   * 전역 Alert 함수
   * @param {any} options
   * @returns {Promise}
   */
  function alert(content) {
    return new Promise((resolve) => {
      const div = createDivInBody();
      const vm = new Vue({
        el: div,
        vuetify,
        render: (h) =>
          h({
            ...Alert,
            created() {
              this.content = content;
              this.onAction = function (action) {
                resolve(action);
                vm.$el.remove();
                vm.$destroy();
              };
            },
          }),
      });
    });
  }

  /**
   * 전역 Confirm 함수
   * @param {any} options
   * @returns {Promise}
   */
  function confirm(content) {
    return new Promise((resolve) => {
      const div = createDivInBody();
      const vm = new Vue({
        el: div,
        vuetify,
        render: (h) =>
          h({
            ...Confirm,
            created() {
              this.content = content;
              this.onAction = function (action) {
                resolve(action);
                vm.$el.remove();
                vm.$destroy();
              };
            },
          }),
      });
    });
  }

  if (option.useSweet) {
    const $swal = Vue.prototype.$swal;
    if ($swal) {
      Vue.$alert = Vue.prototype.$alert = (content) => {
        return new Promise((resolve) => {
          $swal({
            title: '알림',
            html: content,
            icon: 'info',
            toast: false,
            showConfirmButton: true,
            confirmButtonText: '확인',
            showCancelButton: false,
            allowOutsideClick: true,
          }).then((result) => {
            resolve(result.isConfirmed ? 'submit' : 'close');
          });
        });
      };
      Vue.$confirm = Vue.prototype.$confirm = (content) => {
        return new Promise((resolve) => {
          $swal({
            title: '경고',
            html: content,
            icon: 'warning',
            toast: false,
            showConfirmButton: true,
            confirmButtonText: '확인',
            showCancelButton: true,
            cancelButtonText: '취소',
            allowOutsideClick: false,
          }).then((result) => {
            resolve(result.isConfirmed ? 'submit' : 'cancel');
          });
        });
      };
      const $toast = $swal.mixin({
        toast: true,
        position: 'bottom',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
      });

      Vue.$toast = Vue.prototype.$toast = (content) => {
        $toast.fire({
          icon: '',
          title: content,
        });
      };
    }
  } else {
    Vue.$alert = Vue.prototype.$alert = alert;
    Vue.$confirm = Vue.prototype.$confirm = confirm;
  }
}

export default install;
