import {createStore} from "vuex";
import user from './modules/user'
import kanban from './modules/kanban'

export default createStore({
  modules:{
    user,
    kanban
  }
})
