import store from "@/store";

async function login(){
    if (typeof window.ethereum !== 'undefined') {
        let addr=await ethereum.request({ method: 'eth_requestAccounts' });//授权连接钱包

        console.log('用户钱包地址:',addr[0]);
    }else{
        console.log('未安装钱包插件！');
    }
}

async function onAccountChanged(){
    return "231321"
    // console.log("链切换")
    // //监听链网络改变
    // ethereum.on("chainChanged",()=>{
    //     console.log('链切换')
    //     // window.location.reload();
    // });
}

// ethereum.on("accountsChanged", function(accounts) {
//     console.log('钱包切换')
//     window.location.reload();
// });



export default {
    login,
    onAccountChanged
}