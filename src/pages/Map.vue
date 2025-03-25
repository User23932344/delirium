<template>
<header class="header">
    <HeaderComponent/>
</header>
<div class="map">
    <h2 class="h2">Карта</h2>
    <buton class="map1">Глобальная карта</buton>
    <buton class="map2">Территории группировок</buton>
    <buton class="map3">Дома</buton>
    <iframe class="serwermap" 
    src="https://mapgenie.io/grand-theft-auto-san-andreas/maps/san-andreas"
    width="1410px" 
  height="798px" 
  style="border:0;"
    >
    </iframe>
</div>
<footer class="footer">
    <FooterComponent/>
</footer>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default{
    name:'Map',
    components:{
        HeaderComponent,
        FooterComponent
    },
};
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

.map{
    justify-items:start;
}

.h2{
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Medium", Helvetica;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 49px;
    white-space: nowrap;
    position: absolute;
    left: 255px;
    top:80px;
}

.map1, .map2, .map3 { 
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Medium", Helvetica;
    font-size: 22px;
    font-weight: 400; 
    letter-spacing: 0; 
    line-height: 32px; 
    white-space: nowrap; 
    text-align: center;
    padding: 14px 30px; 
    background-color: #1C1920; 
    border:2px solid var(--variable-collection-orange); 
    border-radius: 20px;
    cursor: pointer; 
    transition: background-color 0.3s; 
    position: absolute;
    top: 120px;
}

.map1{
    margin:40px 255px ;
    width: 243px; 
    height: 60px; 
}
.map2{
    margin:40px 508px ;
    width: 323px; 
    height: 60px; 
}
.map3{
    margin:40px 841px ;
    width: 126px; 
    height: 60px; 
    padding: 15px 35px;
}

.map1:hover, .map2:hover, .map3:hover {
    background-color: var(--variable-collection-orange);
}

.serwermap{
    margin:177px 255px 20px;
}
</style>