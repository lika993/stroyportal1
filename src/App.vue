<template>
  <div id="app">
    <header class="header">
      <div class="catalog-list" :class="{'catalog-list_active': burgerActive}">
        <div class="container relative">
          <i class="icon-close" @click="toggleMenu">
            <close-icon></close-icon>
          </i>
          <ul class="catalog-list__ul">
            <li class="catalog-list__item">Первый пункт</li>
            <li class="catalog-list__item">Первый пункт</li>
            <li class="catalog-list__item">Первый пункт</li>
            <li class="catalog-list__item">Первый пункт</li>
            <li class="catalog-list__item">Первый пункт</li>
          </ul>
        </div>
      </div>
      <div class="header__top-block">
      <div class="container block_flex block_spcbtwn">
        <div class="block_flex block_vert-center">
          <i class="icon-map">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 6.6909C13 11.2727 7 15.2 7 15.2C7 15.2 1 11.2727 1 6.6909C1 5.12853 1.63214 3.63015 2.75736 2.52539C3.88258 1.42064 5.4087 0.799988 7 0.799988C8.5913 0.799988 10.1174 1.42064 11.2426 2.52539C12.3679 3.63015 13 5.12853 13 6.6909Z" stroke="#708598" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.99988 8.65481C8.10445 8.65481 8.99988 7.77566 8.99988 6.69118C8.99988 5.60669 8.10445 4.72754 6.99988 4.72754C5.89531 4.72754 4.99988 5.60669 4.99988 6.69118C4.99988 7.77566 5.89531 8.65481 6.99988 8.65481Z" stroke="#708598" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </i><span>Волгоградская область</span></div>
          <ul class="header__menu block_flex block_vert-center">
            <li class="header__menu-item"><router-link  to="/tenders">Тендеры</router-link></li>
            <li class="header__menu-item"><router-link to="/contractors">База подрядчиков</router-link></li>
            <li class="header__menu-item"><router-link to="/services">Другие сервисы
              <i class="icon-down">
                <arrow-down-icon></arrow-down-icon>
              </i>
            </router-link></li>
          </ul>
        </div>
      </div>
      <div class="header__main-block">
        <div class="container block_flex">
          <div class="block_flex block_vert-center">
            <logo></logo>
            <button class="button button_burger" @click="toggleMenu">
            <i class="burger-icon" :class="{'open': burgerActive}">
            <span></span>
            <span></span>
            <span></span>
            </i>
            Каталог</button>  
          </div>
          <div class="header__right-block  block_flex  block_right  block_vert-center">
            <vue-simple-suggest class="header__search-box relative"  placeholder="Хочу найти..."
            v-model="chosen" display-attribute="name" value-attribute="name"
            :list="simpleSuggestionList"  type="search"
            :filter-by-query="true">
           <input placeholder="Text here" type="search">
           <i class="icon-search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#708598" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 17.5L13.875 13.875" stroke="#708598" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
           </i>
<!-- Filter by input text to only show the matching results -->
            </vue-simple-suggest>
            <router-link class="button button_list" tag="button" to="/list">
            <i class="list__icon">
            <list-icon></list-icon>
            </i>
            Список</router-link>
            <router-link to="/profile" class="profile">
            <span>A</span>
            </router-link to="/services"> 
          </div>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="container">
        <div v-if="list.filter(function(e) { return e.name === chosen }).length > 0">Выбран {{chosen}}</div>
          <router-view :list="list"></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Logo from './components/Logo.vue'
import sassStyles from './assets/scss/styles.scss'
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Optional CSS
import ListIcon from './components/ListIcon'
import ArrowDownIcon from './components/ArrowDownIcon'
import CloseIcon from './components/CloseIcon'

export default {
  name: 'app',
  components: {
    Logo, VueSimpleSuggest, ListIcon,
    ArrowDownIcon, CloseIcon
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      chosen: '',
      burgerActive: false,
      closeIconShow: false,
      list: [
        {'name': 'Angular'},
        {'name': 'Vue'},
        {'name': 'React'},
        {'name': 'Jquery'},
        {'name': 'CoffeScript'}
      ]
    }
  },
  methods: {
    simpleSuggestionList() {
      return this.list
  },
  toggleMenu(){
    this.burgerActive = !this.burgerActive
  }
}
}
</script>

