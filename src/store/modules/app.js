import { getLanguages, getCurrencies } from '@/apis/home'
const app = {
  state: {
    languages: [],
    currencies: []
  },
  mutations: {
    setLanguages (state, languages) {
      state.languages = languages
    },
    setCurrencies (state, currencies) {
      state.currencies = currencies
    }
  },
  actions: {
    getLanguages (context) {
      getLanguages().then(function (data) {
        context.commit('setLanguages', data.data)
      }, err => console.log(err))
    },
    getCurrencies (context) {
      getCurrencies().then(function (data) {
        context.commit('setCurrencies', data.data)
      }, err => console.log(err))
    }
  }
}

export default app
