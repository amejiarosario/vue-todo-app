const app = new Vue({
  el: '.todoapp',
  data: {
    todos: [
      { text: 'Learn JavaScript ES6+ goodies', isDone: true },
      { text: 'Learn Vue', isDone: false },
      { text: 'Build something awesome', isDone: false },
    ]
  },
  methods: {
    destroy (todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  }
})