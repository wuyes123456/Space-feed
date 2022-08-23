import store from "@/store";
import {ethers} from "ethers";

async function init(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);//返回accounts [0]是钱包地址

    console.log(accounts)
}

export default {
    init,
    onAccountChanged
}