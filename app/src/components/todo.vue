<template>
  <div class="todoApp">
    <h1>Welcome to TODO App</h1>

    <label for="new-todo">Things to do?</label>
    <input id="new-todo" v-model="newTodo" placeholder="Input TODO" @keyup.enter="createTodo()">

    <ul class="todo-list">
      <todoList v-for="(item, idx) in todos" @onTodoDelete="deleteTodo"
                :key="idx" :todo="{'item':item,'id':idx}"></todoList>
    </ul>

  </div>
</template>

<script>
  import todoList from "./todoList.vue";
  const STORAGE_KEY = 'vuejs-todo';
  let storage = {
    fetch: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    save: (todos) => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  };

  export default {
    name: 'todoApp',
    components: {todoList},
    data() {
      return {
        newTodo: '',
        todos: storage.fetch()
      }
    },
    watch: {
      todos: function (todos) {
        storage.save(todos);
      }
    },
    methods: {
      createTodo: function () {
        if (this.newTodo) {
          this.todos.push({
            text: this.newTodo,
            done: false
          })
        }
        this.newTodo = "";
      },
      updateTodo: function (idx, todo) {
        if (todo.text && idx !== undefined) {
          this.todos[idx] = todo
        }
      },
      deleteTodo: function (idx) {
        if (idx !== undefined) {
          this.todos.splice(idx, 1);
        }
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
