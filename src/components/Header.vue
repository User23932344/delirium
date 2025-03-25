<template>
  <div class="header">
    <img class="group" alt="Group" :src="logo" />

    <div class="div">
      <div class="text-wrapper" @click="home">Начать играть</div>
      <div class="text-wrapper">Форум</div>
      <div class="text-wrapper" @click="rating">Рейтинг</div>
      <div class="text-wrapper" @click="topUp">Пополнить счет</div>
      <div class="text-wrapper" @click="wiki">Wiki</div>
    </div>

    <div class="div-wrapper" @click="showAuth = true">
      <div class="text-wrapper-3">Личный кабинет</div>
    </div>

    <div class="div-2">
      <a href="https://vk.com/deliriumcom">
      <img class="vector" alt="Vector" :src="vkontakte" />
    </a><a href="https://t.me/deliriumamber">
      <img class="img" alt="Group" :src="telegramm" />
    </a><a href="https://discord.gg/cFF9bB6yMN">
      <img class="vector-2" alt="Vector" :src="discord" />
      </a>
    </div>

    <Auth :show="showAuth" @close="showAuth = false" />
  </div>
</template>

<script>
import { ref } from "vue";
import Auth from "@/components/Auth.vue";
import logo from "@/assets/logo.png";
import vkontakte from "@/assets/vkontakte.png";  
import telegramm from "@/assets/telegramm.png";  
import discord from "@/assets/discord.png";  

export default {
  name: "HeaderComponent",
  components: { Auth },
  props: {
    group: String,
    vector: String,
    img: String,
    vector1: String,
  },
  setup() {
    const showAuth = ref(false);
    return { showAuth };
  },
  data() {
    return {
      logo, 
      vkontakte,
      telegramm,
      discord,
    };
  },
  methods: {
    topUp() {
      this.$router.push("/top-up"); 
    },
    rating(){
        this.$router.push("/rating"); 
      },
    home() {
      this.$router.push("/"); 
    },
    wiki(){
      this.$router.push("/wiki")      
    }
  },
};
</script>

<style scoped>
.header {
  height: 64px;
  position: relative;
  width: 1410px;
}

.header .group {
  height: 64px;
  left: 0;
  position: absolute;
  top: 0;
  width: 66px;
}

.header .div {
  align-items: center;
  display: inline-flex;
  gap: 50px;
  left: 116px;
  position: absolute;
  top: 19px;
}

.header .text-wrapper:hover {
  color: var(--variable-collection-white);
  cursor: pointer;
}

.header .text-wrapper {
  color: #858585;
  font-family: "IBM Plex Sans-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  width: fit-content;
}

.header .div-wrapper {
  align-items: center;
  background-color: var(--variable-collection-orange);
  border-radius: 20px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 1169px;
  padding: 14px 35px;
  position: absolute;
  top: 2px;
  cursor: pointer;
}

.header .text-wrapper-3 {
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-Regular", Helvetica;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -2.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.header .div-2 {
  align-items: center;
  display: flex;
  gap: 30px;
  height: 21px;
  left: 988px;
  position: absolute;
  top: 21px;
  width: 141px;
}

.header .vector {
  height: 18px;
  margin-left: -1.00px;
  position: relative;
  width: 29px;
}

.header .img {
  height: 22px;
  margin-bottom: -0.50px;
  margin-top: -0.50px;
  position: relative;
  width: 29px;
}

.header .vector-2 {
  height: 23px;
  margin-bottom: -1.00px;
  margin-right: -1.00px;
  margin-top: -1.00px;
  position: relative;
  width: 29px;
}
</style>
