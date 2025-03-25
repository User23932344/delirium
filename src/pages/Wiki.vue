<template>
    <header>
        <HeaderComponent/>
    </header>
    <div class="WIKI">
        <h2 class="titlename">Общие категории</h2>
        <div class="elements">
            <div class="block" @click="maps">
                <h4 class="h4">Карта</h4>
                <p class="text">Десятки торговцев, барменов и контрабандистов</p>
                <img class="arrow" alt="Vector" :src="arrow" />
            </div>
            <div class="block2" @click="rating">
                <h4 class="h4">Игроки</h4>
                <p class="text">Десятки торговцев, барменов и контрабандистов</p>
                <img class="arrow2" alt="Vector" :src="arrow" />
            </div>
            <div class="block3">
                <h4 class="h4">Транспорт</h4>
                <p class="text">Десятки торговцев, барменов и контрабандистов</p>
                <img class="arrow3" alt="Vector" :src="arrow" />
            </div>
            <div class="block4">
                <h4 class="h4">Торговцы</h4>
                <p class="text">В свободное от выживания время</p>
                <img class="arrow4" alt="Vector" :src="arrow" />
            </div>
            <div class="block5">
                <h4 class="h4">Квестовые персонажи</h4>
                <p class="text">Просто смотри под ноги</p>
                <img class="arrow5" alt="Vector" :src="arrow" />
            </div>
            <div class="block6">
                <h4 class="h4">Остальные NPC</h4>
                <p class="text">Много артефактов. Очень много.</p>
                <img class="arrow6" alt="Vector" :src="arrow" />
            </div>
            <div class="block7">
                <h4 class="h4">Предметы</h4>
                <p class="text">От ножа до джет-пака, более сотни видов вещей</p>
                <img class="arrow7" alt="Vector" :src="arrow" />
            </div>
            <div class="block8">
                <h4 class="h4">Недвижимость</h4>
                <p class="text">Выживает сильнейший</p>
                <img class="arrow8" alt="Vector" :src="arrow" />
            </div>
            <div class="block9">
                <h4 class="h4">Заправки</h4>
                <p class="text">Выживает сильнейший</p>
                <img class="arrow9" alt="Vector" :src="arrow" />
            </div>
            <div class="block10">
                <h4 class="h4">Фракции</h4>
                <p class="text">Выживает сильнейший</p>
                <img class="arrow10" alt="Vector" :src="arrow" />
            </div>
    </div>
    </div>
<footer class="footer">
    <FooterComponent/>
</footer>

</template>

<script>
import FooterComponent from '@/components/Footer.vue';
import HeaderComponent from '@/components/Header.vue';
import arrow from '@/assets/arrow.svg';

export default{
    name:"WIKI",
    components:{
        HeaderComponent,
        FooterComponent
    },
    data(){
        return{
            arrow,
        };
    },
    methods: {
    rating(){
        this.$router.push("/rating"); 
      },
      maps(){
        this.$router.push("/map"); 
      },
  },
};
</script>

<style scoped>
.header {
    left: 129px;
  z-index: 1;
}

.footer {
  position: absolute;
  width: 100%;
  top: 957px;
  z-index: 1;
  background-color: #19161D;
}
.WIKI{
    width: 100%;
    position: relative;
    background-color: #19161D;
    min-height: 900px;
    overflow: hidden;
    text-align: left;
    font-size: 16px;
    color: #fff;
    font-family: Ubuntu;
}

.titlename{
    color: var(--variable-collection-white);
    font-family: 'Balsamiq Sans-Bold',Helvetica;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: normal;
    position: absolute;
    left: 255px;
    top:33px;
}

.elements{
    position: relative;
    margin:113px 255px;
}

.block,.block2,.block3,.block4,.block5,.block6,.block7,.block8,.block9,.block10{
    background-image: url("@/assets/block.svg");
    width: 450px;
    height: 146px;
    position: absolute;
    padding: 38px 40px;
}

.block:hover,
.block2:hover,
.block3:hover,
.block4:hover,
.block5:hover,
.block6:hover,
.block7:hover,
.block8:hover,
.block9:hover,
.block10:hover {
    background-image: url("@/assets/blockh.svg");
    cursor: pointer;
}

.block2{
    margin-left:478px ;
}

.block3{
    margin-left:956px ;
}

.block4{
    margin-top: 174px;
}

.block5{
    margin: 174px 478px;
}

.block6{
    margin: 174px 956px;
}

.block7{
    margin-top: 348px;
}

.block8{
    margin: 348px 478px;
}

.block9{
    margin: 348px 956px;
}

.block10{
    margin-top: 522px;
}

.h4{
    font-family: "IBM Plex Sans-SemiBold", Helvetica;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 0;
    top: 25px;
    width: 277px;
    white-space: nowrap;
}

.text{
    position: absolute;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: 10px;
}

.arrow,.arrow2,.arrow3,.arrow4,.arrow5,.arrow6,.arrow6,.arrow7,.arrow8,.arrow9,.arrow10{
    margin-left: 360px;
    
}
.arrow,.arrow2,.arrow3,.arrow4,.arrow5,.arrow6,.arrow6,.arrow7,.arrow8,.arrow9,.arrow10{
    margin-top: 28px;
}

</style>