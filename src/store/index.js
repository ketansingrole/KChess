import { createStore } from 'vuex'

export default createStore({
    state: {
        analysisBoardHistory: [],
    },
    mutations: {
        updateBoardHistory(state,payload){
            state.analysisBoardHistory = payload;
        }
    },
    actions: {
    },
    modules: {
    }
})
