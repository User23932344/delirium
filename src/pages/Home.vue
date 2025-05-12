<template>
  <div class="screen">
    <header class="header">
      <HeaderComponent />
    </header>

    <div class="home">
      <div class="impression">
        <div class="impression-text">
          <h1 class="h1">Играй в Delirium на крупнейшем RPG-проекте</h1>
          <p class="descript">Многопользовательская онлайн игра с огромным открытым миром,
            в которомты можешь стать кем захочешь!</p>
          <div class="st-online">
            <button class="start">Начать играть</button>
            <div class="online">
              <p class="online-text">Сейчас играют: </p>
              <p class="online-count">{{ onlinePlayers }}</p>
            </div>
          </div>
        </div>
        <div class="impression-mosaiс">
          <img :src="image1" class="img">
          <img :src="image12" class="img2">
          <img :src="image13" class="img3">
          <img :src="image14" class="img4">
          <img :src="image15" class="img5">
          <img :src="image16" class="img6">
          <img :src="image17" class="img7">
          <img :src="image18" class="img8">
        </div>
      </div>
      <div class="transition">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="transition-text">
          <h2 class="h2">Играй в Delirium на крупнейшем RPG-проекте</h2>
          <button class="more-details">Подробнее</button>
        </div>
      </div>

      <div class="about-the-project">
        <h3 class="h3">О проекте</h3>
        <div class="about-contents">

          <div class="about">
            <div class="box" @mouseover="changeImage('img.jpg')" @mouseleave="resetImage"
              @click="toggleImage('img.jpg')">
              <h4 class="h4">Инфраструктура</h4>
              <p class="h4descr">Десятки торговцев, барменов и контрабандистов</p>
            </div>
            <div class="box" @mouseover="changeImage('img.jpg')" @mouseleave="resetImage"
              @click="changeImage('img.jpg')">
              <h4 class="h4">Квесты</h4>
              <p class="h4descr">В свободное от выживания время</p>
            </div>
            <div class="box" @mouseover="changeImage('img.jpg')" @mouseleave="resetImage"
              @click="changeImage('img.jpg')">
              <h4 class="h4">Аномалии</h4>
              <p class="h4descr">Просто смотри под ноги</p>
            </div>
            <div class="box" @mouseover="changeImage('img.jpg')" @mouseleave="resetImage"
              @click="changeImage('img.jpg')">
              <h4 class="h4">Артефакты</h4>
              <p class="h4descr">Много артефактов. Очень много.</p>
            </div>
            <div class="box" @mouseover="changeImage('img.jpg')" @mouseleave="resetImage"
              @click="changeImage('img.jpg')">
              <h4 class="h4">Разнообразие вещей</h4>
              <p class="h4descr">От ножа до джет-пака, более сотни видов вещей</p>
            </div>
            <div class="box" @mouseover="changeImage('img.jpg')" @mouseleave="resetImage"
              @click="changeImage('img.jpg')">
              <h4 class="h4">Война группировок</h4>
              <p class="h4descr">Выживает сильнейший</p>
            </div>
          </div>

          <div class="download-img">
            <img class="image" :src="image" />
          </div>
        </div>
      </div>


      <div class="how-to-start">
        <h3 class="h3">Как начать играть?</h3>
        <div class="how">
          <div class="how-boxes">
            <div class="how-box">
              <svg viewBox="0 0 780 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M717 181C717 197.568 703.569 211 687 211L30 211C13.4315 211 0 197.568 0 181L0 30C0 13.4315 13.4315 0 30 0H750C766.569 0 780 13.4315 780 30V119C780 135.569 766.569 149 750 149H747C730.431 149 717 162.431 717 179V181Z"
                  stroke="#FF6600" stroke-width="2" />
                <text x="40" y="53" font-size="25" fill="white" font-family="IBM Plex Sans-Semibold, Helvetica">
                  <tspan>Скачайте SA-MP и игру GTA san Andreas</tspan>
                </text>
                <text x="40" y="133" font-size="18" fill="white" font-family="IBM Plex Sans-Regular, Helvetica">
                  <tspan x="40" y="133">Для игры вам потребуется самый свежий клиент SA-MP и игра GTA san</tspan>
                  <tspan x="40" y="159">Andreas</tspan>
                </text>
                <svg x="730" y="161" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="25" fill="#FF6600" />
                  <path d="M19 31.5L31.5 18M31.5 18L32 27M31.5 18L21 19.5" stroke="white" stroke-width="2"
                    stroke-linecap="round" />
                </svg>
              </svg>
            </div>

            <div class="how-boxes2">
              <div class="how-box">
                <svg viewBox="0 0 375 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M311 181C311 197.016 298.016 210 282 210H30C13.9837 210 1 197.016 1 181V30C1 13.9837 13.9838 1 30 1H345C361.016 1 374 13.9837 374 30V119C374 135.016 361.016 148 345 148H342C324.879 148 311 161.879 311 179V181Z"
                    stroke="#FF6600" stroke-width="2" />
                  <text x="40" y="53" font-size="25" fill="white" font-family="IBM Plex Sans-Semibold, Helvetica">
                    <tspan>Подключитесь к </tspan>
                    <tspan x="40" y="86">серверу Delirium-samp</tspan>
                  </text>
                  <text x="40" y="133" font-size="18" fill="white" font-family="IBM Plex Sans-Regular, Helvetica">
                    <tspan x="40" y="133">Выберите в лаунчере сервер</tspan>
                    <tspan x="40" y="159">и начните играть</tspan>
                  </text>
                  <svg x="325" y="161" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="25" fill="#FF6600" />
                    <path d="M19 31.5L31.5 18M31.5 18L32 27M31.5 18L21 19.5" stroke="white" stroke-width="2"
                      stroke-linecap="round" />
                  </svg>
                </svg>
              </div>

              <div class="how-box">
                <svg viewBox="0 0 375 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M311 181C311 197.016 298.016 210 282 210H30C13.9837 210 1 197.016 1 181V30C1 13.9837 13.9838 1 30 1H345C361.016 1 374 13.9837 374 30V119C374 135.016 361.016 148 345 148H342C324.879 148 311 161.879 311 179V181Z"
                    stroke="#FF6600" stroke-width="2" />
                  <text x="40" y="53" font-size="25" fill="white" font-family="IBM Plex Sans-Semibold, Helvetica">
                    <tspan>Запустите сервер</tspan>
                    <tspan x="40" y="86">Delirium-samp</tspan>
                  </text>
                  <text x="40" y="133" font-size="18" fill="white" font-family="IBM Plex Sans-Regular, Helvetica">
                    <tspan x="40" y="133">Запустите приложение, кликнув на</tspan>
                    <tspan x="40" y="159">иконку на рабочем столе.</tspan>
                  </text>
                  <svg x="325" y="161" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="25" fill="#FF6600" />
                    <path d="M19 31.5L31.5 18M31.5 18L32 27M31.5 18L21 19.5" stroke="white" stroke-width="2"
                      stroke-linecap="round" />
                  </svg>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <img class="how-img" :src="image2">
          </div>
        </div>
      </div>


      <div class="answers">
        <h3 class="h3">Ответы на частые вопросы</h3>
        <div class="blox">
          <div class="first">
            <div v-for="(block, index) in firstBlocks" :key="'first-' + index" class="answer-btn"
              :class="{ expanded: block.expanded }" @click="toggleExpand(index, 'first')">
              <div class="combination">
                <h5 class="question">{{ block.question }}</h5>
                <img :src="vector26" class="arr">
              </div>
              <p class="answer" v-if="block.expanded">{{ block.answer }}</p>
            </div>
          </div>
          <div class="second">
            <div v-for="(block, index) in secondBlocks" :key="'second-' + index" class="answer-btn"
              :class="{ expanded: block.expanded }" @click="toggleExpand(index, 'second')">
              <div class="combination">
                <h5 class="question">{{ block.question }}</h5>
                <img :src="vector26" class="arr">
              </div>
              <p class="answer" v-if="block.expanded">{{ block.answer }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <footer class="footer">
    <FooterComponent />
  </footer>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

import image from "@/assets/image.png";
import rectangle41 from "@/assets/rectangle41.svg";
import rectangle42 from "@/assets/rectangle42.svg";
import image2 from "@/assets/image-2.png";
import image12 from "@/assets/image1-2.png";
import image13 from "@/assets/image1-3.png";
import image14 from "@/assets/image1-4.png";
import image15 from "@/assets/image1-5.png";
import image16 from "@/assets/image1-6.png";
import image17 from "@/assets/image1-7.png";
import image18 from "@/assets/image1-8.png";
import image1 from "@/assets/image1-1.png";
import frame19 from "@/assets/frame19.svg";
import vector26 from "@/assets/vector-26.svg";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      image,
      rectangle41,
      rectangle42,
      image2,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image1,
      frame19,
      vector26,
      onlinePlayers: 0,
      firstBlocks: [
        { question: 'В чем цель игры на сервере?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
        { question: 'Где базы группировок? Как попасть в группировку?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
        { question: 'Возможно ли каким-либо образом дешифраторами взломать дом со 100% защитой замка?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
        { question: 'Где найти блоки и как их использовать?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
        { question: 'Где найти тюрьму, откуда нужно таскать камни?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
      ],
      secondBlocks: [
        { question: 'Будут ли в будущем на сервере зомби?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
        { question: 'Возможно ли каким-либо образом дешифраторами взломать дом со 100% защитой замка?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
        { question: 'Есть ли карта на которой показаны все вышки с Делириумом?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
        { question: 'Как грабить вышки Делириума?', answer: 'В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы будут подвергнуты целой серии независимых исследований.', expanded: false },
      ],
    };
  },
  methods: {
    async fetchOnlinePlayers() {
      try {
        const response = await fetch("http://localhost:3000/users/online");
        const data = await response.json();
        this.onlinePlayers = data.length;
      } catch (error) {
        console.error("Ошибка загрузки онлайн игроков:", error);
      }
    },
    changeImage(imageName) {
      this.image = require(`@/assets/${imageName}`);
    },
    resetImage() {
      this.image = require('@/assets/image.png');
    },

    toggleExpand(index, section) {
      if (section === 'first') {
        this.firstBlocks[index].expanded = !this.firstBlocks[index].expanded;
      } else if (section === 'second') {
        this.secondBlocks[index].expanded = !this.secondBlocks[index].expanded;
      }
    },
  },
  mounted() {
    this.fetchOnlinePlayers();
    setInterval(this.fetchOnlinePlayers, 10000);
  },
};
</script>

<style scoped>
@media(max-width:4200px) {
  .screen {
    background-color: #19151d;
    width: 100%;
    padding: 60px 13vw;
    box-sizing: border-box;
  }

  .header {
    z-index: 1;
  }

  .impression {
    display: flex;
    gap: 2vw;
    margin-top: 140px;
  }

  .impression-text {
    color: var(--variable-collection-white);
  }

  .h1 {
    font-family: "Balsamiq Sans-Bold", Helvetica;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: normal;
    text-align: justify;
    width: 27vw;
  }

  .descript {
    margin-top: 20px;
    color: #ececec;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: normal;
    text-align: justify;
    width: 27vw;
  }

  .start {
    height: 60px;
    width: 216px;
    margin-top: 30px;
    padding: 14px 35px;
    border-radius: 20px;
    background-color: var(--variable-collection-orange);
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    white-space: nowrap;
    cursor: pointer;
  }

  .online {
    display: flex;
    height: 39px;
    width: 188px;
    border-radius: 15px;
    margin-top: 20px;
    background-color: #2b2631;
    padding: 5px 10px;
  }

  .online-text {
    margin-top: 3px;
    color: #b5b5b5;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: normal;
  }

  .online-count {
    margin-top: 1px;
    margin-left: 10px;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Medium", Helvetica;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: normal;
  }

  .impression-mosaiс {
    justify-content: space-between;
    max-height: 640px;
    width: 44.7vw;
  }

  .img,
  .img2,
  .img3,
  .img4,
  .img5,
  .img6,
  .img7,
  .img8 {
    position: absolute;
  }

  .img {
    margin-left: 220px;
  }

  .img3 {
    margin-top: 403px;
  }

  .img4 {
    margin: 332px 220px;
  }

  .img5 {
    margin: 378px 440px;
  }

  .img6 {
    margin: 271px 660px;
  }

  .img7 {
    margin-left: 660px;
  }

  .img8 {
    margin-left: 440px;
  }

  .transition {
    position: relative;
    height: 285px;
    width: 100%;
    margin-top: 13vw;
  }

  .box1 {
    position: absolute;
    background-color: var(--variable-collection-orange);
    width: calc(100% + 26vw);
    margin-left: -13vw;
    height: 285px;
    z-index: 1;
    overflow: hidden;
    opacity: 0.8;
    clip-path: polygon(0% 0%,
        100% 52.6%,
        100% 100%,
        0% 75.4%,
        0% 0%);
  }

  .box2 {
    margin-left: -13vw;
    position: absolute;
    left: 0;
    right: 0;
    width: calc(100% + 26vw);
    height: 274px;
    z-index: 2;
    background-color: var(--variable-collection-orange);
    clip-path: polygon(0% 10.8%,
        100% 0%,
        100% 83.4%,
        0% 100%,
        0% 10.8%);
  }


  .transition-text {
    z-index: 9999;
    display: flex;
    position: absolute;
    margin-top: 97px;
  }

  .h2 {
    color: var(--variable-collection-white);
    font-family: "Balsamiq Sans-Bold", Helvetica;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: normal;
    width: 40vw;
    text-align: left;
  }

  .more-details {
    margin-left: 113px;
    height: 62px;
    width: 185px;
    border: 2px solid var(--variable-collection-white);
    border-radius: 20px;
    background-color: var(--variable-collection-orange);
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    white-space: nowrap;
    cursor: pointer;
  }

  .about-the-project {
    padding-top: 112px;
  }

  .h3 {
    color: var(--variable-collection-white);
    font-family: "Balsamiq Sans-Bold", Helvetica;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: normal;
    white-space: nowrap;
  }

  .about-contents {
    padding-top: 40px;
    display: flex;
    column-gap: 2vw;
  }

  .box {
    margin-top: 20px;
    width: 24.95vw;
    height: 160px;
    border: 2px solid var(--variable-collection-orange);
    border-radius: 30px;
    transition: transform 0.3s ease;
  }

  .box:hover {
    transform: scale(1.05);
    background-color: var(--variable-collection-orange);
  }

  .h4 {
    padding: 27px 40px;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: normal;
    white-space: nowrap;
  }

  .h4descr {
    padding-left: 40px;
    color: #ececec;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: normal;
    width: 385px;
  }

  .how-to-start {
    padding-top: 112px;
  }

  .how {
    margin-top: 40px;
    display: flex;
    width: calc(100% + 1vw);
    gap: 2vw;
  }

  .how-boxes {
    width: 50vw;
    max-width: 780px;
    height: 4vw;
  }

  .how-box svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .how-box {
    flex: 1 1 100%;
    max-width: 100%;
  }


  .how-box svg:hover path {
    transition: fill 0.3s ease;
    fill: var(--variable-collection-orange);
  }

  .how-boxes2 {
    margin-top: 30px;
    display: flex;
    gap: 1.5vw;
    width: 100%;
  }

  .answers {
    margin-top: 124px;
  }

  .blox {
    margin-top: 40px;
    display: flex;
    gap: 2vw;
  }

  .answer-btn {
    margin-top: 20px;
    border: 2px solid var(--variable-collection-orange);
    padding: 35px 50px;
    border-radius: 30px;
    cursor: pointer;
  }

  .answer-btn.expanded {
    height: 200px;
    background-color: var(--variable-collection-orange);
  }

  .question {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: normal;
  }

  .answer {
    margin-top: 20px;
    color: #ececec;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: normal;
    width: 28.8vw;
  }

  .combination {
    display: flex;
    justify-content: space-between;
  }

  .footer {
    z-index: 1;
  }
}

@media(max-width:1550px) {
  .screen {
    padding: 25px 9.7vw;
  }

  .impression {
    margin-top: 40px;
  }

  .h1 {
    font-size: 35px;
    width: 62vw;
  }

  .descript {
    font-size: 18px;
    text-align: left;
    width: 67vw;
  }

  .st-online {
    display: flex;
  }

  .start {
    height: 50px;
    width: 170px;
    padding: 8px 25px;
    border-radius: 15px;
    font-size: 18px;
  }

  .online {
    margin-top: 35px;
    height: 23px;
    width: 148px;
    border-radius: 10px;
    margin-left: 4vw;
  }

  .online-text {
    white-space: nowrap;
  }

  .impression-mosaiс {
    display: none;
  }

  .transition {
    margin-top: 90px;
    width: 100%;
  }

  .box1 {
    width: calc(100% + 19.4vw);
    margin-left: -9.7vw;
  }

  .box2 {
    margin-left: -9.7vw;
    width: calc(100% + 19.4vw);
  }

  .h2 {
    font-size: 30px;
    width: 55vw;
  }

  .more-details {
    margin-left: 6.6vw;
    margin-top: 29px;
    height: 50px;
    width: 145px;
    border-radius: 15px;
    font-size: 18px;
  }

  .about-the-project {
    padding-top: 90px;
  }

  .h3 {
    white-space: inherit;
  }

  .about-contents {
    padding-top: 20px;
    display: grid;
  }

  .about {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5vw;
  }

  .box {
    align-content: stretch;
    width: 39vw;
  }

  .box:active {
    transform: scale(1.05);
    background-color: var(--variable-collection-orange);
  }

  .h4 {
    padding: 27px 30px;
    width: 21vw;
    font-size: 20px;
  }

  .h4descr {
    padding-left: 30px;
    font-size: 18px;
    width: 33.1vw;
  }

  .download-img {
    margin-top: 20px;

  }

  .image {
    max-width: 80.5vw;
  }

  .how-to-start {
    padding: top 90px;
  }

  .how {
    margin-top: 100px;
    width: calc(100% + 1vw);
    position: relative;
  }

  .how-boxes {
    width: 100%;
    height: 4vw;
  }

  .how-img {
    display: none;
  }

  .answers {
    margin-top: 49.3vw;
  }

  .blox {
    display: block;
  }

  .question {
    font-size: 20px;
  }

  .answer {
    font-size: 18px;
    width: 69.5vw;
  }

  .footer {
    z-index: 1;
    margin-top: 90px;
  }

}

@media(max-width:630px) {
  .screen {
    padding: 25px 7.1vw;
  }

  .h1 {
    font-size: 25px;
    letter-spacing: 6px;
    text-align: left;
    width: 85.7vw;
  }

  .descript {
    margin-top: 15px;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0px;
    width: 85.7vw;
  }

  .start {
    height: 40px;
    width: 48.6vw;
    margin-top: 24px;
    padding: 4px 17px;
    font-size: 16px;
  }

  .online {
    margin-top: 30px;
    height: 30px;
    width: 41.4vw;
    border-radius: 10px;
    margin-left: 2vw;
  }

  .online-text {
    margin-top: 1px;
    font-size: 13px;
    white-space: nowrap;
  }

  .online-count {
    font-size: 14px;
  }

  .impression-mosaiс {
    display: none;
  }

  .box1 {
    width: calc(100% + 14.2vw);
    margin-left: -7.1vw;
  }

  .box2 {
    margin-left: -7.1vw;
    width: calc(100% + 14.2vw);
  }


  .transition-text {
    margin-top: 90px;
    display: block;
  }

  .h2 {
    font-size: 18px;
    letter-spacing: 6px;
    width: 85.7vw;
  }

  .more-details {
    margin-left: 0;
    margin-top: 15px;
    height: 40px;
    width: 40vw;
    font-size: 16px;
  }

  .h3 {
    font-size: 20px;
    letter-spacing: 6px;
  }

  .about {
    display: grid;
    flex-wrap: wrap;
    gap: 2.5vw;
  }

  .box {
    width: 85.7vw;
  }

  .h4 {
    padding: 8% 30px;
    width: 52.9vw;
  }

  .h4descr {
    width: 62.9vw;
  }

  .how-to-start {
    padding: top 90px;
  }

  .how {
    margin-top: 0px;
    width: 100%;
  }

  .how-boxes {
    margin-top: 0px;
    display: grid;
    width: 100%;
  }

  .how-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 211px;
    width: 100%;
    position: relative;
  }

  .how-box svg {
    width: 85.7vw;
    height: 54.3vw;
  }

  .how-boxes2 {
    margin-top: 10px;
    display: grid;
    width: 100%;
  }

  .answers {
    margin-top: 700px;
  }

  .blox {
    display: block;
  }

  .answer-btn {
    padding: 20px;
  }


  .question {
    font-size: 16px;
  }

  .answer {
    margin-top: 15px;
    font-size: 13px;
  }

  .footer {
    z-index: 1;
    margin-top: 80px;
  }

}
</style>