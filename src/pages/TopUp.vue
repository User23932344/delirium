<template>
    <div class="screen">
        <header class="header">
            <HeaderComponent />
        </header>
        <div class="content">
            <div class="products">
                <h3 class="assortment">Что можно купить</h3>
                <h4 class="course">Курс пополнения 1 PT = 1 рубль</h4>

                <ul class="table">
                    <li class="element">
                        <div class="product">Деньги (5.000)</div>
                        <div class="price">10p</div>
                    </li>
                    <li class="element">
                        <div class="product">Jetpack</div>
                        <div class="price">10.000p</div>
                    </li>
                    <li class="element">
                        <div class="product">Тайник (4 цифры, слабый)</div>
                        <div class="price">150p</div>
                    </li>
                    <li class="element">
                        <div class="product">Малый ваучер (+2.000xp)</div>
                        <div class="price">35p</div>
                    </li>
                    <li class="element">
                        <div class="product">Средний ваучер (+10.000xp)</div>
                        <div class="price">180р</div>
                    </li>
                    <li class="element">
                        <div class="product">Большой ваучер (+50.000xp)</div>
                        <div class="price">360p</div>
                    </li>
                    <li class="element">
                        <div class="product">Мега ваучер (+200.000xp)</div>
                        <div class="price">715p</div>
                    </li>
                    <li class="element">
                        <div class="product">Синий Набор</div>
                        <div class="price">180p</div>
                    </li>
                    <li class="element">
                        <div class="product">Зелёный Набор</div>
                        <div class="price">380p</div>
                    </li>
                    <li class="element">
                        <div class="product">Жёлтый Набор</div>
                        <div class="price">700p</div>
                    </li>
                    <li class="element">
                        <div class="product">Оранжевый Набор</div>
                        <div class="price">1.500p</div>
                    </li>
                    <li class="element">
                        <div class="product">Катализатор</div>
                        <div class="price">100p</div>
                    </li>
                    <li class="element">
                        <div class="product">Премиум "Care" (1 шт на 24ч)</div>
                        <div class="price">12p</div>
                    </li>
                    <li class="element">
                        <div class="product">Премиум "Gain" (1 шт на 24ч)</div>
                        <div class="price">14p</div>
                    </li>
                    <li class="element">
                        <div class="product">Премиум "Mega" (1 шт на 24ч)</div>
                        <div class="price">17p</div>
                    </li>
                </ul>
            </div>
            <div class="topup">
                <h1 class="replenishment">Пополнение счета</h1>
                <input class="input" type="email" placeholder="E-mail">
                <input class="input" type="text" placeholder="Логин">
                <input class="input" type="number" placeholder="Сумма пополнения">
                <label class="check-label">
                    <input class="check" type="checkbox" />
                    <span class="custom-checkbox"></span>
                    <p class="checkp">Я ознакомлен с <a class="check-link" href="#">условиями оферты</a></p>
                </label>
                <button class="btn">Пополнить</button>
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

<style scoped>
@media(max-width:4200px) {
    .screen {
        background-color: #19161D;
        padding-left: 13.3vw;
        min-height: 95vh;
    }

    .header {
        padding-top: 30px;
    }

    .content {
        display: flex;
        margin-top: 40px;
        margin-left: 0.6vw;
        gap: 2vw;
    }

    .products {
        padding-left: 1.5vw;
        background-color: #1C1920;
        border-radius: 10px;
        height: 507px;
        width: 47.4vw;
    }

    .assortment {
        margin-top: 40px;
        font-family: "IBM Plex Sans", Helvetica;
        font-size: 25px;
        color: var(--variable-collection-white);
    }

    .course {
        color: var(--variable-collection-white);
        margin-top: 20px;
        font-family: "IBM Plex Sans", Helvetica;
        font-size: 18px;
        color: var(--variable-collection-white);
    }

    .table {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .element {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20.6vw;
        font-size: 20px;
        font-family: "IBM Plex Sans", Helvetica;
    }

    .product {
        color: var(--variable-collection-white);
    }

    .price {
        justify-items: end;
        color: var(--variable-collection-orange);
    }

    .replenishment {
        color: var(--variable-collection-white);
        font-family: "IBM Plex Sans", Helvetica;
        font-size: 35px;
    }

    .topup {
        display: block;
    }

    .input {
        margin-top: 20px;
        height: 60px;
        width: 23.4vw;
        border-radius: 20px;
        border: none;
        background-color: #201C25;
        color: #858585;
        font-family: "IBM Plex Sans", Helvetica;
        font-size: 18px;
        line-height: 21.6px;
        padding-left: 1.6vw;
    }

    .input[type="number"]::-webkit-outer-spin-button,
    .input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .input[type="number"] {
        appearance: textfield;
        -moz-appearance: textfield;
    }

    .checkp {
        margin-left: 2px;
        color: var(--variable-collection-white);
        font-family: "IBM Plex Sans-Regular", Helvetica;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        white-space: nowrap;
    }

    .check {
        display: none;
    }

    .check-label {
        margin-top: 15px;
        display: flex;
    }

    .custom-checkbox {
        width: 20px;
        height: 20px;
        border: 2px solid var(--variable-collection-orange);
        border-radius: 5px;
        background-color: transparent;
        transition: background 0.3s, border 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        line-height: 1;
        color: white;
        font-weight: bold;
        box-sizing: border-box;
    }

    .check:checked+.custom-checkbox {
        background-color: var(--variable-collection-orange);
        content: "✔";
    }

    .check:checked+.custom-checkbox::after {
        content: "✔";
        line-height: 1;
    }

    .check-link {
        color: var(--variable-collection-orange);
    }

    .check-link:hover {
        color: darkorange;
    }

    .check-link:visited {
        color: orangered;
    }

    .btn{
        margin-top: 33px;
        height: 60px;
        width: 23.4vw;
        border-radius: 20px;
        padding: 14px 1.8vw;
        background-color: var(--variable-collection-orange);
        color: var(--variable-collection-white);
        font-family: "IBM Plex Sans", Helvetica;
        font-size: 22px;
        border: none;
    }
    .btn:active{
        background-color: orangered;
    }

}
</style>
