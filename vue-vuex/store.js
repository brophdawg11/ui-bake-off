import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

/* eslint-disable no-param-reassign */
const mutations = {
    INCREMENT(state) {
        state.count += 1;
    },
    INCREMENT_IF_ODD(state) {
        if (state.count % 2 !== 0) {
            state.count += 1;
        }
    },
    DECREMENT(state) {
        state.count -= 1;
    },
};
/* eslint-enable no-param-reassign */

const actions = {
    INCREMENT_ASYNC({ commit }) {
        setTimeout(() => commit('INCREMENT'), 1000);
    },
};

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createLogger()
    ],
    state: {
        count: 0
    },
    mutations,
    actions,
});

