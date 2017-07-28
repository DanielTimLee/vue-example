<template>
  <li>
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.item.done">
      <input v-model="todo.item.text">
      <button class="destroy" @click="todoDelete(todo.id)">X</button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'todoList',
    props: ['todo'],
    watch: {
      'todo.item': {
        handler: function () {
          this.$emit('catchThis');
          return console.log(this.todo.id);
        },
        deep: true //used deep watch to catch 'done' or 'text' might change.
      }
    },
    methods: {
      todoDelete: function (id) {
        this.$emit('onTodoDelete', id)
      }
    }
  }
</script>
