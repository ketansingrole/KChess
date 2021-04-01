import { createStore } from 'vuex'

export default createStore({
    state: {
        boards: [

            {
                moveList: [],
                fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                pgn: "",
            },
            {

            },
        ]
    },
    mutations: {
        updateMoveList(state, payload) {
            state.boards[0].moveList = payload;
        },
        updateFen(state, payload) {
            state.boards[0].fen = payload;
        },
        updatePgn(state, payload) {
            state.boards[0].pgn = payload;
        }
    },
    actions: {
    },
    modules: {
    }
})
