<template>
  <header class="header">
    <HeaderComponent />
  </header>
  <div class="rating">
    <h2 class="h2">СПИСОК ИГРОКОВ</h2>
    <div class="menu">
      <button class="gamers" :class="{ active: activeSort === 'gamers' }" @click="setActiveSort('gamers')">
        Игроки
      </button>

      <div class="select">
        <select class="filter" v-model="sortSurvival">
          <option disabled hidden value="">Время выживания</option>
          <option value="general">Общее время</option>
          <option value="now">Текущее время</option>
          <option value="attempt">Время одной жизни</option>
        </select>

        <select class="filter" v-model="sortCombat">
          <option disabled hidden value="">Боевые навыки</option>
          <option value="hits">Попадания</option>
          <option value="headshots">Попадания в голову</option>
          <option value="kills">Убийства</option>
          <option value="pvp_score">Победы на PVP-арене</option>
        </select>

        <select class="filter" v-model="sortStats">
          <option disabled hidden value="">Статистика</option>
          <option value="experience">Опыт</option>
          <option value="money">Деньги</option>
          <option value="walked">Пройдено пешком</option>
          <option value="driven">Проехал на транспорте</option>
        </select>
      </div>
    </div>

  </div>
  <footer class="footer">
    <FooterComponent />
  </footer>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";
import searchIcon from '@/assets/search.svg';
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
//оформление
const activeSort = ref('gamers');
const sortSurvival = ref('');
const sortCombat = ref('');
const sortStats = ref('');

//запросы

watch(sortSurvival, (val) => {
  if (val) {
    activeSort.value = val;
    sortCombat.value = '';
    sortStats.value = '';
  }
});

watch(sortCombat, (val) => {
  if (val) {
    activeSort.value = val;
    sortSurvival.value = '';
    sortStats.value = '';
  }
});

watch(sortStats, (val) => {
  if (val) {
    activeSort.value = val;
    sortSurvival.value = '';
    sortCombat.value = '';
  }
});

const setActiveSort = (val) => {
  activeSort.value = val;
  sortSurvival.value = '';
  sortCombat.value = '';
  sortStats.value = '';
};
</script>


<style scoped>
.header {
  margin-left: 6.6vw;
  padding-top: 30px;
}

.rating {
  background-color: #19151d;
  min-height: 100vh;
}

.h2 {
  margin-left: 13vw;
  margin-top: 40px;
  color: var(--variable-collection-white);
  font-family: "Balsamiq Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 8px;
}

.menu {
  margin-top: 30px;
  margin-left: 13vw;
  display: flex;
  gap: 1.5vw;
}

.select {
  display: flex;
  gap: 1.5vw;
}

.filter,
.gamers {
  background-color: #19161D;
  border-radius: 20px;
  border: 2px solid #7E7E7E;
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  padding: 14px 30px 14px 30px;
  cursor: pointer;
}
</style>