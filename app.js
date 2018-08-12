const todoApp = new Vue({
  el: '.todoapp',
  data: {
    title: 'Todos',
    todos: [
      { text: 'Learn JavaScript ES6+ goodies', isDone: true },
      { text: 'Learn Vue', isDone: false },
      { text: 'Build something awesome', isDone: false },
    ],
  }
});