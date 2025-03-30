<template>
    <header class="header">
      <HeaderComponent />
    </header>
  
    <div class="transport-container">
      <h2 class="title">Транспорт</h2>
  <div class="search">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Поиск"
        class="search-input"
      />
  
      <div class="category-buttons">
        <button 
          v-for="category in categories" 
          :key="category" 
          @click="setCategory(category)" 
          :class="{ active: selectedCategory === category }"
        >
          {{ category }}
        </button>
        <button 
          @click="setCategory('')" 
          :class="{ active: selectedCategory === '' }"
        >
          Все
        </button>
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
          <button class="btn"
            v-if="page !== '...'"
            @click="changePage(page)"
            :class="{ active: currentPage === page }"
          >
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
  .header {
    padding-top: 30px;
    left: 255px;
    z-index: 1;
}

.footer {
  position: relative;
  width: 100%;
  z-index: 1;
  background-color: #1C1920;
}

  .transport-container {
    margin-left: 255px;
  }
  
  .title {
    font-size: 40px;
    color: var(--variable-collection-white);
    margin-top: 40px ;
    font-family: "Balsamiq Sans-Bold", Helvetica;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: normal;
    white-space: nowrap;
  }
  .search{
    display: flex;
    justify-content: flex-start;
  }
  
  .search-input {
    background-color: #1C1920;
    width: 510px;
    height: 60px;
    padding: 10px;
    margin-top: 40px ;
    border: 2px solid #7e7e7e;
    border-radius: 20px;
    padding-left: 70px;
    color: #7e7e7e;
    font-family: "IBM Plex Sans-Regular",Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
  }
  
  .category-buttons {
    margin-top: 40px;
    height: 60px;
    width: 890px;
    white-space: nowrap;
  }
  
  .category-buttons button {
    font-family: "IBM Plex Sans-Regular",Helvetica;
    height: 60px;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 32px;
    white-space: nowrap;
    text-align: center;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    border: 1px solid var(--variable-collection-orange);
    background-color: #1C1920;
    cursor: pointer;
    color: #7e7e7e;
    transition: 0.3s;
    margin-left: 10px;
  }
  
  .category-buttons button.active {
    background-color: var(--variable-collection-orange);
    font-weight: bold;
    color: white;
  }
  
  .transport-list {
    margin-top: 20px;
  }
  
  .transport-card {
    background: #1c1920;
    width: 1410px;
    height: 170px;
  }

  .table-header,.table-values{
    display: flex;
    justify-content: space-around;
  }

  .p{
    color: #707070;
    font-family: "IBM Plex Sans-Media",Helvetica;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }

  .bd{
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Bold",Helvetica;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .car-image {
    margin: 20px 40px 20px 40px;
    width: 100%;
    height: auto;
  }
  
  .loading,
  .error {
    font-size: 18px;
    color: red;
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
  