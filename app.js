const app = new Vue({
  el: '.todoapp',
  data: {
    todos: [
      { text: 'Learn JavaScript ES6+ goodies', isDone: true },
      { text: 'Learn Vue', isDone: false },
      { text: 'Build something awesome', isDone: false },
    ],
    editingTodo: null
  },
  methods: {
    destroy (todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    startEditing(todo) {
      this.editingTodo = todo;
      this.beforeText = todo.text;
    },
    finishEditing(todo) {
      this.editingTodo = null;
    },
    cancelEditing(todo) {
      this.editingTodo = null;
      todo.text = this.beforeText;
    },
  }
})