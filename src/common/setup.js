import router from '../router/index';
M.onBack(() => {
  router.go(-1);
});
