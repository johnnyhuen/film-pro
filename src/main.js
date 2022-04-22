import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createStore } from 'vuex'
import router from './router'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      session: null,
      key: null,
      loginPop: false,
      loggedIn: false,
      info: false,
      films: [
        {
          "_id": "60b50095bceb63114b61b1dd",
          "title": "Star Wars: Episode IV - A New Hope",
          "year": "1977",
          "released": "25 May 1977",
          "runtime": 121,
          "language": "English",
          "genre": "Action, Adventure, Fantasy, Sci-Fi",
          "director": "George Lucas",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
          "_id": "60b500d0bceb63114b61b1de",
          "title": "Star Trek",
          "year": "2009",
          "released": "08 May 2009",
          "runtime": 127,
          "language": "English",
          "genre": "Action, Adventure, Sci-Fi",
          "director": "J.J. Abrams",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
      },
      {
          "_id": "60b50127bceb63114b61b1df",
          "title": "Indiana Jones and the Raiders of the Lost Ark",
          "year": "1981",
          "released": "12 Jun 1981",
          "runtime": 115,
          "language": "English, German, Hebrew, Spanish, Arabic, Nepali",
          "genre": "Action, Adventure",
          "director": "Steven Spielberg",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg"
      },
      {
          "_id": "60bd91b6b1b0d030af499dfb",
          "title": "Star Trek Beyond",
          "year": "2016",
          "released": "22 Jul 2016",
          "runtime": 122,
          "language": "English",
          "genre": "Action, Adventure, Sci-Fi, Thriller",
          "director": "Justin Lin",
          "poster": "https://m.media-amazon.com/images/M/MV5BODgzMTZmMGMtNTM4Ni00ZjIxLWIyYmUtZjcxMDEwMjkxMzQyXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
      },
      {
          "_id": "60bd923db1b0d030af499dfc",
          "title": "Star Wars: Episode III - Revenge of the Sith",
          "year": "2005",
          "released": "19 May 2005",
          "runtime": 140,
          "language": "English",
          "genre": "Action, Adventure, Fantasy, Sci-Fi",
          "director": "George Lucas",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
      },
      {
          "_id": "60bd9293b1b0d030af499dfd",
          "title": "Star Wars: Episode VI - Return of the Jedi",
          "year": "1983",
          "released": "25 May 1983",
          "runtime": 131,
          "language": "English",
          "genre": "Action, Adventure, Fantasy, Sci-Fi",
          "director": "Richard Marquand",
          "poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
          "_id": "60bd92d7b1b0d030af499dfe",
          "title": "Solo: A Star Wars Story",
          "year": "2018",
          "released": "25 May 2018",
          "runtime": 135,
          "language": "English",
          "genre": "Action, Adventure, Sci-Fi",
          "director": "Ron Howard",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg"
      },
      {
          "_id": "60bd930db1b0d030af499dff",
          "title": "Star Wars: Episode VIII - The Last Jedi",
          "year": "2017",
          "released": "15 Dec 2017",
          "runtime": 152,
          "language": "English",
          "genre": "Action, Adventure, Fantasy",
          "director": "Rian Johnson",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
      },
      {
          "_id": "60bd9337b1b0d030af499e00",
          "title": "Rogue One: A Star Wars Story",
          "year": "2016",
          "released": "16 Dec 2016",
          "runtime": 133,
          "language": "English",
          "genre": "Action, Adventure, Sci-Fi",
          "director": "Gareth Edwards",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
      },
      {
          "_id": "60bd936cb1b0d030af499e01",
          "title": "Star Wars: Episode V - The Empire Strikes Back",
          "year": "1980",
          "released": "20 Jun 1980",
          "runtime": 124,
          "language": "English",
          "genre": "Action, Adventure, Fantasy, Sci-Fi",
          "director": "Irvin Kershner",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
          "_id": "60bdaddeb1b0d030af499e02",
          "title": "Harry Potter and the Goblet of Fire",
          "year": "2005",
          "released": "18 Nov 2005",
          "runtime": 157,
          "language": "English, French",
          "genre": "Adventure, Family, Fantasy, Mystery",
          "director": "Mike Newell",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
      },
      {
          "_id": "60bdae0cb1b0d030af499e03",
          "title": "Harry Potter and the Prisoner of Azkaban",
          "year": "2004",
          "released": "04 Jun 2004",
          "runtime": 142,
          "language": "English",
          "genre": "Adventure, Family, Fantasy, Mystery",
          "director": "Alfonso Cuarón",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
      }
      ]
    }
  },
  getters: {
    getFilm (state){
      return state.films
    },
    getFilmId: state => id => {
      return state.films.find(obj=>obj._id == id)
    },
    getSession: state => {
      return state.session
    },
    getLoginPop: state => {
      return state.loginPop
    },
    getInfo: state => {
      return state.info
    },
    getLoggedIn: state => {
      return state.loggedIn
    },
    getKey: state => {
      return state.key
    }
  },
  mutations: {
    updateSession(state, keyRole, key) {
      state.session = keyRole,
      state.key = key,
      state.loggedIn = true
    },
    openLogin(state, value){
      if (value) {
        state.loginPop = true
      } else {
        state.loginPop = false
      }
    },
    openInfo(state, value){
      if (value) {
        state.info = true
      } else {
        state.info = false
      }
    },
    login(state){
      state.loggedIn = true
    },
    logout(state){
      state.loggedIn = false
    }
  }
})


const app = createApp(App)
app.use(router)
app.use(store)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')