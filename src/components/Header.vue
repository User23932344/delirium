<template>
    <div class="frame">
      <img class="group" alt="Group" :src="groupSrc" />
  
      <div class="div">
        <div class="text-wrapper">Начать играть</div>
        <div class="text-wrapper">Форум</div>
        <div class="text-wrapper">Рейтинг</div>
        <div class="text-wrapper">Пополнить счет</div>
        <div class="text-wrapper">Wiki</div>
      </div>
  
      <div class="div-wrapper">
        <div class="text-wrapper-3">Личный кабинет</div>
      </div>
  
      <div class="div-2">
        <img class="vector" alt="Vector" :src="vectorSrc" />
        <img class="img" alt="Group" :src="imgSrc" />
        <img class="vector-2" alt="Vector" :src="vector1Src" />
      </div>
    </div>
  </template>
  
  
  <script>
import logoImage from "@/assets/logo.png";
import vkontakteImage from "@/assets/vkontakte.png";  // Был vector.png
import telegrammImage from "@/assets/telegramm.png";  // Был group.png
import discordImage from "@/assets/discord.png";  // Был image.png

export default {
  name: "Header",
  props: {
    group: String,
    vector: String,
    img: String,
    vector1: String,
  },
  computed: {
    groupSrc() {
      return this.group ? new URL(`../assets/${this.group}`, import.meta.url).href : logoImage;
    },
    vectorSrc() {
      return this.vector ? new URL(`../assets/${this.vector}`, import.meta.url).href : vkontakteImage;
    },
    imgSrc() {
      return this.img ? new URL(`../assets/${this.img}`, import.meta.url).href : telegrammImage;
    },
    vector1Src() {
      return this.vector1 ? new URL(`../assets/${this.vector1}`, import.meta.url).href : discordImage;
    },
  },
};
</script>

  

  
  <style>
  .frame {
    height: 64px;
    position: relative;
    width: 1410px;
  }
  
  .frame .group {
    height: 64px;
    left: 0;
    position: absolute;
    top: 0;
    width: 66px;
  }
  
  .frame .div {
    align-items: center;
    display: inline-flex;
    gap: 50px;
    left: 116px;
    position: absolute;
    top: 19px;
  }
  
  .frame .text-wrapper:hover {
    color: var(--variable-collection-white);
    cursor: pointer;
  }
  
  .frame .text-wrapper {
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
  
  .frame .div-wrapper {
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
  
  .frame .text-wrapper-3 {
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
  
  .frame .div-2 {
    align-items: center;
    display: flex;
    gap: 30px;
    height: 21px;
    left: 988px;
    position: absolute;
    top: 21px;
    width: 141px;
  }
  
  .frame .vector {
    height: 18px;
    margin-left: -1.00px;
    position: relative;
    width: 29px;
  }
  
  .frame .img {
    height: 22px;
    margin-bottom: -0.50px;
    margin-top: -0.50px;
    position: relative;
    width: 29px;
  }
  
  .frame .vector-2 {
    height: 23px;
    margin-bottom: -1.00px;
    margin-right: -1.00px;
    margin-top: -1.00px;
    position: relative;
    width: 29px;
  }
  </style>