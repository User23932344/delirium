<template>
  <header class="header">
    <HeaderComponent />
  </header>
  <div class="rating">
    <h1 class="name">{{ selectedCategory }}</h1>
    <div class="table">
      <div class="buttons">
        <button class="gamers" @click="resetFilters">Игроки</button>
        <select 
          class="survival-time" 
          v-model="survivalTime" 
          @change="filterPlayers" 
          :style="{ backgroundImage: `url(${arrowIcon})` }">
          <option value="">Общее время</option>
          <option value="current_survival">Текущее время</option>
          <option value="total_survival">Время одной жизни</option>
        </select>
        <select 
          class="combat-skills" 
          v-model="combatSkills" 
          @change="filterPlayers" 
          :style="{ backgroundImage: `url(${arrowIcon})` }">
          <option value="">Попадания</option>
          <option value="headshots">Попадания в голову</option>
          <option value="players_killed">Убийства</option>
          <option value="total_hits">Победы в PVP-арене</option>
        </select>
        <select 
          class="statistics" 
          v-model="statistics" 
          @change="filterPlayers"
          :style="{ backgroundImage: `url(${arrowIcon})` }">
          <option value="">Опыт</option>
          <option value="">Деньги</option>
          <option value="walked_distance">Пройдено пешком</option>
          <option value="transport_distance">Проехал на транспорте</option>
        </select>
      </div>
      <div class="search-container">
        <img class="iconsearch" alt="Поиск" :src="searchIcon" />
        <input v-model="searchQuery" @input="filterPlayers" type="text" class="search-input" placeholder="Поиск по нику">
      </div>
      <div class="table-header">
        <div class="blok">
          <p class="p1">Онлайн</p>
          <p class="p2">Ник</p>
          <p class="p3">Активность</p>
          <p class="p4">Уровень</p>
          <p class="p5">Группировка</p>
          <p class="p6">Ранг</p>
          <p class="p7">Человечность</p>
          <p class="p8">Заточение</p>
        </div>
      </div>
      <div class="table-values">
        <div v-for="player in paginatedPlayers" :key="player.id" class="values">
          <div class="online-status" :class="{ online: player.online_status, offline: !player.online_status }"></div>
          <p class="user">{{ player.username }}</p>
          <p class="csurv">{{ player.current_survival }}</p>
          <p class="tsurv">{{ player.total_survival }}</p>
          <p class="group">-</p>
          <p class="rank">-</p>
          <p class="kill">{{ player.players_killed }}</p>
          <p class="imprisonment">-</p>
        </div>
      </div>
      <div class="pagination">
        <button class="btn" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Назад</button>
        <template v-for="page in paginationRange" :key="page">
          <button class="btn"
            v-if="page !== '...'"
            @click="changePage(page)"
            :class="{ active: currentPage === page }">
            {{ page }}
          </button>
          <span v-else class="dots">...</span>
        </template>
        <button class="btn" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Вперед</button>
      </div>
    </div>
  </div>
  <footer class="footer">
    <FooterComponent />
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import arrowIcon from '@/assets/tr.svg';
import searchIcon from '@/assets/search.svg';
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

const selectedCategory = ref("Список игроков");
const players = ref([]);
const filteredPlayers = ref([]);
const survivalTime = ref("");
const combatSkills = ref("");
const statistics = ref("");
const searchQuery = ref("");
const currentPage = ref(1);
const playersPerPage = 12;
const loading = ref(true);
const error = ref(null);

const fetchPlayers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/players");
    players.value = response.data;
    filteredPlayers.value = response.data;
  } catch (error) {
    error.value = "Ошибка загрузки данных";
  } finally {
    loading.value = false;
  }
};

const filterPlayers = () => {
  filteredPlayers.value = players.value.filter(player => {
    const matchesSurvival = survivalTime.value ? player[survivalTime.value] !== undefined : true;
    const matchesCombat = combatSkills.value ? player[combatSkills.value] !== undefined : true;
    const matchesStatistics = statistics.value ? player[statistics.value] !== undefined : true;
    const matchesSearch = searchQuery.value ? player.username.toLowerCase().includes(searchQuery.value.toLowerCase()) : true;
    return matchesSurvival && matchesCombat && matchesStatistics && matchesSearch;
  });
  currentPage.value = 1;
};

const paginatedPlayers = computed(() => {
  const startIndex = (currentPage.value - 1) * playersPerPage;
  return filteredPlayers.value.slice(startIndex, startIndex + playersPerPage);
});

const totalPages = computed(() => Math.ceil(filteredPlayers.value.length / playersPerPage));

const changePage = (page) => {
  if (page !== "..." && page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const paginationRange = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const range = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) range.push(i);
  } else {
    if (current > 3) range.push(1);
    if (current > 4) range.push("...");

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) range.push(i);

    if (current < total - 3) range.push("...");
    if (current < total - 2) range.push(total);
  }
  return range;
});

