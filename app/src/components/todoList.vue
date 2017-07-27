<template>
  <li>
    <div class="view">
      <input class="toggle" type="checkbox">
      <label>{{ todo.item.text }}</label>
      <button class="destroy" @click="todoDelete(todo.id)">X</button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'todoList',
    props: ['todo'],
    methods: {
      todoDelete: function (id) {
        this.$emit('onTodoDelete', id)
      }
    }
  }
</script>
