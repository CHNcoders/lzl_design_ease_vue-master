import {createStore} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


const state = {
    user: {
        isLogin: !!window.localStorage.getItem('token'),
    }
}


export default createStore({
    state,
    getters,
    mutations,
    actions,
})
