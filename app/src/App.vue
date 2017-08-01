<template>
  <div id="app">
    <h1>Hello Vue!</h1>
    <img src="./assets/logo.png">
    <todo-app></todo-app>
  </div>
</template>

<script>
  import TodoApp from './components/todo.vue'

  export default {
    name: 'app',
    components: {
      TodoApp
    }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    margin-top: 60px;
  }
</style>
