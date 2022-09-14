import {info} from "@/api";

const state = {
    token: "SSSSSS",
    info:[],
    address:"",
    networkId:""
}
const mutations = {
    SET_INFO:(state, token) => {
        state.token = token
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ADDRESS: (state, address) => {
        state.address = address;
    },
    SET_NETWORKID: (state, networkId) => {
        state.networkId = networkId
    },
}
const actions ={
    Login({ commit, state }) {
        var address = state.address;
        console.log(address)
        info(state.address).then(res => {
            console.log(res)
            commit('SET_INFO', res)
        }).catch(err=>{
            console.log(err);
        })

    },
}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}
