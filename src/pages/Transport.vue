<template>
  <header class="header">
    <HeaderComponent />
  </header>

  <div class="transport-container">
    <h2 class="title">Транспорт</h2>
    <div class="search">
      <input v-model="searchQuery" type="text" placeholder="Поиск" class="search-input" />

      <div class="category-scroll">
        <div class="category-buttons">
          <button v-for="category in categories" :key="category" @click="setCategory(category)"
            :class="['category-button', { active: selectedCategory === category }]">
            {{ category }}
          </button>
          <button @click="setCategory('')" :class="['category-button', { active: selectedCategory === '' }]">
            Все
          </button>
        </div>
      </div>
    </div>

    <div v-if="loading" class="loading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="transport-list">
      <div v-for="car in paginatedCars" :key="car.id" class="transport-card">
        <img :src="getImagePath(car.image)" :alt="car.name" class="car-image" />
        <div class="table-header">
          <p class="p">Наименование:</p>
          <p class="p">Багажник:</p>
          <p class="p">Скорость:</p>
          <p class="p">Количество:</p>
          <p class="p">Стоимость:</p>
        </div>
        <div class="table-values">
          <p class="bd">{{ car.name }}</p>
          <p class="bd">{{ car.trunk_capacity }} кг</p>
          <p class="bd">{{ car.speed }} км/ч</p>
          <p class="bd">{{ car.quantity }} шт</p>
          <p class="bd">${{ car.price }}</p>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button class="btn" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Назад</button>

      <template v-for="page in paginationRange" :key="page">
        <button class="btn" v-if="page !== '...'" @click="changePage(page)" :class="{ active: currentPage === page }">
          {{ page }}
        </button>
        <span v-else class="dots">...</span>
      </template>

      <button class="btn" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Вперед</button>
    </div>
  </div>

  <footer class="footer">
    <FooterComponent />
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";

const cars = ref([]);
const loading = ref(true);
const error = ref(null);
const currentPage = ref(1);
const carsPerPage = 7;
const searchQuery = ref("");
const selectedCategory = ref("");

const categories = [
  "Вертолет/Самолет",
  "Легковая",
  "Грузовая",
  "Мотоцикл",
  "Лодки",
  "Трейлеры"
];

const fetchTransport = async () => {
  try {
    const response = await fetch("http://localhost:3000/transport");
    if (!response.ok) throw new Error("Ошибка загрузки данных");
    cars.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const setCategory = (category) => {
  selectedCategory.value = category;
};

const filteredCars = computed(() => {
  return cars.value.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value ? car.category === selectedCategory.value : true;
    return matchesSearch && matchesCategory;
  });
});

const totalPages = computed(() => Math.ceil(filteredCars.value.length / carsPerPage));

const paginatedCars = computed(() => {
  const startIndex = (currentPage.value - 1) * carsPerPage;
  return filteredCars.value.slice(startIndex, startIndex + carsPerPage);
});

const changePage = (page) => {
  if (page !== "..." && page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const getImagePath = (path) => {
  return `http://localhost:3000/images/${path}`;
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

onMounted(fetchTransport);
</script>

<style scoped>
@media (max-width:4200px) {
  .header {
    padding-top: 30px;
    margin-left: 6.6vw;
  }

  .transport-container {
    min-height: 100vh;
  }

  .title {
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

  .search {
    margin-top: 40px;
    margin-left: 13vw;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .category-scroll {
    max-width: 73.4vw;
    overflow-x: auto;
  }

  .search-input {
    width: 26.6vw;
    height: 60px;
    border-radius: 20px;
    border: 2px solid #7e7e7e;
    background: #19161D;
    color: #7E7E7E;
    font-family: "IBM Plex Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 3.6vw;
  }

  .category-buttons {
    display: flex;
    flex-wrap: nowrap;
    width: max-content;
    gap: 10px;
  }

  .category-button {
    flex: 0 0 auto;
    margin-left: 0;
    color: #7E7E7E;
    font-family: "IBM Plex Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    height: 60px;
    padding: 12px 1vw 14px 1vw;
    border: 2px solid #7E7E7E;
    border-radius: 20px;
    background-color: #19161D;
  }

  .category-button.active {
    background-color: var(--variable-collection-orange);
    color: var(--variable-collection-white);
    border-color: var(--variable-collection-orange);
  }

  .loading,
  .error {
    margin-left: 13vw;
    margin-top: 30px;
    color: red;
  }

  .transport-list {
    margin-left: 13vw;
    margin-top: 20px;
  }

  .pagination {
    margin-top: 40px;
    margin-left: 13vw;
  }

  .btn {
    margin-right: 1vw;
    padding: 0.5vw;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    padding: auto;
    background: none;
    border: none;
  }

  .btn:active {
    background-color: var(--variable-collection-orange);
    min-width: 2.3vw;
    min-height: 2.3vw;
    padding: 0.5vw;
    border-radius: 10px;
  }
}

@media (max-width:1000px) {}

@media (max-width:650px) {}
</style>