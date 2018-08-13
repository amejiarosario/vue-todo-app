const todoApp = new Vue({
  el: '.todoapp',
  data: {
    title: 'Todos',
    todos: [
      { text: 'Learn JavaScript ES6+ goodies', isDone: true },
      { text: 'Learn Vue', isDone: false },
      { text: 'Build something awesome', isDone: false },
    ],
    editing: null,
  },
  methods: {
    createTodo(event) {
      const textbox = event.target;
      this.todos.push({ text: textbox.value.trim(), isDone: false });
      textbox.value = '';
    },
    startEditing(todo) {
      this.editing = todo;
    },
    finishEditing(event) {
      if (!this.editing) { return; }
      const textbox = event.target;
      this.editing.text = textbox.value.trim();
      this.editing = null;
    },
    cancelEditing() {
      this.editing = null;
    },
    destroyTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
  }
});