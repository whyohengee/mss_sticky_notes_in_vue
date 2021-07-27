import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import noteStore from './modules/noteStore'

export default new Vuex.Store({
   modules: {
      noteStore
   }
})