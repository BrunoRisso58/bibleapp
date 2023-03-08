import { createStore } from 'vuex';

const store = createStore({
    state: {
        bookId: 0
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

export default store


// import { createStore } from "vuex";
// const store = createStore({
//   state() {
//     return {
//       count: 0,
//     };
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//   },
// });

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(store);
//   // Install the store instance as a plugin

// });