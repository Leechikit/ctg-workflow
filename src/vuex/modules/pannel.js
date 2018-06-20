const pannel = {
    namespaced: true,
    state: {
        pannel: {
            isshow: false
        }
    },
    getters: {
        getPannel: state => state.pannel
    },
    mutations: {
        setPannel: (state, pannel) => {
            state.pannel = pannel;
        }
    },
    actions: {

    }
}

export default pannel;