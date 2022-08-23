
const state = {
    token: "SSSSSS",
    address:"",
}
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ADDRESS: (state, address) => {
        state.address = address
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
