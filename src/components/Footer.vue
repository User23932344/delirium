<template>
    <div class="component">
      <div class="overlap-group">
        <img class="vector" alt="Vector" :src="logo" />
      </div>
  
      <p class="jarovitplus">
        <span class="text-wrapper">JarovitPlus </span>
        <span class="span">©2023</span>
      </p>
  
      <div class="frame">
        <div class="element">УНП: 591038946</div>
        <div class="div">РБ ООО &#34;ЯровитПлюс&#34;</div>
      </div>
  
      <div class="text-wrapper-2">Игрокам</div>
      <div class="text-wrapper-3">Информация</div>
      <div class="text-wrapper-4">Контакты</div>
  
      <div class="div-2">
        <div class="text-wrapper-5">Начать играть</div>
        <div class="text-wrapper-6">Форум</div>
        <div class="text-wrapper-7">Рейтинг</div>
        <div class="text-wrapper-8">Пополнить счет</div>
      </div>
  
      <div class="div-3">
        <div class="text-wrapper-5">Политика конфиденциальности</div>
        <div class="text-wrapper-6">Пользовательское соглашение</div>
        <div class="text-wrapper-7">Публичная оферта</div>
        <div class="text-wrapper-8">Политика возврата</div>
      </div>
  
      <div class="frame-2">
        <img class="group" alt="Vkontakte" :src="vkontakte" />
        <img class="group" alt="Telegram" :src="telegramm" />
        <img class="group" alt="Discord" :src="discord" />
      </div>
    </div>
  </template>
  
  
  <script>
import vkontakte from '@/assets/vkontakte.png';
import telegramm from '@/assets/telegramm.png';
import discord from '@/assets/discord.png';
import logo from '@/assets/logo.png'; 

export default {
  name: 'Component',
  data() {
    return {
      logo, 
      vkontakte,
      telegramm,
      discord,
    };
  },
};
</script>

  
<style>
.component {
  background-image: url('@/assets/background.svg');
  background-size: 100% 100%;
  height: 308px;
  position: relative;
  width: 100%;
}

.component .overlap-group {
  background-image: url('@/assets/logo.png'); 
  background-size: 100% 100%;
  height: 64px;
  left: 255px;
  position: absolute;
  top: 30px;
  width: 66px;
}

.component .vector {
  height: 11px;
  left: 25px;
  position: absolute;
  top: 24px;
  width: 10px;
}

.component .jarovitplus {
  color: #666666;
  font-family: "IBM Plex Sans-Medium", Helvetica;
  font-size: 15px;
  font-weight: 400;
  left: 900px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 257px;
}

.component .text-wrapper {
  font-weight: 500;
}

.component .span {
  font-family: "IBM Plex Sans-Bold", Helvetica;
  font-weight: 700;
}

.component .frame {
  height: 56px;
  left: 255px;
  position: absolute;
  top: 105px;
  width: 196px;
}

.component .element {
  color: #666666;
  font-family: "IBM Plex Sans-Medium", Helvetica;
  font-size: 18px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 32px;
}

.component .div {
  color: #666666;
  font-family: "IBM Plex Sans-Medium", Helvetica;
  font-size: 18px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: -1px;
}

.component .text-wrapper-2 {
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-SemiBold", Helvetica;
  font-size: 18px;
  font-weight: 600;
  left: 659px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 55px;
}

.component .text-wrapper-3 {
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-SemiBold", Helvetica;
  font-size: 18px;
  font-weight: 600;
  left: 1022px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 55px;
}

.component .text-wrapper-4 {
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-SemiBold", Helvetica;
  font-size: 18px;
  font-weight: 600;
  left: 1524px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 55px;
}

.component .div-2 {
  height: 122px;
  left: 659px;
  position: absolute;
  top: 99px;
  width: 134px;
}

.component .text-wrapper-5,.text-wrapper-6,.text-wrapper-7,.text-wrapper-8 {
  color: #949494;
  font-family: "IBM Plex Sans-Regular", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: -1px;
}

.component .text-wrapper-6 {
  top: 32px;
}

.component .text-wrapper-7 {
  top: 65px;
}

.component .text-wrapper-8 {
  top: 98px;
}

.component .text-wrapper-5,.text-wrapper-6,.text-wrapper-7,.text-wrapper-8:hover{
    cursor:pointer;
}

.component .div-3 {
  height: 122px;
  left: 1022px;
  position: absolute;
  top: 99px;
  width: 272px;
}

.component .frame-2 {
  align-items: center;
  display: flex;
  gap: 30px;
  height: 21px;
  left: 1524px;
  position: absolute;
  top: 94px;
  width: 141px;
}

.component .img {
  height: 18px;
  margin-left: -1.00px;
  position: relative;
  width: 29px;
}

.component .group {
  height: 22px;
  margin-bottom: -0.50px;
  margin-top: -0.50px;
  position: relative;
  width: 29px;
}
</style>
