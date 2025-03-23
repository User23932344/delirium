<template>
    <header class="header">
            <HeaderComponent />
        </header>
    <div class="screen">
        <div class="div-5">
            <div class="text-wrapper-20">Пополнение счета</div>
            <div class="group-wrapper">
                <div class="overlap-group-wrapper">
                <div class="overlap-group-2">
                    <input type="text" class="input-field" placeholder="Логин" />
                </div>
                </div>
            </div>
        <div class="group-6">
            <div class="overlap-group-wrapper">
            <div class="overlap-group-3">
                <input type="email" class="input-field" placeholder="E-mail" />
            </div>
            </div>
        </div>
    <div class="group-7">
    <div class="overlap-group-wrapper">
        <div class="overlap-group-2">
            <input type="number" class="sum-input" placeholder="Сумма пополнения" />
        </div>
    </div>
</div>
            <div class="frame-6">
                <div class="text-wrapper-22">Пополнить</div>
            </div>
            <div class="group-8">
                <input type="checkbox" id="check" class="check">
                <label for="check">
                    <p class="checkp">Я ознакомлен с <a href="#">условиями оферты</a></p>
                </label>
            </div>

            <div class="overlap">
                <p class="text-wrapper-25">Курс пополнения 1 PT = 1 рубль</p>
                <div class="text-wrapper-26">Что можно купить</div>
                <div class="products">
                    <div class="collum1">
                        <div class="product">Деньги (5.000)</div>
                        <div class="price">10p</div>

                        <div class="product">Jetpack</div>
                        <div class="price2">10.000p</div>

                        <div class="product">Тайник (4 цифры, слабый)</div>
                        <div class="price3">15p</div>

                        <div class="product">Малый ваучер (+2.000xp)</div>
                        <div class="price4">35p</div>

                        <div class="product">Средний ваучер (+10.000xp)</div>
                        <div class="price5">180p</div>

                        <div class="product">Большой ваучер (+50.000xp)</div>
                        <div class="price6">360p</div>

                        <div class="product">Мега ваучер (+200.000xp)</div>
                        <div class="price7">715p</div>

                        <div class="product">Синий Набор</div>
                        <div class="price8">180p</div>
                    </div>

                    <div class="collum2">
                        <div class="product">Зелёный Набор</div>
                        <div class="price9">380p</div>

                        <div class="product">Жёлтый Набор</div>
                        <div class="price10">700p</div>

                        <div class="product">Оранжевый Набор</div>
                        <div class="price11">1.500p</div>

                        <div class="product">Катализатор</div>
                        <div class="price12">100p</div>

                        <div class="product">Премиум "Care" (1 шт на 24ч)</div>
                        <div class="price13">12p</div>

                        <div class="product">Премиум "Gain" (1 шт на 24ч)</div>
                        <div class="price14">14p</div>

                        <div class="product">Премиум "Mega" (1 шт на 24ч)</div>
                        <div class="price15">17p</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
            <FooterComponent />
    </footer>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/Footer.vue';

export default {
    name: "TopUp",
    components:
    {
        HeaderComponent,
        FooterComponent
    }
};
</script>

<style>
.header {
    left: 129px;
  z-index: 1;
}

.footer {
  position: relative;
  margin-top: 78vh;
  width: 100%;
  z-index: 1;
}

.screen {
    background-color: #19161d;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.screen .div-5 {
    background-color: #19161d;
    height: 1059px;
    position: absolute;
    width: 100%;
}

.screen .text-wrapper-20 {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Medium", Helvetica;
    font-size: 35px;
    font-weight: 500;
    left: 1215px;
    letter-spacing: 0;
    line-height: 49px;
    position: absolute;
    top: 133px;
    white-space: nowrap;
}

.screen .group-wrapper {
    height: 60px;
    left: 1215px;
    position: absolute;
    top: -690px;
    width: 450px;
}

