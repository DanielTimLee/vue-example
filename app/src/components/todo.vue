<template>
  <div>
    <header>
      <h1>Things to do?</h1>
      <input v-model="newTodo"
             placeholder="Input TODO"
             @keyup.enter="createTodo">
    </header>

    <ul>
      <li v-for="(todo, idx) in todos" :key="idx">
        <div>
          <input type="checkbox" v-model="todo.done">
          <label v-if="todo != editedTodo"
                 @dblclick="editTodo(todo)">{{todo.text}}</label>
          <input type="text"
                 v-model="todo.text"
                 v-if="todo == editedTodo"
                 v-todo-focus="todo == editedTodo"
                 @blur="doneEdit(todo,idx)"
                 @keyup.enter="doneEdit(todo,idx)">
          <button @click="deleteTodo(idx)">X</button>
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
    name: 'todoApp',
    data() {
      return {
        newTodo: '',
        todos: '',
        editedTodo: null
      }
    },
    mounted(){
      this.todos = storage.fetch();
    },
    watch: {
      todos: {
        handler: function (todos) {
          storage.save(todos)
        },
        deep: true
      }
    },
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value) {
          el.focus();
        }
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
      editTodo: function (todo) {
        this.editedTodo = todo;
      },
      doneEdit: function (todo, idx) {
        this.editedTodo = null;
        this.todos[idx] = todo;
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
