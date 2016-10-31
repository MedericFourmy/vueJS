// Properties and Methods

var data = { a: 1 }
var vm1 = new Vue({
  data: data
})
vm1.a === data.a // -> true
// setting the property also affects original data
vm1.a = 2
data.a // -> 2
// ... and vice-versa
data.a = 3
vm1.a // -> 3

var vm2 = new Vue({
  el: '#example',
  data: data
})
vm2.$data === data // -> true
vm2.$el === document.getElementById('example') // -> true
// $watch is an instance method
vm2.$watch('a', function (newVal, oldVal) {
  // this callback will be called when `vm2.a` changes
})


// Instance Lifecycle Hooks

// created hook is called after the instance is created:
var vm3 = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm3 instance
    console.log('a is: ' + this.a)
  }
})
// -> "a is: 1"