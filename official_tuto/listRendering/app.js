var app1 = new Vue({
	el: "#app1",
	data: {
		items: [
		  { message: 'Foo' },
		  { message: 'Bar' }
		]
	}
});

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})