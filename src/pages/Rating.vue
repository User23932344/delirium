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
        <select class="filter" :class="{ active: activeSort === sortSurvival }" v-model="sortSurvival">
          <option disabled hidden value="">Время выживания</option>
          <option value="general">Общее время</option>
          <option value="now">Текущее время</option>
          <option value="attempt">Время одной жизни</option>
        </select>

        <select class="filter" :class="{ active: activeSort === sortCombat }" v-model="sortCombat">
          <option disabled hidden value="">Боевые навыки</option>
          <option value="hits">Попадания</option>
          <option value="headshots">Попадания в голову</option>
          <option value="kills">Убийства</option>
          <option value="pvp_score">Победы на PVP-арене</option>
        </select>

        <select class="filter" :class="{ active: activeSort === sortStats }" v-model="sortStats">
          <option disabled hidden value="">Статистика</option>
          <option value="experience">Опыт</option>
          <option value="money">Деньги</option>
          <option value="walked">Пройдено пешком</option>
          <option value="driven">Проехал на транспорте</option>
        </select>
      </div>
    </div>

    <div class="search-container" style="margin-left: 13vw; margin-top: 15px; display: flex; align-items: center;">
      <img :src="Search" alt="search icon" class="search-icon" />
      <input type="text" v-model="searchQuery" placeholder="Поиск " class="search-input" />
    </div>

    <div v-if="activeSort === 'gamers'">
      <div v-if="loading">Загрузка игроков...</div>
      <div v-else-if="error">{{ error }}</div>
      <table v-else class="players-table">
        <thead>
          <tr>
            <th class="name">Онлайн</th>
            <th class="name">Ник</th>
            <th class="name">Активность</th>
            <th class="name">Уровень</th>
            <th class="name">Группировка</th>
            <th class="name">Ранг</th>
            <th class="name">Человечность</th>
            <th class="name">Заточение</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in paginatedFilteredPlayers" :key="player.id">
            <td class="variable">{{ player.is_online ? '🟧' : '🔲' }}</td>
            <td class="variable">{{ player.login }}</td>
            <td class="variable">{{ player.leave_time }}</td>
            <td class="variable">{{ Math.floor(player.experience / 10000) }}</td>
            <td class="variable">-</td>
            <td class="variable">-</td>
            <td class="variable">{{ player.humanity }}</td>
            <td class="variable">{{ player.ice > 0 ? 'В заточении' : 'Свободен' }}</td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button v-if="currentPage > 3" @click="goToPage(1)">1</button>
        <span v-if="currentPage > 4">...</span>

        <button v-for="page in visiblePages" :key="page" @click="goToPage(page)"
          :class="{ active: currentPage === page }">
          {{ page }}
        </button>

        <span v-if="currentPage < totalPages - 3">...</span>
        <button v-if="currentPage < totalPages - 2" @click="goToPage(totalPages)">
          {{ totalPages }}
        </button>
      </div>
    </div>

    <div v-else>
      <table class="players-table">
        <thead>
          <tr>
            <th class="name">Игрок</th>
            <th class="name">
              {{
                displayedCategory === 'experience' ? 'Опыт' :
                  displayedCategory === 'money' ? 'Деньги' :
                    displayedCategory === 'walked' ? 'Пройдено пешком' :
                      displayedCategory === 'driven' ? 'Проехал на транспорте' :
                        displayedCategory === 'hits' ? 'Попадания' :
                          displayedCategory === 'headshots' ? 'Попадания в голову' :
                            displayedCategory === 'kills' ? 'Убийства' :
                              displayedCategory === 'pvp_score' ? 'PVP-победы' :
                                displayedCategory === 'general' ? 'Общее время' :
                                  displayedCategory === 'now' ? 'Текущее время' :
                                    displayedCategory === 'attempt' ? 'Время одной жизни' :
                                      'Категория'
              }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in paginatedFilteredPlayers" :key="player.id">
            <td class="variable">{{ player.login }}</td>
            <td class="variable">
              {{
                displayedCategory === 'kills' ? player.players_killed :
                  displayedCategory === 'general' ? formatTime(player.total_survival_time) :
                    displayedCategory === 'attempt' ? formatTime(player.alife) :
                      displayedCategory === 'now' ? formatTime(player.total_alife) :
                        player[displayedCategory]
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <footer class="footer">
    <FooterComponent />
  </footer>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import Search from "@/assets/search.svg";
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
import axios from "axios";

const baseUrl = "https://test-delirium.hellishworld.ru";
const apiPlayers = `${baseUrl}/api/player`;

const activeSort = ref("gamers");
const sortSurvival = ref("");
const sortCombat = ref("");
const sortStats = ref("");

const searchQuery = ref("");

const players = ref([]);
const loading = ref(false);
const error = ref(null);

const displayedCategory = ref("");

const currentPage = ref(1);
const pageSize = 12;

const totalPages = computed(() =>
  Math.ceil(filteredPlayers.value.length / pageSize)
);

const filteredPlayers = computed(() => {
  if (!searchQuery.value.trim()) return players.value;
  const lowerQuery = searchQuery.value.toLowerCase();
  return players.value.filter((p) =>
    p.login.toLowerCase().includes(lowerQuery)
  );
});

const paginatedFilteredPlayers = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredPlayers.value.slice(start, start + pageSize);
});

const visiblePages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  let start = Math.max(currentPage.value - 1, 1);
  let end = Math.min(currentPage.value + 1, total);

  if (total <= 5) {
    start = 1;
    end = total;
  } else {
    if (currentPage.value <= 3) {
      start = 1;
      end = 5;
    } else if (currentPage.value >= total - 2) {
      start = total - 4;
      end = total;
    }
  }

  for (let i = start; i <= end; i++) pages.push(i);
  return pages;
});

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
}

