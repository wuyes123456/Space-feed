import DApp from '../config/configuration';

const API = {
    async balanceOf () {
        let {balanceOf} = this.meta.methods;
        let {account} = this;

        let res = await balanceOf(account).call()
        return res
    },

    async approve (address, amount) {
        let {approve} = this.meta.methods;
        let {account} = this;

        let res = await approve(address, amount).send({ from: account, gas: 500000 })
        return res
    },


    async transfer(address,count) {

        let {transfer} = this.meta.methods;
        let {account} = this;

        let res = await transfer(address,count).send({ from: account, gas: 500000 });
        return res;
    },

}

export default {
    meta: null,
    account: null,
    web3: null,
    networkId: null,
    async init() {
        let obj = await DApp.mkyCoinInit();
        let {meta,account, networkId,web3} = obj;
        this.meta = meta;
        this.account = account;
        this.networkId = networkId;
        this.web3 = web3;
        return this;
    },
    ...API
}
