import {
  getPromotionHouse,
  getPromotionCity,
  getDestinationHouse,
  getDestinationCity,
  getGlobalHouse,
  getTravelStory,
  getQualityActivity
} from '@/apis/home'
const home = {
  state: {
    promotionHouses: [],
    promotionCities: [],
    destinationHouses: [],
    destinationCities: [],
    globalHouses: [],
    travelStories: [],
    qualityActivities: []
  },
  mutations: {
    setPromotionHouse (state, houses) {
      state.promotionHouses = houses
    },
    setPromotionCity (state, cities) {
      state.promotionCities = cities
    },
    setDestinationHouse (state, houses) {
      state.destinationHouses = houses
    },
    setDestinationCity (state, cities) {
      state.destinationCities = cities
    },
    setGlobalHouse (state, houses) {
      state.globalHouses = houses
    },
    setTravelStory (state, stories) {
      state.travelStories = stories
    },
    setQualityActivity (state, activities) {
      state.qualityActivities = activities
    }
  },
  actions: {
    getPromotionHouse (context) {
      getPromotionHouse().then(data => {
        context.commit('setPromotionHouse', data.data)
      })
    },
    getPromotionCity (context) {
      getPromotionCity().then(data => {
        context.commit('setPromotionCity', data.data)
      })
    },
    getDestinationHouse (context) {
      getDestinationHouse().then(data => {
        context.commit('setDestinationHouse', data.data)
      })
    },
    getDestinationCity (context) {
      getDestinationCity().then(data => {
        context.commit('setDestinationCity', data.data)
      })
    },
    getGlobalHouse (context) {
      getGlobalHouse().then(data => {
        context.commit('setGlobalHouse', data.data)
      })
    },
    getTravelStory (context) {
      getTravelStory().then(data => {
        context.commit('setTravelStory', data.data)
      })
    },
    getQualityActivity (context) {
      getQualityActivity().then(data => {
        context.commit('setQualityActivity', data.data)
      })
    }
  }
}
export default home