const loadPlayers = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get(apiPlayers);
    const data = response.data.data || [];

    players.value = data
      .filter((p) => p.leave_time && p.leave_time.includes(" "))
      .sort((a, b) => {
        try {
          const [dA, tA] = a.leave_time.split(" ");
          const [dB, tB] = b.leave_time.split(" ");
          const dateA = new Date(`${dA.split(".").reverse().join("-")}T${tA}`);
          const dateB = new Date(`${dB.split(".").reverse().join("-")}T${tB}`);
          return dateB - dateA;
        } catch {
          return 0;
        }
      });
    currentPage.value = 1;
  } catch {
    error.value = "Ошибка загрузки игроков";
  } finally {
    loading.value = false;
  }
};

watch(activeSort, (val) => {
  if (val === "gamers") {
    loadPlayers();
  }
});

watch(sortSurvival, (val) => {
  if (val) {
    activeSort.value = val;
    displayedCategory.value = val;
    sortCombat.value = "";
    sortStats.value = "";
    sortByCategory(val);
  }
});

watch(sortCombat, (val) => {
  if (val) {
    activeSort.value = val;
    displayedCategory.value = val;
    sortSurvival.value = "";
    sortStats.value = "";
    sortByCategory(val);
  }
});

watch(sortStats, (val) => {
  if (val) {
    activeSort.value = val;
    displayedCategory.value = val;
    sortSurvival.value = "";
    sortCombat.value = "";
    sortByCategory(val);
  }
});

watch(searchQuery, () => {
  currentPage.value = 1;
});

const setActiveSort = (val) => {
  activeSort.value = val;
  sortSurvival.value = "";
  sortCombat.value = "";
  sortStats.value = "";
};

const sortByCategory = (field) => {
  players.value.sort((a, b) => {
    const valA =
      field === "kills"
        ? a.players_killed
        : field === "general"
          ? a.total_survival_time
          : field === "attempt"
            ? a.alife
            : field === "now"
              ? a.total_alife
              : a[field] ?? 0;
    const valB =
      field === "kills"
        ? b.players_killed
        : field === "general"
          ? b.total_survival_time
          : field === "attempt"
            ? b.alife
            : field === "now"
              ? b.total_alife
              : b[field] ?? 0;
    return (valB ?? 0) - (valA ?? 0);
  });
};

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "0с";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h > 0 ? h + "ч " : ""}${m > 0 ? m + "м " : ""}${s}с`;
};

onMounted(() => {
  if (activeSort.value === "gamers") {
    loadPlayers();
  }
});
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

.active {
  background-color: var(--variable-collection-orange);
  border: none;
}

.players-table {
  margin-left: 13vw;
  margin-top: 20px;
  width: 66.8vw;
  border-collapse: collapse;
}

thead tr {
  background-color: var(--variable-collection-orange);
}

.name {
  font-size: 20px;
  color: var(--variable-collection-white);
  padding: 14px 10px;
  border-right: 2px solid var(--variable-collection-orange);
  border-left: 2px solid var(--variable-collection-orange);
}

thead tr th:first-child {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: none;
}

thead tr th:last-child {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
}

tbody tr td:first-child {
  text-align: center;
}

tbody tr td:nth-child(2) {
  color: var(--variable-collection-orange);
}

.name,
.variable {
  color: var(--variable-collection-white);
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  text-align: start;
}

.variable {
  font-size: 16px;
  padding-left: 0.5vw;
}

.pagination {
  margin-left: 13vw;
  margin-top: 20px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: 45vw;
  margin-top: 40px;
}

.pagination button {
  padding: 6px 10px;
  background: none;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

.pagination button.active {
  background-color: var(--variable-collection-orange);
  border: none;
}

.pagination button:disabled {
  opacity: 0.4;
  cursor: default;
}

.search-input {
  width: 66.8vw;
  height: 60px;
  padding: 8px 1.6vw;
  border-radius: 20px;
  border: 2px solid #7e7e7e;
  background: #19161d;
  color: #7e7e7e;
  font-family: "IBM Plex Sans";
  font-size: 18px;
  outline: none;
}

.search-input::placeholder {
  color: #7e7e7e;
}

.search-icon{
  position: absolute;
  cursor: pointer;
  margin-left: 64vw;
}
</style>
