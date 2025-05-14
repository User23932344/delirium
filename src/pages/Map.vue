<template>
    <div class="map">
        <header class="header">
            <HeaderComponent />
        </header>
        <div class="content">
            <h2 class="h2">Карта</h2>
            <div class="buttons">
                <buton class="map1">Глобальная карта</buton>
                <buton class="map2">Территории группировок</buton>
                <buton class="map3">Дома</buton>
            </div>
            <iframe class="serwermap" src="https://mapgenie.io/grand-theft-auto-san-andreas/maps/san-andreas"
                style="border:0;">
            </iframe>
        </div>
        <footer class="footer">
            <FooterComponent />
        </footer>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
    name: 'Map',
    components: {
        HeaderComponent,
        FooterComponent
    },
};
</script>

<style scoped>
@media (max-width:4200px) {
    .map {
        min-height: 100vh;
    }

    .header {
        padding-top: 30px;
        margin-left: 6.6vw;
    }

    .content {
        display: block;
    }

    .h2 {
        margin-top: 40px;
        margin-left: 13vw;
        color: var(--variable-collection-white);
        font-family: "Balsamiq Sans";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 8px;
    }

    .buttons {
        margin-top: 40px;
        display: flex;
        margin-left: 13vw;
    }

    .map1,
    .map2,
    .map3 {
        color: var(--variable-collection-white);
        font-family: "IBM Plex Sans";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        border: 2px solid var(--variable-collection-orange);
        padding: 0.7vw 1.6vw;
        border-radius: 20px;
        margin-left: 10px;
    }

    .map1:active,
    .map2:active,
    .map3:active {
        background-color: var(--variable-collection-orange);
    }

    .serwermap {
        margin-top: 20px;
        margin-left: 13vw;
        width: 73.4vw;
        height: 41.6vw;
        border: 0;
        margin-bottom: 90px;
    }

    .footer {
        margin-top: auto;
        width: 100%;
    }
}
@media (max-width:1000px) {
    .map {
        min-height: 100vh;
    }

    .header {
        padding-top: 30px;
        margin-left: 4.9vw;
    }

    .content {
        display: block;
    }

    .h2 {
        margin-left: 9.7vw;
        font-size: 30px;
    }

    .buttons {
        margin-top: 20px;
        display: flex;
        margin-left: 9vw;
    }

    .map1,
    .map2,
    .map3 {
        font-size: 18px;
        padding: 1.2vw 3.2vw;
        border-radius: 15px;
        margin-left: 10px;
    }

    .serwermap {
        margin-top: 20px;
        margin-left: 9.7vw;
        width: 80.5vw;
        height: 95.8vw;
        border: 0;
        margin-bottom: 90px;
    }

    .footer {
        margin-top: auto;
        width: 100%;
    }
}
@media (max-width:650px) {
    .map {
        min-height: 100vh;
    }

    .header {
        padding-top: 30px;
        margin-left: 3.6vw;
    }

    .content {
        display: block;
    }

    .h2 {
        margin-left: 7.1vw;
        font-size: 20px;
    }

    .buttons {
    margin-top: 20px;
    margin-left: 7.1vw;
    display: flex;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.map1,
.map2,
.map3 {
    font-size: 16px;
    padding: 1.4vw 4.3vw;
    border-radius: 15px;
    flex: 0 0 auto;
    scroll-snap-align: start;
    white-space: nowrap;
}

    .serwermap {
        margin-top: 20px;
        margin-left: 7.1vw;
        width: 85.7vw;
        height: 145.1vw;
        border: 0;
        margin-bottom: 90px;
    }

    .footer {
        margin-top: auto;
        width: 100%;
    }
}
</style>