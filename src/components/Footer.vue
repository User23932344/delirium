<template>
  <div class="footer">
    <div class="links">
      <div class="st">
        <img :src="logo">
        <p class="text">РБ ООО "ЯровитПлюс"</p>
        <p class="text">УНП: 591038946</p>
      </div>
      <div class="st2">
        <h2 class="h2">Игрокам</h2>
        <div class="lk">
        <a class="link" @click="home">Начать играть</a>
        <a class="link">Форум</a>
        <a class="link" @click="rating">Рейтинг</a>
        <a class="link" @click="topUp">Пополнить счет</a>
      </div>
      </div>
      <div class="st2">
        <h2 class="h2">Информация</h2>
        <div class="lk">
        <a class="link">Политика конфиденциальности</a>
        <a class="link">Пользовательское соглашение</a>
        <a class="link">Публичная оферта</a>
        <a class="link">Политика возврата</a>
      </div>
      </div>
      <div class="st3">
        <h2 class="h2">Контакты</h2>
        <a href="https://vk.com/deliriumcom"><img class="img" :src="vkontakte" ></a>
        <a href="https://discord.gg/cFF9bB6yMN"><img class="img" :src="discord" >
        </a><a href="https://t.me/deliriumamber"><img class="img" :src="telegramm"></a>
      </div>
      <div class="jarovit">
      <h3 class="h3">JarovitPlus ©2023</h3>
    </div>
    </div>
  </div>
  </template>
  
  
  <script>
import vkontakte from '@/assets/vkontakte.svg';
import telegramm from '@/assets/telegramm.svg';
import discord from '@/assets/discord.svg';
import logo from '@/assets/logo.svg'; 

export default {
  name: 'FooterComponent',
  data() {
    return {
      logo, 
      vkontakte,
      telegramm,
      discord,
    };
  },
  methods: {
    topUp() {
      this.$router.push("/top-up"); 
    },
    rating(){
        this.$router.push("/rating"); 
      },
    home() {
      this.$router.push("/"); 
    },
  }
};
</script>

  
<style scoped>
@media (max-width:4200px) {
  .footer{
    width: 100%;
    height: 318px;
    background-color: #221F2F;
    border-radius: 20px 20px 0 0;
  }

  .links{
    margin-left: 13.3vw;
    display: flex;
  }

  .st{
    margin-top: 30px;
    white-space: nowrap;
  }

  .text{
  color: #949494;
  font-size: 1.2vw;
  font-family: "IBM Plex Sans-Regular" Helvetica;
  margin-top: 10px;
  cursor: default;
}

  .st2{
    white-space: nowrap;
    margin-top: 30px;
  margin: 56px 7vw;
}

.st3{
  margin-top: 56px;
  justify-content: space-between;
  white-space: nowrap;
}

.img{
  margin-top:15px;
  margin-right: 1.6vw;
  cursor: pointer;
}

.h2{
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-Semibold" helvetica;
  font-size: 1.2vw;
  font-weight: 600;
  cursor: default;
}

.lk{
  max-height: 250px;
  margin-top: 1vh;
  white-space: nowrap;
  display: grid;
}

.link{
  color: #949494;
  font-family: "IBM Plex Sans-Regular" helvetica;
  font-size: 23px;
  cursor: pointer;
  font-weight: 400;
  margin-top: 10px;
}
.jarovit{
  position: absolute;
  margin: 270px 33.6vw;
  color: #666;
  font-size: 15px;
  font-family: "IBM Plex Sans-Medium" helvetica;
  cursor: default;
}

}

@media(max-width:1550px){
  .footer{
    width: 100%;
    height: 308px;
    background-color: #221F2F;
    border-radius: 20px 20px;
    padding:31px 9.7vw;
  }

  .links{
    margin-left: 25px;
    display: flex;
  }
  .st{
    margin-top: 30px;
    white-space: nowrap;
  }

  .text{
  color: #949494;
  font-size: 18px;
  font-family: "IBM Plex Sans-Regular" Helvetica;
  margin-top: 10px;
  cursor: default;
  width: 25.5vw;
}

  .st2{
    white-space: nowrap;
    margin-top: 30px;
    margin-left: 3.9vw;
}

.st3{
  position: absolute;
  margin-top: 179px;
  justify-content: space-between;
  white-space: nowrap;
}

.img{
  margin-top:15px;
  margin-right: 30px;
  cursor: pointer;
}

.h2{
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-Semibold" helvetica;
  font-size: 18px;
  font-weight: 600;
  cursor: default;
  text-align: left;
}

.lk{
  margin-top: 15px;
  white-space: nowrap;
  display: grid;
}

.link{
  color: #949494;
  font-family: "IBM Plex Sans-Regular" helvetica;
  font-size: 16px;
  cursor: pointer;
  font-weight: 400;
  margin-top: 10px;
  text-align: left;
}
.jarovit{
  position: absolute;
  margin: 15px;
  color: #666;
  font-size: 15px;
  font-family: "IBM Plex Sans-Medium" helvetica;
  cursor: default;
  white-space: nowrap;
}

}

@media(max-width:700px){
  .footer{
    width: 100%;
    height: 687px;
    
    background-color: #221F2F;
    border-radius: 20px 20px;
    padding:31px 7.1vw;
  }

  .links{
    display:block;
  }

  .st{
    margin-top: 30px;
    white-space: nowrap;
  }

  .text{
  color: #949494;
  font-size: 18px;
  font-family: "IBM Plex Sans-Regular" Helvetica;
  margin-top: 10px;
  cursor: default;
  width: 25.5vw;
}

  .st2{
    white-space: nowrap;
    margin-top: 30px;
    margin-left: 0;
}

.st3{
  margin-top: -50px;
  justify-content: space-between;
  white-space: nowrap;
}

.img{
  height: 13px;
  margin-top:15px;
  margin-right: 30px;
  cursor: pointer;
}

.h2{
  color: var(--variable-collection-white);
  font-family: "IBM Plex Sans-Semibold" helvetica;
  font-size: 17px;
  font-weight: 600;
  cursor: default;
  text-align: left;
}

.lk{
  margin-top: 10px;
  white-space: nowrap;
  display: grid;
}

.link{
  color: #949494;
  font-family: "IBM Plex Sans-Regular" helvetica;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  text-align: left;
}
.jarovit{
  color: #666;
  font-size: 15px;
  font-family: "IBM Plex Sans-Medium" helvetica;
  cursor: default;
  white-space: nowrap;
  margin-left: 0;
}

}

</style>
