import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'Olá Vue - Show!'
  },
  template: '<div id="app">{{ hello }}</div>'
})

export { app }
