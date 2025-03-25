<template>
    <header class="header">
  <HeaderComponent/>
</header>
    <div class="div">
      <div class="rectangleParent">
        <div class="groupChild" />
        <div class="theQuickBrown">Ник</div>
        <div class="theQuickBrown1">Активность</div>
        <div class="theQuickBrown2">Уровень</div>
        <div class="theQuickBrown3">Группировка</div>
        <div class="theQuickBrown4">Ранг</div>
        <div class="theQuickBrown5">Человечность</div>
        <div class="theQuickBrown6">Онлайн</div>
        <div class="theQuickBrown7">Заточение</div>
      </div>
  
      <b class="b">СПИСОК ИГРОКОВ</b>
  
      <div class="filters">
        <div class="container">Игроки</div>
  
        <div class="dropdown">
            <select class="dropdown-select" :style="{ backgroundImage: `url(${arrowIcon})` }">
            <option selected disabled>Время выживания</option>
            <option>Общее время</option>
            <option>Текущее время</option>
            <option>Время одной жизни</option>
          </select>
        </div>
  
        <div class="dropdown">
            <select class="dropdown-select" :style="{ backgroundImage: `url(${arrowIcon})` }">
            <option selected disabled>Боевые навыки</option>
            <option>Попадания</option>
            <option>Попадания в голову</option>
            <option>Убийства</option>
            <option>Победы на PVP-арене</option>
          </select>
        </div>
  
        <div class="dropdown">
            <select class="dropdown-select" :style="{ backgroundImage: `url(${arrowIcon})` }">
            <option selected disabled>Статистика</option>
            <option>Опыт</option>
            <option>Деньги</option>
            <option>Пройдено пешком</option>
            <option>Проехали на транспорте</option>
          </select>
        </div>
      </div>
  
      <div class="search-container">
  <input type="text" class="search-input" placeholder="Введите ник" />
  <img class="iconsearch" alt="Поиск" :src="searchIcon" />
</div>
    </div>
    <footer class="footer">
      <FooterComponent/>
    </footer>
  </template>
  
  <script setup>
  import arrowIcon from '@/assets/tr.svg';
  import searchIcon from '@/assets/search.svg';
  import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

  </script>
  
  <style scoped>
.header {
    left: 129px;
  z-index: 1;
}

.footer {
  position: absolute;
  width: 100%;
  top: 667px;
  z-index: 1;
  background-color: #19161D;
}

  .div {
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
  
  .rectangleParent {
    position: absolute;
    top: 372px;
    left: 255px;
    width: 1410px;
    height: 64px;
    font-size: 20px;
  }
  
  .groupChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 20px;
    background-color: #ff6600;
    width: 1410px;
    height: 64px;
  }
  
  .theQuickBrown, .theQuickBrown1, .theQuickBrown2, 
  .theQuickBrown3, .theQuickBrown4, .theQuickBrown5, 
  .theQuickBrown6, .theQuickBrown7 {
    position: absolute;
    top: 20px;
    letter-spacing: -0.01em;
    line-height: 24px;
    font-weight: 500;
  }
  .theQuickBrown { left: 202px; }
  .theQuickBrown1 { left: 402px; }
  .theQuickBrown2 { left: 559px; }
  .theQuickBrown3 { left: 690px; }
  .theQuickBrown4 { left: 863px; }
  .theQuickBrown5 { left: 1024px; }
  .theQuickBrown6 { left: 60px; }
  .theQuickBrown7 { left: 1249px; }
  
  .b {
    position: absolute;
    top: 134px;
    left: calc(50% - 705px);
    font-size: 40px;
    letter-spacing: 8px;
    font-family: 'Balsamiq Sans';
  }
  
  .filters {
    position: absolute;
    top: 212px;
    left: 255px;
    display: flex;
    gap: 20px; 
    align-items: center;
  }
  
  .container {
    border-radius: 20px;
    background-color: #ff6600;
    padding: 14px 30px;
    font-size: 22px;
    font-family: 'IBM Plex Sans';
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .dropdown-select {
    width: 285px;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #7e7e7e;
    background-color: #19161D;
    color: #fff;
    font-size: 16px;
    font-family: 'IBM Plex Sans';
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 10px 40px 10px 15px;
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 20px;
  }
  
  .dropdown-select:hover,
  .dropdown-select:focus {
    background-color: #19161D;
    outline: none;
  }
  
  .search-container {
    position: absolute;
    top: 292px;
    left: 255px;
    width: 1410px;
    height: 60px;
    border-radius: 20px;
    border: 2px solid #7e7e7e;
    display: flex;
    align-items: center;
    padding-left: 20px;
    background: #19161D;
  }
  
  .search-input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 20px;
    font-family: 'IBM Plex Sans';
    outline: none;
  }
  
  .iconsearch {
    width: 26px;
    height: 26px;
    margin-right: 20px;
  }
  </style>
  