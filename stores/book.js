import { createStore } from 'vuex';

const store = createStore({
    state: {
        bookId: null
    },
    mutations: {
        setBookId(state, bookId) {
            state.bookId = bookId;
        }
    },
    actions: {
        updateBookId({ commit }, bookId) {
            commit('setBookId', bookId)
        }
    },
    getters: {
        getBookId(state) {
            return state.bookId
        }
    }
})
