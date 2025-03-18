<template>
    <div id="app">
    <div class="header">
        <HeaderComponent />
    </div>
    </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';

export default{
    components:{
        HeaderComponent
    }
}
</script>




<style scoped>

#app {
  height: 100vh; 
  margin: 0; 
  background-color: #1C1920; 
}


</style>