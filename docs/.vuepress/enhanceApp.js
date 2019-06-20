/***
 * 应用程序级别增强
 */
import Vue from 'vue';
import XXUI from './../../packages/loacl'
import './../../themes/index.scss'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  // ...apply enhancements to the app
  Vue.use(XXUI)
}