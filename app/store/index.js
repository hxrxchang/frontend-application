import Vue from 'vue'
import Vuex from 'vuex'
import { createModule } from 'vuex-toast'
import article from './modules/article'
import user from './modules/user'
import tag from './modules/tag'
import presentation from './modules/presentation'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    modules: {
      article,
      user,
      tag,
      presentation,
      toast: createModule({
        dismissInterval: 2000
      })
    }
  })
