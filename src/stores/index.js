import Vue from 'vue'
import Vuex from 'vuex';
import cityReports from './modules/cityReports';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        cityReports: cityReports
    }
});

export default store;