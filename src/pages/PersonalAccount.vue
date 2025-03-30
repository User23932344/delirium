<template>
    <header class="header">
      <HeaderComponent/>
    </header>
    
    <div class="account">
      <h2 class="h2">Личный кабинет</h2>
      <button 
        class="btn" 
        :class="{ active: activeTab === 'settings' }" 
        @click="showSettings">
        Настройки
      </button>
      <button class="btn" 
        :class="{ active: activeTab === 'stats' }" 
        @click="showStats">
        Статистика
      </button>
  
      <div v-if="activeTab === 'settings'">
        <div class="settings">
          <div class="box1">
            <h3 class="h3">Смена почты</h3>
            <input type="text" class="post" placeholder="Старая почта">
            <input type="text" class="post" placeholder="Новая почта">
            <button class="change">Изменить</button>
          </div>
          <div class="box2">
            <h3 class="h3">Смена пароля</h3>
            <img :src="eye" @click="togglePassword(1)" class="eye" />
            <img :src="eye" @click="togglePassword(2)" class="eye2" />
            <img :src="eye" @click="togglePassword(3)" class="eye3" />
            <input 
              :type="showPassword1 ? 'text' : 'password'" 
              class="pass" 
              placeholder="Старый пароль"
            />
            <input 
              :type="showPassword2 ? 'text' : 'password'" 
              class="pass" 
              placeholder="Новый пароль"
            />
            <input 
              :type="showPassword3 ? 'text' : 'password'" 
              class="pass" 
              placeholder="Повторите новый пароль"
            />
            <button class="change">Изменить</button>
          </div>
          <div class="box3">
            <h3 class="h3">Настройка уведомлений</h3>
            <p class="p">Выберите те уведомления, которые хотели бы получать на почту</p>
            <div class="checkbox-container">
              <input type="checkbox" id="check1" class="check">
              <label for="check1">
                <p class="checkp">Вход в аккаунт</p>
              </label>
  
              <input type="checkbox" id="check2" class="check">
              <label for="check2">
                <p class="checkp">Подтверждение входа</p>
              </label>
  
              <input type="checkbox" id="check3" class="check">
              <label for="check3">
                <p class="checkp">Восстановление аккаунта</p>
              </label>
            </div>
            <button class="save">Сохранить</button>
          </div>
        </div>
      </div>
  
      <div v-if="activeTab === 'stats'">
        <div class="stat">
          <div class="statacc">
            <div class="block">
              <div class="nameblock">Аккаунт</div>
              <div class="field">
                <p class="fieldname">ID игрового аккаунта</p>
                <p class="variable">{{ userData?.id ?? '—' }}</p>
              </div>
              <div class="field">
                <p class="fieldname">Последняя активность</p>
                <p class="variable">{{ userData?.last_active ?? '—' }}</p>
              </div>
              <div class="field">
                <p class="fieldname">Группировка</p>
                <p class="variable">{{ userData?.group ?? '—' }}</p>
              </div>
              <div class="field">
                <p class="fieldname">Ранг</p>
                <p class="variable">{{ userData?.rank ?? '—' }}</p>
              </div>
            </div>
            <div class="block2">
              <div class="nameblock">Состояние</div>
              <div class="field">
                <p class="fieldname">Опыт</p>
                <p class="variable">{{ userData?.xp ?? '—' }} xp</p>
              </div>
              <div class="field">
                <p class="fieldname">Уровень</p>
                <p class="variable">{{ userData?.level ?? '—' }} LVL</p>
              </div>
              <div class="field">
                <p class="fieldname">Деньги</p>
                <p class="variable">${{ userData?.money ?? '—' }}</p>
              </div>
              <div class="field">
                <p class="fieldname">Человечность</p>
                <p class="variable">{{ userData?.humanity ?? '—' }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="userData?.achievements">
   <div class="achievements">
       <div class="nameblock2">Статистика</div>
       <div class="field">
         <p class="fieldname">Текущее выживание</p>
         <p class="variable">{{ userData?.achievements?.current_survival ?? '—' }}</p>
       </div>
       <div class="field">
         <p class="fieldname">Общее выживание</p>
         <p class="variable">{{ userData?.achievements?.total_survival ?? '—' }}</p>
       </div>
       <div class="field">
         <p class="fieldname">Пройдено пешком</p>
         <p class="variable">{{ userData?.achievements?.walked_distance ?? '—' }} м</p>
       </div>
       <div class="field">
         <p class="fieldname">Пройдено на транспорте</p>
         <p class="variable">{{ userData?.achievements?.vehicle_distance ?? '—' }} м</p>
       </div>
       <div class="field">
         <p class="fieldname">Убито игроков</p>
         <p class="variable">{{ userData?.achievements?.players_killed ?? '—' }}</p>
       </div>
       <div class="field">
         <p class="fieldname">Выстрелы в голову</p>
         <p class="variable">{{ userData?.achievements?.headshots ?? '—' }}</p>
       </div>
       <div class="field">
         <p class="fieldname">Попаданий всего</p>
         <p class="variable">{{ userData?.achievements?.total_hits ?? '—' }}</p>
       </div>
   
       <div class="nameblock2">Достижения</div>
<div v-for="(achievement, index) in userData.achievements" :key="index" class="field">
    <p class="fieldname">{{ achievement.name }}</p>
    <p class="variable">{{ achievement.value }}</p>
</div>
   
       <button class="change2">Показать еще</button>
   </div>
      </div>
      </div>
  
    </div>
  
    <footer class="footer">
      <FooterComponent/>
    </footer>
  </template>
  

  <script setup>
  import { ref, onMounted } from "vue";
  import HeaderComponent from '@/components/Header.vue';
  import FooterComponent from '@/components/Footer.vue';
  import eye from '@/assets/eye.svg';
  
  const activeTab = ref("settings");
  
  const showPassword1 = ref(false); 
  const showPassword2 = ref(false); 
  const showPassword3 = ref(false); 
  
  const userData = ref(null); 
  const userId = ref(null);  
  
  const showSettings = () => {
      activeTab.value = "settings";
  };
  
  const showStats = () => {
      activeTab.value = "stats";
  };
  
  const togglePassword = (num) => {
      if (num === 1) {
          showPassword1.value = !showPassword1.value;
      } else if (num === 2) {
          showPassword2.value = !showPassword2.value;
      } else if (num === 3) {
          showPassword3.value = !showPassword3.value;
      }
  };
  
  const fetchUserData = async (userId) => {
    try {
      const userResponse = await fetch(`http://localhost:3000/users/${userId}`);
      if (!userResponse.ok) {
        throw new Error('Ошибка при получении данных пользователя');
      }
      const userDataResponse = await userResponse.json();
  
      const achievementsResponse = await fetch(`http://localhost:3000/achievements/${userId}`);
      if (!achievementsResponse.ok) {
        throw new Error('Ошибка при получении достижений');
      }
      const achievementsData = await achievementsResponse.json();
  
      userData.value = { user: userDataResponse, achievements: achievementsData };
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };
  
  onMounted(() => {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
          userId.value = storedUserId; 
          fetchUserData(userId.value); 
      } else {
          console.error("Не найден ID пользователя в localStorage");
      }
  });
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

.account{
    margin-left: 255px;
    background-color: #1C1920;
}

.h2{
    cursor: default;
    color: var(--variable-collection-white);
    font-family: 'Balsamiq Sans-Bold',Helvetica;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: normal;
    white-space: nowrap;
    left: 255px;
    margin-top: 40px;
}

.btn{
    width: 172px;
    height: 60px;
    margin-right: 10px;
    margin-top: 30px;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Medium", Helvetica;
    font-size: 22px;
    font-weight: 400; 
    letter-spacing: 0; 
    line-height: 32px; 
    white-space: nowrap; 
    text-align: center;
    background-color: #1C1920; 
    border:2px solid var(--variable-collection-orange); 
    border-radius: 20px;
    cursor: pointer; 
    transition: background-color 0.3s; 
}

.btn.active{
    background-color: var(--variable-collection-orange);
}

.box1{
    margin-top: 20px;
    width: 1410px;
    height: 342px;
    border-radius: 20px;
    background-color: #1C1920;
}

.h3{
    cursor: default;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Medium",Helvetica;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 42px;
    white-space: nowrap;
}

.post{
    width: 1350px;
    height: 60px;
    border-radius: 20px;
    padding-left: 30px;
    padding-top: 19px;
    padding-bottom: 19px;
    color: #848484;
    font-family: "IBM Plex Sans-Regular",Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 21.6px;
    white-space: nowrap;
    border: 2px solid #2f2f2f4c;
    background-color: #201c25;
    margin-top: 20px;
    margin-left: 30px;
}

.change,.change2{
    cursor: pointer;
    margin-top: 20px;
    margin-left: 30px;
    width: 1350px;
    height: 60px;
    border-radius: 20px;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular",Helvetica;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 32px;
    white-space: nowrap;
    background-color: var(--variable-collection-orange);
}

.box2{
    margin-top: 30px;
    width: 1410px;
    height: 422px;
    border-radius: 20px;
    background-color: #1C1920;
}

.eye,.eye2,.eye3{
    position: absolute;
    margin-left: 1332px;
}
.eye,.eye2,.eye3:hover{
    cursor: pointer;
}
.eye{
    margin-top: 45px;
}
.eye2{
    margin-top: 125px;
}
.eye3{
    margin-top: 205px;
}

.pass{
    width: 1350px;
    height: 60px;
    border-radius: 20px;
    padding-left: 30px;
    padding-top: 19px;
    padding-bottom: 19px;
    color: #848484;
    font-family: "IBM Plex Sans-Regular",Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 21.6px;
    white-space: nowrap;
    border: 2px solid #2f2f2f4c;
    background-color: #201c25;
    margin-top: 20px;
    margin-left: 30px;
}

.box3{
    margin-top: 30px;
    width: 1410px;
    height: 287px;
    border-radius: 20px;
    background-color: #1C1920;
    margin-bottom: 90px;
}

.p{
    cursor: default;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular",Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 21.6px;
    white-space: nowrap;
    margin-top: 18px;
}


.checkbox-container {
    margin-top: 30px;
    display: flex;
    justify-content: start; 
    gap: 50px; 
}

.checkp {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 19.2px;
    position: relative;
    margin-bottom: 0;
}

.check {
    display: none;
}

label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid var(--variable-collection-orange);
    border-radius: 5px;
    margin-right: 10px;
    background-color: transparent;
    transition: background 0.3s, border 0.3s;
}

