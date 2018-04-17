<template>
  <Developers />
</template>

<script>
import Developers from './components/Developers';

export default {
  name: 'App',
  components: {
    Developers
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 20px;
}

#app h1 {
  font-weight: normal;
  font-size: 21px;
  margin: 0 0 30px;
  padding: 0 0 10px;
  border-bottom:1px solid #ccc;
}

#app h3 {
  font-weight: normal;
  font-size: 18px;
  margin: 0 0 7px;
}
</style>
