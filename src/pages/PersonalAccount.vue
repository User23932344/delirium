<template>
  <header class="header">
    <HeaderComponent />
  </header>
  <div class="account">
    <h2 class="h2">Личный кабинет</h2>

    <div class="btns">
      <button class="btn" :class="{ active: activeTab === 'stats' }" @click="showStats">
        Статистика
      </button>
      <button class="btn" :class="{ active: activeTab === 'settings' }" @click="showSettings">
        Настройки
      </button>
    </div>

    <div v-if="activeTab === 'settings'">
      <div class="settings">
        <div class="box">
          <h3 class="h3">Смена почты</h3>
          <input type="text" class="post" placeholder="Старая почта">
          <input type="text" class="post" placeholder="Новая почта">
          <button class="change">Изменить</button>
        </div>

        <div class="box">
          <h3 class="h3">Смена пароля</h3>
          <img :src="eye" @click="togglePassword(1)" class="eye" />
          <img :src="eye" @click="togglePassword(2)" class="eye2" />
          <img :src="eye" @click="togglePassword(3)" class="eye3" />
          <input :type="showPassword1 ? 'text' : 'password'" class="post" placeholder="Старый пароль" />
          <input :type="showPassword2 ? 'text' : 'password'" class="post" placeholder="Новый пароль" />
          <input :type="showPassword3 ? 'text' : 'password'" class="post" placeholder="Повторите новый пароль" />
          <button class="change">Изменить</button>
        </div>

        <div class="boxl">
          <h3 class="h3">Настройка уведомлений</h3>
          <p class="p">Выберите те уведомления, которые хотели бы получать на почту</p>
          <div class="checkbox-container">
            <input type="checkbox" id="check1" class="check">
            <label for="check">
              <p class="checkp">Вход в аккаунт</p>
            </label>

            <input type="checkbox" id="check2" class="check">
            <label for="check">
              <p class="checkp">Подтверждение входа</p>
            </label>

            <input type="checkbox" id="check3" class="check">
            <label for="check">
              <p class="checkp">Восстановление аккаунта</p>
            </label>
          </div>
          <button class="change">Сохранить</button>
        </div>

      </div>
    </div>
    <!----->
    <div v-if="activeTab === 'stats'">
      <div class="data">
        <div class="block">
          <div class="acc">
            <h4 class="h4">Аккаунт</h4>
            <ul>
              <li class="element">
                <p class="fieldname">ID игрового аккаунта</p>
                <p class="variable">{{ userData?.id ?? '—' }}</p>
              </li>
              <li class="element">
                <p class="fieldname">Последняя активность</p>
                <p class="variable">{{ userData?.leave_time ?? '—' }}</p>
              </li>
              <li class="element">
                <p class="fieldname">Группировка</p>
                <p class="variable">—</p>
              </li>
              <li class="element">
                <p class="fieldname">Ранг</p>
                <p class="variable">—</p>
              </li>
            </ul>
          </div>

          <div class="state">
            <h4 class="h4">Состояние</h4>
            <ul>
              <li class="element">
                <p class="fieldname">Опыт</p>
                <p class="variable">{{ userData?.experience ?? '—' }}</p>
              </li>
              <li class="element">
                <p class="fieldname">Уровень</p>
                <p class="variable">{{ userData?.achievement_points ?? '—' }}</p>
              </li>
              <li class="element">
                <p class="fieldname">Деньги</p>
                <p class="variable">{{ userData?.money ?? '—' }}</p>
              </li>
              <li class="element">
                <p class="fieldname">Человечность</p>
                <p class="variable">{{ userData?.humanity ?? '—' }}</p>
              </li>
            </ul>
          </div>

        </div>
        <div class="statistics">

        </div>
      </div>
      <div class="achievements"></div>
      <div class="progress"></div>
    </div>

  </div>
  <footer class="footer">
    <FooterComponent />
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
import eye from '@/assets/eye.svg';

const baseUrl = 'https://test-delirium.hellishworld.ru';

const activeTab = ref("stats");

const showPassword1 = ref(false);
const showPassword2 = ref(false);
const showPassword3 = ref(false);

const showSettings = () => {
  activeTab.value = "settings";
};

const showStats = () => {
  activeTab.value = "stats";
};

const togglePassword = (num) => {
  if (num === 1) showPassword1.value = !showPassword1.value;
  if (num === 2) showPassword2.value = !showPassword2.value;
  if (num === 3) showPassword3.value = !showPassword3.value;
};

const userId = ref(null);
const userData = ref(null);

const fetchUserData = async (userId) => {
  try {
    const res = await fetch(`${baseUrl}/api/player`);
    if (!res.ok) throw new Error('Ошибка при получении данных игроков');
    const players = await res.json();
    const player = players.find(p => String(p.id) === String(userId));
    if (!player) throw new Error('Пользователь не найден');

    userData.value = player;
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
@media(max-width:4200px) {
  .header {
    padding-top: 30px;
    margin-left: 6.6vw;
  }

  .account {
    min-height: 100vh;
    background-color: #19161D;
    ;
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

  .btns {
    margin-left: 13vw;
  }

  .btn {
    width: 9vw;
    height: 60px;
    margin-right: 0.5vw;
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
    border: 2px solid var(--variable-collection-orange);
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn.active {
    background-color: var(--variable-collection-orange);
  }

  .box,
  .boxl {
    background-color: #1C1920;
    border-radius: 30px;
    width: 73.4vw;
    margin-top: 30px;
    margin-left: 13vw;
    padding: 1.6vw;
  }

  .h3 {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  .post {
    width: 70.4vw;
    height: 60px;
    border-radius: 20px;
    padding-top: 19px;
    padding-bottom: 19px;
    padding-left: 1.6vw;
    border: 2px solid #2f2f2f4c;
    background-color: #201c25;
    margin-top: 20px;
    color: #858585;
    font-family: "IBM Plex Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }

  .change {
    cursor: pointer;
    margin-top: 20px;
    width: 70.4vw;
    height: 60px;
    border-radius: 20px;
    background-color: var(--variable-collection-orange);
    border: none;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  .eye,
  .eye2,
  .eye3 {
    position: absolute;
    margin-left: 68.2vw;
    cursor: pointer;
  }

  .eye {
    margin-top: 45px;
  }

  .eye2 {
    margin-top: 125px;
  }

  .eye3 {
    margin-top: 205px;
  }

  .p {
    cursor: default;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 21.6px;
    white-space: nowrap;
    margin-top: 18px;
  }


  .checkbox-container {
    margin-left: 1.5vw;
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

  .check:checked+label::before {
    background-color: var(--variable-collection-orange);
    border-color: var(--variable-collection-orange);
    content: "✔";
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 18px;
    font-weight: bold;
  }

  .boxl {
    margin-bottom: 90px;
  }


  .footer {
    margin-top: auto;
    width: 100%;
  }

}
</style>