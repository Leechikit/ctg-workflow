import Vue from 'vue';
import Vuex from 'vuex';

// import * as getters from './getters';
// import * as actions from './actions';
// import mutations from './mutations';
import pannel from './modules/pannel';

Vue.use(Vuex);

const state = {
    
}

export default new Vuex.Store({
    // state,
    // getters,
    // mutations,
    // actions,
    modules:{
        pannel
    }
})