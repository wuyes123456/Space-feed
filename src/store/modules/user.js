
const state = {
    token: "SSSSSS",
    address:"",
    networkId:""
}
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ADDRESS: (state, address) => {
        state.address = address
    },
    SET_NETWORKID: (state, networkId) => {
        state.networkId = networkId
    },
}
const actions ={

}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}