.screen .overlap-group-wrapper {
    height: 60px;
    width: 452px;
}

.screen .overlap-group-2 {
    background-color: #201c25;
    border: 2px solid #2f2f2f4c;
    border-radius: 20px;
    height: 60px;
    position: relative;
    width: 450px;
}

.screen .text-wrapper-21 {
    color: #848484;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 18px;
    font-weight: 400;
    left: 28px;
    letter-spacing: 0;
    line-height: 21.6px;
    position: absolute;
    top: 17px;
    white-space: nowrap;
}

.screen .group-6 {
    height: 60px;
    left: 1215px;
    position: absolute;
    top: -610px;
    width: 450px;
}

.screen .overlap-group-3 {
    background-color: #1f1b24;
    border: 2px solid #2f2f2f4c;
    border-radius: 20px;
    height: 60px;
    position: relative;
    width: 450px;
}

.screen .group-7 {
    height: 60px;
    left: 1215px;
    position: absolute;
    top: -530px;
    width: 450px;
}
.sum-input {
    background-color: #201c25;
    border: 2px solid #2f2f2f4c;
    border-radius: 20px;
    height: 60px;
    width: 100%;
    color: #fff;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 18px;
    padding-left: 28px;
    outline: none;
}

.sum-input::placeholder {
    color: #848484;
}

.sum-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    padding: 10px;
    font-size: 16px;
}

.sum-input::-webkit-outer-spin-button,
.sum-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.sum-input::-moz-appearance {
    appearance: none;
}

.input-field {
    background-color: #201c25;
    border: 2px solid #2f2f2f4c;
    border-radius: 20px;
    height: 60px;
    width: 100%;
    color: #fff;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 18px;
    padding-left: 28px;
    outline: none;
}

.input-field::placeholder {
    color: #848484;
}

.screen .frame-6 {
    align-items: center;
    background-color: var(--variable-collection-orange);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    left: 1215px;
    padding: 14px 35px;
    position: absolute;
    top: 496px;
    width: 450px;
    height: 50px;
    cursor: pointer;
}

.text-wrapper-22 {
    color: #fff;
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    margin-top: -40px;
    margin-left: 100px;
}

.screen .group-8 {
    height: 25px;
    left: 1215px;
    position: absolute;
    top: 441px;
    width: 209px;
}

.screen .checkp {
    margin-left: 27px;
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 19.2px;
    position: absolute;
    top: 3px;
    white-space: nowrap;
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

.screen a{
    color: var(--variable-collection-orange);
}

.screen a:hover{
    color: darkorange;
}

.screen a:visited{
    color: orangered;
}

.screen .overlap {
    background-image: url("@/assets/rectangle91.svg");
    background-size: 100% 100%;
    height: 507px;
    left: 266px;
    position: absolute;
    top: 134px;
    width: 910px;
}

.screen .text-wrapper-25 {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
    left: 29px;
    letter-spacing: 0;
    line-height: 21.6px;
    position: absolute;
    top: 92px;
    white-space: nowrap;
}

.screen .text-wrapper-26 {
    color: var(--variable-collection-white);
    font-family: "IBM Plex Sans-SemiBold", Helvetica;
    font-size: 25px;
    font-weight: 600;
    left: 29px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 39px;
    width: 228px;
}

.products{
margin-top: 130px;
}

.collum1{
    left: 29px;
    position: absolute;
}

.collum2{
    margin-left: 500px;
    position: absolute;
}

.product{
color: #fff;
font-family: "IBM Plex Sans-Regular", Helvetica;
font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    padding-top: 20px;
}

.price,.price2,.price3,.price4,.price5,
.price6,.price7,.price8,.price9,.price10,
.price11,.price12,.price13,.price14,.price15{
    font-family: "IBM Plex Sans-Regular", Helvetica;
font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    color: var(--variable-collection-orange);
    position: absolute;
    left: 350px;
    margin-top: -20px;
    
}

</style>
