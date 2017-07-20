import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app', // <index.html> Selector will be replaced by template.
  template: '<App/>', // String template or Object App template.
  components: {App} // List of Components
});
