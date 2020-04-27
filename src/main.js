import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import plugin from "./plugin/plugin";
import numeral from "numeral";
import moment from "moment";
import Toaster from "v-toaster";
import store from "./store/store.js";
// app.use(require('connect-history-api-fallback')())

Vue.use(Toaster, { timeout: 5000 });
Vue.component("AddToCart", require("./components/AddToCart.vue").default);
Vue.component("cartProductReview", require("./components/cartProductReview.vue").default);

Vue.filter("formatNumberWithOutDecimal", function (value) {
    return numeral(value).format('0'); // displaying other groupings/separators is possible, look at the docs
  });

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});
Vue.filter("formatYear", function(value) {
  if (value) {
    return moment(String(value)).format("YYYY");
  }
});
Vue.filter("checkProductDiscountDate", function(value) {
  var discountDate = moment(value); //Date format
  var today = moment();

  var isAfter = moment(discountDate).isAfter(today);
  return isAfter;
  /* var discountDate = moment(value).format("YYYY-MM-DD  HH:mm:ss");
      var today = moment();
//return discountDate.diff(today);
return ((discountDate >  today)) ? ((discountDate >  today)) : ((discountDate >  today)) ;
   /* return true;
  else
    return false;
  */
});
Vue.config.productionTip = false;
const apiUrl="https://mwbddemo.com/admin/api/frontend/";
// const apiUrl = "http://localhost/makeup/api/frontend";
new Vue({
  router,
  plugin,
  moment,
  apiUrl,
  store,
  numeral,

  render: (h) => h(App),
}).$mount("#app");
