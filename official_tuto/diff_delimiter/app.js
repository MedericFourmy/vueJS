var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  delimiters: ['${', '}']

});


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});


var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});



var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  },
  delimiters: ['{v', 'v}']
});


var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Un long message a inverser'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  delimiters: ['{V', 'V}']
});


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  },
  delimiters: ['{#', '#}']
});

var CustomVue = Vue.extend({
  delimiters: ['{custom', 'custom}']
});
var vmExtended = new CustomVue({
  el: '#extend',
  data: {
    message: 'Vue.extend is cool'
  }
})


