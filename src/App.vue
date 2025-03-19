<template>
    <div id="app">
    <div class="header">
        <HeaderComponent />
    </div>

    <footer>
        <FooterComponent />
    </footer>
    </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from'./components/Footer.vue';

export default{
    components:{
        HeaderComponent,
        FooterComponent
    }
}
</script>




<style scoped>

</style>