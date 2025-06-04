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
        <img :src="car.model_url" :alt="car.title" class="car-image" />
        <div class="table">
          <div class="table-cell title-cell">
            <p class="p">Наименование:</p>
            <p class="bd">{{ car.title }}</p>
          </div>
          <div class="table-cell">
            <p class="p">Объём бака:</p>
            <p class="bd">{{ car.tank_size }} л</p>
          </div>
          <div class="table-cell">
            <p class="p">Скорость:</p>
            <p class="bd">{{ car.speed }} км/ч</p>
          </div>
          <div class="table-cell">
            <p class="p">Количество:</p>
            <p class="bd">{{ car.count }} шт</p>
          </div>
          <div class="table-cell">
            <p class="p">Стоимость:</p>
            <p class="bd">${{ car.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <template v-for="page in paginationRange" :key="page">
        <button class="btn" v-if="page !== '...'" @click="changePage(page)" :class="{ active: currentPage === page }">
          {{ page }}
        </button>
        <span v-else class="dots">...</span>
      </template>
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
  "Спецтехника",
  "Мотоцикл",
  "Лодки",
  "Трейлеры"
];

const categoryMapping = {
  1: "Легковая",
  2: "Грузовая",
  3: "Спецтехника",
  4: "Мотоцикл",
  5: "Лодки",
  6: "Трейлеры",
  7: "Грузовая",
  8: "Вертолет/Самолет"
};

const keywordMap = {
  "спорткар": ["sport", "coupe", "supercar", "gt"],
  "скорая": ["ambulance", "emergency"],
  "байк": ["motorcycle", "bike"],
  "трактор": ["tractor"],
  "грузовик": ["truck", "lorry"],
  "джип": ["jeep", "suv"],
  "пожарная": ["firetruck", "fire engine"],
  "лодка": ["boat"],
  "самолет": ["airplane", "plane"],
  "вертолет": ["helicopter"],
};

const typeFixMap = {
  2: 4,
  5: 6,
  6: 5
};

const fetchTransport = async () => {
  loading.value = true;
  try {
    const response = await fetch("https://test-delirium.hellishworld.ru/api/vehicle?limit=200");
    if (!response.ok) throw new Error("Ошибка загрузки данных");

    const result = await response.json();

    cars.value = result.data.map(car => {
      const fixedType = typeFixMap[car.type] !== undefined ? typeFixMap[car.type] : car.type;
      let category = categoryMapping[fixedType] || "Прочее";
      const title = car.title?.toLowerCase() || "";

      if (
        car.type === 8 ||
        title.includes("helicopter") ||
        title.includes("airplane") ||
        title.includes("вертолет") ||
        title.includes("самолет")
      ) {
        category = "Вертолет/Самолет";
      }

      if (category === "Грузовая") {
        if (
          title.includes("sedan") || title.includes("coupe") || title.includes("hatchback") ||
          title.includes("cabrio") || title.includes("convertible") || title.includes("wagon") ||
          title.includes("passenger") || title.includes("tourer") || title.includes("saloon") ||
          title.includes("минивен") || (title.includes("van") && !title.includes("box")) ||
          title.includes("седан") || title.includes("купе") || title.includes("хэтчбек") ||
          title.includes("кабриолет") || title.includes("универсал") || title.includes("пассажир")
        ) {
          category = "Легковая";
        }
      }

      return {
        ...car,
        category
      };
    });
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
  const query = searchQuery.value.toLowerCase().trim();
  const keywordMatches = [];

  Object.entries(keywordMap).forEach(([keyword, terms]) => {
    if (query.includes(keyword)) {
      keywordMatches.push(...terms);
    }
  });

  return cars.value.filter(car => {
    const title = car.title.toLowerCase();

    const matchesSearch = query
      ? title.includes(query) || keywordMatches.some(term => title.includes(term))
      : true;

    const matchesCategory = selectedCategory.value
      ? car.category === selectedCategory.value
      : true;

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

const paginationRange = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const delta = 1;
  const range = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      range.push(i);
    }
  } else {
    range.push(1);

    if (current > 2 + delta) {
      range.push("...");
    }

    const start = Math.max(2, current - delta);
    const end = Math.min(total - 1, current + delta);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (current < total - (1 + delta)) {
      range.push("...");
    }

    range.push(total);
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

  .transport-card {
    width: 73.4vw;
    background-color: #19161D;
    display: flex;
    align-items: center;
    color: var(--variable-collection-white);
    margin-bottom: 10px;
    border-radius: 30px;
    cursor: pointer;
  }

  .table {
    display: flex;
    gap: 2vw;
    margin-top: 1vw;
  }

  .table-cell {
    display: flex;
    flex-direction: column;
    width: 10vw;
    min-width: 100px;
    text-align: end;
  }

  .title-cell {
    width: 13.6vw;
    text-align: start;
  }

  .p {
    color: #717171;
    font-family: "IBM Plex Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .bd {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


  .pagination {
    margin-top: 40px;
    margin-left: 45vw;
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

  .btn.active {
    background-color: var(--variable-collection-orange);
    min-width: 2.3vw;
    min-height: 2.3vw;
    padding: 0.5vw;
    border-radius: 10px;
  }

  .dots {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    cursor: default;
  }

  .footer{
    margin-top: 90px;
  }
}

@media (max-width:1550px) {
  .header {
    margin-left: 4.8vw;
  }

  .title {
    margin-left: 9.7vw;
  }

  .search {
    margin-top: 20px;
    margin-left: 9.7vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .category-scroll {
    min-width: 80.4vw;
  }

  .category-button{
    height: 50px;
    padding: 8px 1.9vw 10px 1.9vw;
  }

  .search-input {
    width: 80.5vw;
    height: 50px;
    padding-left: 9.1vw;
  }

  .transport-list {
    margin-left: 9.7vw;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 2.6vw;
  }

  .transport-card {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    border-radius: 30px;
    flex-direction: row;
    width: 38.9vw;
    padding: 2.6vw;
  }

  .car-image{
    width: 34vw;
  }

  .table {
    width: 34vw;
    display: flex;
    margin-top: 1vw;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .table-cell {
    text-align: start;
    width: 5vw;
  }

  .title-cell {
    width: 34vw;
  }

  .p {
    font-size: 14px;
    white-space: nowrap;
  }

  .bd {
    font-size: 18px;
    white-space: nowrap;
  }


  .pagination {
    margin-top: 40px;
    margin-left: 45vw;
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

  .btn.active {
    background-color: var(--variable-collection-orange);
    min-width: 2.3vw;
    min-height: 2.3vw;
    padding: 0.5vw;
    border-radius: 10px;
  }

  .dots {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    cursor: default;
  }
}

@media (max-width:630px) {
  .header {
    margin-left: 3.6vw;
  }

  .title {
    margin-left: 7.1vw;
    font-size: 20px;
  }

  .search {
    margin-top: 20px;
    margin-left: 7.1vw;
    flex-direction: column;
    gap: 15px;
  }

  .category-scroll {
    min-width: 85.7vw;
  }

  .category-button{
    height: 45px;
    padding: 8px 1.9vw 10px 1.9vw;
  }

  .search-input {
    width: 85.7vw;
    height: 45px;
    padding-left: 9.1vw;
  }

  .transport-list {
    margin-left: 7.1vw;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 2.6vw;
  }

  .transport-card {
    flex-wrap: wrap;
    margin-top: 20px;
    border-radius: 30px;
    flex-direction: row;
    width: 85.7vw;
    padding: 2.6vw;
  }

  .car-image{
    width: 85.7vw;
  }

  .table {
    width: 83vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .table-cell {
    text-align: start;
    width: 5vw;
  }

  .title-cell {
    width: 85vw;
  }

  .p {
    font-size: 14px;
    white-space: nowrap;
  }

  .bd {
    font-size: 18px;
    white-space: nowrap;
  }


  .pagination {
    margin-top: 30px;
    margin-left: 40vw;
  }

  .btn {
    margin-right: 1.6vw;
    padding: 1.5vw ;
  }
}
</style>