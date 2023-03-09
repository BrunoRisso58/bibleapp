import { createStore } from 'vuex';

const store = createStore({
    state: {
        bookId: 0,
        chapterId: 0
    },
    mutations: {
        setBookId(state, bookId) {
            state.bookId = bookId;
        },
        setChapterId(state, chapterId) {
            state.chapterId = chapterId;
        },
    },
    actions: {
        updateBookId({ commit }, bookId) {
            commit('setBookId', bookId)
        },
        updateChapterId({ commit }, chapterId) {
            commit('setChapterId', chapterId)
        }
    },
    getters: {
        getBookId(state) {
            return state.bookId
        },
        getBookId(state) {
            return state.chapterId
        },
    }
})

export default store