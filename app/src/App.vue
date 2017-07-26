<template>
  <div id="app">
    <h1>Hello Vue!</h1>
    <img src="./assets/logo.png">
    <todo></todo>
  </div>
</template>

<script>
  import Todo from './components/Todo.vue'

  export default {
    name: 'app',
    components: {
      Todo
    }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