onMounted(fetchPlayers);
</script>


  <style scoped>
.header {
    left: 129px;
  z-index: 1;
}

.footer {
  width: 100%;
  z-index: 1;
  background-color: #19161D;
}

.rating{
  margin-left: 225px;
  background-color: #19151d;
  position: relative;
}

.name{
  margin-top: 40px;
  color: var(--variable-collection-white);
  font-family: 'Balsamiq Sans-Bold',Helvetica;
  font-size: 40px;
  letter-spacing: 8px;
  white-space: nowrap;
}

.buttons{
  margin-top: 30px;
}

  .gamers{
    height: 60px;
    width: 136px;
    background-color: var(--variable-collection-orange);
    border-radius: 20px;
    color: var(--variable-collection-white);
    font-family: 'IBM Plex Sans-Regular', Helvetica;
    font-size: 22px;
    white-space: nowrap;
  }
  
  .combat-skills,.survival-time,.statistics {
    margin-left: 10px;
    height: 60px;
    width: 285px;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #7e7e7e;
    background-color: #19161D;
    color: #7e7e7e;
    font-size: 22px;
    font-family: 'IBM Plex Sans-Regular';
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 10px 40px 10px 15px;
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 20px;
  }
  
  .combat-skills:hover,.survival-time:hover,.statistics:hover{
    background-color: var(--variable-collection-orange);
    border-color: var(--variable-collection-orange);
    color: var(--variable-collection-white);
  }
  .combat-skills:focus,.survival-time:focus,.statistics:focus {
    background-color: #19161D;
    outline: none;
    color: var(--variable-collection-white);
  }

  

  .opt{
    background-color: #19151d;
    color: var(--variable-collection-white);
    font-family: 'IBM Plex Sans',Helvetica;
    font-size: 18px;
    line-height: 32px;
    white-space: nowrap;
    border-radius: 10px;
  }
  
  .search-container {
    margin-top: 20px;
    width: 1410px;
    height: 60px;
    border-radius: 20px;
    border: 2px solid #7e7e7e;
    display: flex;
    align-items: center;
    background: #19161D;
  }
  
  .search-input {
    padding: 16px 71px 18px;
    width: 1410px;
    height: 60px;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 20px;
    font-family: 'IBM Plex Sans';
    outline: none;
  }
  
  .iconsearch {
    position: absolute;
    width: 26px;
    height: 26px;
    margin-left: 30px;
  }

.table-header{
  margin-top: 20px;
  background-color: var(--variable-collection-orange);
  border-radius: 20px;
  height: 64px;
  width: 1410px;
  padding: 20px 40px;
}

  .blok{
    display: flex;
    color: var(--variable-collection-white);
    font-family: "Ubuntu-Medium",Helvetica;
    font-size: 22px;
    letter-spacing: -0.2px;
  }

  .p2{
    margin-left: 68px;
  }
  .p3{
    margin-left: 163px;
  }
  .p4{
    margin-left: 46px;
  }
  .p5{
    margin-left: 50px;
  }
  .p6{
    margin-left: 51px;
  }
  .p7{
    margin-left: 118px;
  }
  .p8{
    margin-left: 90px;
  }

  .table-values{
    position: relative;
    margin-top: 100px;
    margin-top: 20px;
  }

  .values{
    margin-top: 40px;
    width: 1410px;
    display: flex;
    color: var(--variable-collection-white);
    font-family: "Ubuntu-Regular" Helvetica;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    letter-spacing: -0.16px;
    border-bottom: 1px solid #7e7e7e;
    padding-bottom: 20px;
  }

  .online-status {
    margin-left: 40px;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  border: 2px solid #7e7e7e; 
}

.online {
  background-color: var(--variable-collection-orange);
  border: none; 
}

.offline {
  background-color: #19151d; 
}

.user{
  margin-left: 120px;
  color: var(--variable-collection-orange);
}

.csurv{
  margin-left: 163px;
}

.tsurv{
  margin-left: 156px;
}

.group{
  margin-left: 150px;
}

.rank{
  margin-left: 120px;
}

.kill{
  margin-left: 168px;
}

.imprisonment{
  margin-left: 240px;
}

.pagination {
    display: flex;
    margin: 40px 585px 110px;
  }
  
  .pagination button {
    padding: 8px 12px;
    margin: 0 5px;
    cursor: pointer;
    border: none;
    color: var(--variable-collection-white);
    background-color: #1C1920;
    transition: 0.3s;
  }
  
  .pagination button.active {
    background-color: var(--variable-collection-orange);
    color: var(--variable-collection-white);
  }
  
  .pagination button:disabled {
    background-color: #1C1920;
    cursor: default;
  }
  
.btn{
    border-radius: 10px;
}

  .dots {
    margin: 0 8px;
    font-weight: bold;
  }
  </style>
  