.check:checked + label::before {
    background-color: var(--variable-collection-orange);
    border-color: var(--variable-collection-orange);
    content: "✔";
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 18px;
    font-weight: bold;
}

.save{
    margin-top: 30px;
    margin-left: 30px;
    width: 1350px;
    height: 60px;
    border-radius: 20px;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular",Helvetica;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 32px;
    white-space: nowrap;
    background-color: var(--variable-collection-orange);
}

.stat{
    background-color: #1C1920;
}

.statacc{
    display: flex;
    justify-content: flex-start; 
    gap: 30px; 
    
    width: 1410px;
}

.nameblock{
    cursor: default;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 18px;
    width: 690px;
    height: 60px;
    border-radius: 20px;
    color: var(--variable-collection-white);
    font-family: "Ubuntu-Medium",Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
    background-color: var(--variable-collection-orange);
    text-align: center;
}

.field{
    display: flex;
    justify-content: space-between; 
    margin-bottom:40px ;
    border-bottom: 1px solid #47454A;
    padding-bottom: 20px;
}

.fieldname{
    cursor: default;
    color: var(--variable-collection-white);
    font-family: "Ubuntu-Regular",Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.16px;
    line-height: 24px;
    white-space: nowrap;

}

.variable{
    cursor: default;
    color: var(--variable-collection-white);
    font-family: "Ubuntu-Bold",Helvetica;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.16px;
    line-height: 24px;
    white-space: nowrap;
}

.achievements{
    width: 1410px;
    margin-bottom: 90px;
}

.nameblock2{
    cursor: default;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 18px;
    width: 1410px;
    height: 60px;
    border-radius: 20px;
    color: var(--variable-collection-white);
    font-family: "Ubuntu-Medium",Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
    background-color: var(--variable-collection-orange);
    text-align: center;
}
.change2{
    margin-top: 40px;
    }
</style>