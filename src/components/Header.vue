<template>
  <div class="header">
    <img class="logo" :src="logo" />

    <button class="menu-toggle" @click="toggleMenu">☰</button>

<div class="menu" :class="{ open: isMenuOpen }">
  <div class="menu-item" @click="home">Начать играть</div>
  <div class="menu-item">Форум</div>
  <div class="menu-item" @click="rating">Рейтинг</div>
  <div class="menu-item" @click="topUp">Пополнить счет</div>
  <div class="menu-item" @click="wiki">Wiki</div>
</div>

    <div class="images">
      <a href="https://vk.com/deliriumcom">
      <img class="img" :src="vkontakte" />
    </a><a href="https://discord.gg/cFF9bB6yMN">
      <img class="img2" :src="discord" />
      </a><a href="https://t.me/deliriumamber">
      <img class="img3" :src="telegramm" />
    </a>
    </div>
    <div class="account" @click="showAuth = true">
      <button class="text-account">Личный кабинет</button>
      <img class="img-account" :src="account">
    </div>
    <Auth :show="showAuth" @close="showAuth = false" />
  </div>
</template>

<script>
import { ref } from "vue";
import Auth from "@/components/Auth.vue";
import logo from "@/assets/logo.svg";
import vkontakte from "@/assets/vkontakte.svg";  
import telegramm from "@/assets/telegramm.svg";  
import discord from "@/assets/discord.svg";  
import account from "@/assets/account.svg"

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
      account,
      logo, 
      vkontakte,
      telegramm,
      discord,
      isMenuOpen: false,
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
    },
    toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  },
};
</script>

<style scoped>
@media(max-width:4200px){
  .header {
  max-width: 1410px;
  width: 100%;
  margin: 0 0;
  height: 64px;
  display: flex;
  align-items: center;
}
 .logo{
  width: 73px;
  height: 73px;
  margin-top: -36px;
 }

 .menu{
  margin-left: 50px;
  display: flex;
  margin-top: -30px;
  color: #858585;
  font-family: "IBM Plex Sans-Regular",Helvetica;
  font-size: 20px;
  justify-content: space-between;
  gap: 50px;
  white-space: nowrap;
 }
 .menu-item:hover{
  color: var(--variable-collection-white);
  cursor: pointer;
 }
 .menu-toggle {
  display: none;
}
 .images{
  display: flex;
  margin-top: -30px;
  margin-left: 10vw;
  justify-content: space-between;
 }
 .img,.img2,.img3{
  margin-left: 30px;
 }
 .img3{
  width: 27px;
  height: 21px;
 }
 .img2{
  width: 27px;
  height: 20px;
 }
 .img{
  width: 27px;
  height: 18px;
 }
 .account{
  margin-left: 20px;
  margin-top: -30px;
 }
 .text-account{
  border: none;
  border-radius: 20px;
  width: 241px;
  height: 60px;
  background-color: var(--variable-collection-orange);
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-Regular", Helvetica;
  font-size: 22px;
  white-space: nowrap;
  cursor: pointer;
 }
 .img-account {
  display: none;
}
}
@media(max-width:1550px){
  .header{
    height: 59px;
  width: 80%;
  display: flex;
  align-items:center;
  }
  .logo{
    width: 8.4vw;
  height: 8.4vw;
  margin-top: -36px;
  }
  .menu-toggle {
    margin-top: -30px;
    margin-left: 76.9vw;
    position: absolute;
    display: block;
    font-size: 32px;
    border: none;
    cursor: pointer;
    background: none;
    color: var(--variable-collection-white);
  }
  .menu {
  margin-top: 235px;
  margin-left: 422px;
  position: absolute;
  flex-direction: column;
  gap: 10px;

  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu.open {
  height: 200px;
  width: 24.6vw;
  font-family: "IBM Plex Sans-Regular",Helvetica;
  font-size: 18px;
  padding: 20px 20px 20px 20px;
  border-radius: 30px 0 20px 20px;
  display: flex;
  background-color: var(--variable-collection-orange);
  color: var(--variable-collection-white);

  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.menu-item{
  justify-content: center;
}

  .images{
  display: flex;
  margin-top: -30px;
  margin-left: 14.7vw;
  justify-content: space-between;
 }
  .img,.img2,.img3{
  margin-left: 3.8vw;
 }
 .img3{
  width: 27px;
  height: 21px;
 }
 .img2{
  width: 27px;
  height: 20px;
 }
 .img{
  width: 27px;
  height: 18px;
 }
 .account{
  margin-left: 5.2vw;
  margin-top: -30px;
 }
 .text-account{
  border: none;
  border-radius: 15px;
  width: 20vw;
  height: 50px;
  background-color: var(--variable-collection-orange);
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-Regular", Helvetica;
  font-size: 2.3vw;
  white-space: nowrap;
 }
 .img-account {
  display: none;
}
}
@media(max-width:480px){
  .header{
    height: 41px;
  width: 90%;
  display: flex;
  align-items:center;
  }
  .logo{
    width: 13.1vw;
  height: 13.1vw;
  margin-top: -32px;
  }
  .menu-toggle {
    margin-top: -33px;
    margin-left: 75vw;
    position: absolute;
    display: block;
    font-size: 29px;
    border: none;
    cursor: pointer;
    background: none;
    color: var(--variable-collection-white);
  }
  .menu {
  margin-top: 230px;
  margin-left: 28vw;
  position: absolute;
  flex-direction: column;
  gap: 10px;

  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu.open {
  height: 200px;
  width: 54.2vw;
  font-family: "IBM Plex Sans-Regular",Helvetica;
  font-size: 18px;
  padding: 20px 20px 20px 20px;
  border-radius: 30px 0 20px 20px;
  display: flex;
  background-color: var(--variable-collection-orange);
  color: var(--variable-collection-white);

  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.menu-item{
  justify-content: center;
}
  .account{
  margin-left: 8vw;
  margin-top: -30px;
 }
  .text-account{
    display: none;
 }
 .img-account {
  display: block;
}
.images{
  display: flex;
  margin-top: -30px;
  margin-left: 4.2vw;
  justify-content: space-between;
 }
  .img,.img2,.img3{
  margin-left: 5.7vw;
 }
 .img3{
  width: 5vw;
  height: 13px;
 }
 .img2{
  width: 5vw;
  height: 13px;
 }
 .img{
  width: 5vw;
  height: 13px;
 }
}
</style>
