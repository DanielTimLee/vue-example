<template>
  <div class="todo">
    <h1>{{ header }}</h1>

    <label for="new-todo">오늘 해야할 일은?</label>
    <input id="new-todo" v-model="new_todo" :placeholder="msg" @keyup.enter="addItem()">

    <ul class="todo-list">
      <li v-bind:class="[{done: todo.done}]" v-bind:key="idx" v-for="(todo, idx) in todos">
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>{{ todo.text }}</label>
          <button class="destroy">X</button>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  const STORAGE_KEY = 'vuejs-todo';

  let storage = {
    fetch: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    save: (todos) => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  };

  export default {
    name: 'todo',
    data() {
      return {
        header: 'Welcome to TODO App',
        msg: 'Input your TODO',
        new_todo: '',
        todos: storage.fetch()
      }
    },
    watch: {
      todos: {
        handler: function (todos) {
          storage.save(todos);
        }
      }
    },
    methods: {
      addItem: function () {
        if (this.new_todo) {
          this.todos.push({
            text: this.new_todo,
            done: false
          })
        }
        this.new_todo = "";
      }
    },
  }
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    margin: 0.5rem;
  }
</style>
