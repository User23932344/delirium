<template>

</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default{
    name:'PersonalAccount',
    components:{
        HeaderComponent,
        FooterComponent
    },
}
</script>

<style scoped>
.header {
    left: 255px;
  z-index: 1;
}

.footer {
  position: absolute;
  width: 100%;
  top: 1060px;
  z-index: 1;
  background-color: #1C1920;
}

</style>