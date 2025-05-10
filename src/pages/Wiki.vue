<template>
    <header class="header">
        <HeaderComponent />
    </header>
    <div class="WIKI">
        <h2 class="titlename">Общие категории</h2>
        <div class="elements">
            <div class="block" @click="maps">
                <h4 class="h4">Карта</h4>
                <p class="text">Десятки торговцев, барменов и контрабандистов</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block2" @click="rating">
                <h4 class="h4">Игроки</h4>
                <p class="text">Десятки торговцев, барменов и контрабандистов</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block3" @click="transport">
                <h4 class="h4">Транспорт</h4>
                <p class="text">Десятки торговцев, барменов и контрабандистов</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block4">
                <h4 class="h4">Торговцы</h4>
                <p class="text">В свободное от выживания время</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block5">
                <h4 class="h4">Квестовые персонажи</h4>
                <p class="text">Просто смотри под ноги</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block6">
                <h4 class="h4">Остальные NPC</h4>
                <p class="text">Много артефактов. Очень много.</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block7">
                <h4 class="h4">Предметы</h4>
                <p class="text">От ножа до джет-пака, более сотни видов вещей</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block8">
                <h4 class="h4">Недвижимость</h4>
                <p class="text">Выживает сильнейший</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block9">
                <h4 class="h4">Заправки</h4>
                <p class="text">Выживает сильнейший</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
            <div class="block10">
                <h4 class="h4">Фракции</h4>
                <p class="text">Выживает сильнейший</p>
                <div class="arrow-wrapper">
                    <img class="arrow" alt="Vector" :src="arrow" />
                </div>
            </div>
        </div>
        <footer class="footer">
            <FooterComponent />
        </footer>
    </div>


</template>

<script>
import FooterComponent from '@/components/Footer.vue';
import HeaderComponent from '@/components/Header.vue';
import arrow from '@/assets/arrow.svg';

export default {
    name: "WIKI",
    components: {
        HeaderComponent,
        FooterComponent
    },
    data() {
        return {
            arrow,
        };
    },
    methods: {
        rating() {
            this.$router.push("/rating");
        },
        maps() {
            this.$router.push("/map");
        },
        transport() {
            this.$router.push("/transport");
        },
    },
};
</script>

<style scoped>
@media(max-width:4200px) {
    .header {
        padding-top: 30px;
        margin-left: 6.6vw;
    }

    .WIKI {
        background-color: #19161d;
    }

    .titlename {
        padding: 40px 13.2vw;
        color: var(--variable-collection-white);
        font-family: "Balsamiq Sans";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 8px;
    }

    .elements {
        margin-left: 10.7vw;
        margin-bottom: 90px;
        display: flex;
        flex-wrap: wrap;
    }

    .block,
    .block2,
    .block3,
    .block4,
    .block5,
    .block6,
    .block7,
    .block8,
    .block9,
    .block10 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-image: url("@/assets/block.svg");
        border: 1px solid red;
        background-repeat: no-repeat;
        background-size: 23.4vw 7.6vw;
        background-position: center;
        width: 23.4vw;
        height: 7.6vw;
        margin-bottom: 30px;
        margin-left: 1.6vw;
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
    }

    .h4 {
        margin-top: 35px;
        margin-left: 2vw;
        color: var(--variable-collection-white);
        font-family: "IBM Plex Sans";
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .text {
        margin-top: 5px;
        margin-left: 2vw;
        color: var(--variable-collection-white);
        font-family: "IBM Plex Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 15.8vw;
    }

    .arrow-wrapper {
        display: flex;
        justify-content: flex-end;
        margin-top: auto;
    }


    .footer {
        margin-top: auto;
        width: 100%;
    }
}
</style>