<template>
  <div v-if="show" class="modal-overlay" @click.self="close">
    <div class="modal">
      <h2 v-if="!isRecoveryMode">Авторизация</h2>
      <div v-else>
        <h2>Восстановление</h2>
        <h3>На вашу электронную почту будет отправлено письмо содержащее новый пароль от аккаунта</h3>
      </div>
      

      <template v-if="!isRecoveryMode">
        <input type="text" placeholder="Логин" class="input-field" />
        <input type="password" placeholder="Пароль" class="input-field" />
        <div class="under">
          <input type="checkbox" id="check" class="check">
          <label for="check">
            <p class="checkp">Запомнить меня</p>
          </label>
          <a class="a" href="#" @click.prevent="isRecoveryMode = true">Забыли пароль?</a>
        </div>
        <button class="login-btn">Авторизоваться</button>
      </template>

      <template v-else>
        <input type="email" placeholder="Введите email" class="input-field" />
        <button class="login-btn2">Отправить код</button>
      </template>

    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

defineProps({ show: Boolean });
const emit = defineEmits(["close"]);

const isRecoveryMode = ref(false);

const close = () => {
isRecoveryMode.value = false;
emit("close");
};
</script>

  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    height: 379px;
    width: 380px;
    background: #11071C;
    padding: 20px;
    border-radius: 20px;
  }
  
h2{
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-Medium", Helvetica;
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 49px;
  text-align: center;
  margin-bottom: 25px;
}

h3{
  width: 340px;
  font-family:"IBM Plex Sans-Medium", Helvetica; ;
font-size: 17px;
line-height: 120%;
color: #fff;
text-align: left;
display: inline-block;
height: 65px;
}

.input-field {
  padding-left: 10px;
  background-color: #1c1426;
  border: 2px solid;
  border-color: #2f2f2f4c;
  border-radius: 10px;
  height: 55px;
  width: 340px;
  margin:10px 0 20px;
  display: block;
  position: relative;
}

.under{
  display: flex;
}

.checkp {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 19.2px;
    position: relative;
    margin-bottom: 20px;
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
    margin-bottom: 20px;
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

.a{
  color: #828282;
  font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 19.2px;
    margin-left: 50px;
  margin-bottom: 20px;
}

  .login-btn {
    width: 340px;
    height: 60px;
    background-color: var(--variable-collection-orange);
    color: var(--variable-collection-white);
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 25px;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 19.2px;
  }
  .login-btn2{width: 340px;
    height: 60px;
    background-color: var(--variable-collection-orange);
    color: var(--variable-collection-white);
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 25px;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 19.2px;
  }
  </style>
  