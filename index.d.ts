declare module '*.vue' {
  import Vue from 'vue';
  import bus from '~/plugins/eventBus.js';

  module 'vue/types/vue' {
    interface Vue {
      $bus: any;
      $nuxt: any;
    }
  }

  export default Vue;
}
