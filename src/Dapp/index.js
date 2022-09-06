import store from "@/store";
import Web3 from "web3";
import {Toast } from "vant"
// let web3 = new Web3(provider);
// window.web3 = web3;//挂载在window上，方便直接获取


// async function init(){
//     if (typeof window.ethereum !== 'undefined') {
//         let addr=await ethereum.request({
//             method: 'eth_requestAccounts',
//             params: [{
//                 chainId: Web3.utils.numberToHex(128) // 目标链ID
//             }]
//         });//授权连接钱包
//         store.commit("user/SET_ADDRESS", addr[0]);
//     }else{
//         console.log('未安装钱包插件！');
//     }
// }


async function init() {
    //判断用户是否安装MetaMask钱包插件
    if (typeof window.ethereum === "undefined") {
        //没安装MetaMask钱包进行弹框提示
        Toast.fail("请安装MetaMask")
    } else {
        //如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
        ethereum.enable().catch(function(reason) {
                //如果用户拒绝了登录请求
                if (reason === "User rejected provider access") {
                    // 用户拒绝登录后执行语句；
                } else {
                    // 本不该执行到这里，但是真到这里了，说明发生了意外
                    Message.warning("There was a problem signing you in");
                }
            }).then(function(accounts) {
            // 判断是否连接以太

            var id = ethereum.networkVersion
            if (id != '128') {
                ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{
                        chainId: Web3.utils.numberToHex(128) // 目标链ID
                    }]
                });
            }
            store.commit("user/SET_ADDRESS", accounts[0]);
            //这里返回用户钱包地址
            // callback(accounts[0]);
        });
    }
}



async function onAccountChanged(networkId){
    // 当所连接网络ID变化时触发
    ethereum.on("networkChanged", function(id) {
        networkId(id)
        store.commit("user/SET_NETWORKID",id)
        if(id != 128){
            ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: Web3.utils.numberToHex(128) // 目标链ID
                }]
            });
        }
        let addr= ethereum.selectedAddress

        let fromAddress = web3.eth.accounts[0];
        web3.eth.getBalance(addr,(err, res) => {
            if (!err) {
                console.log("ETH余额==",res.toNumber()/Math.pow(10,18));
            }
        })

    });
}

// ethereum.on("chainChanged",(id)=>{
//     // console.log('链切换',id)
//     console.log(web3.fromWei(eth.getBalance(eth.coinbase)))
//
// });
//
//
//
//
// // 当用户选中账号变化时触发
// ethereum.on("accountsChanged", function(addr) {
//     console.log('钱包切换',addr[0])
//
//     store.commit("user/SET_ADDRESS", addr[0]);
//     // window.location.reload();
//
// });

async function getBalance(){
    let addr= ethereum.selectedAddress;
    ethereum.request({
        method: 'eth_getBalance',
        params: [
            addr,
            'latest'
        ]
    })
    .then((result) => {
        console.log("获取余额success--->" + result)
        let formartEther = ethers.utils.formatEther(result);
        console.log(formartEther)
    })
    .catch((error) => {
        console.log("获取余额error--->" + error.code)
    });

}


export default {
    init,
    onAccountChanged,
    getBalance
}