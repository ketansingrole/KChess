import { createStore } from 'vuex'

export default createStore({
    state: {
        analysisBoardData: {
            moveList: [],
            fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
            pgn: "",
        },
    },
    mutations: {
        updateMoveList(state, payload) {
            state.analysisBoardData.moveList = payload;
        },
        updateFen(state, payload) {
            state.analysisBoardData.fen = payload;
        },
        updatePgn(state, payload) {
            state.analysisBoardData.pgn = payload;
        }
    },
    actions: {
    },
    modules: {
    }
})
