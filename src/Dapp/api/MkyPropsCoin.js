import DApp from '../config/configuration';
const API = {
    async balanceOf () {
        let {balanceOf} = this.meta.methods;
        let {account} = this;

        let res = await balanceOf(account).call()
        return res
    },

    async getApproved(tokenId) {
        let {getApproved} = this.meta.methods;
        let res = await getApproved(tokenId).call();
        return res;
    },

    async setApprovalForAll(operator, approved = true) {

        let {setApprovalForAll} = this.meta.methods;
        let {account} = this;
        const check = await this.isApprovedForAll(this.account, operator)
        console.log(check)
        if (check === approved) {
            return [true, null]
        }

        let res = await setApprovalForAll(operator, approved).send({ from: account, gas: 500000 });
        return res;
    },

    async setApproval(operator, tokenId) {
        let {approve} = this.meta.methods;
        let {account} = this;
        let res = await approve(operator, tokenId).send({ from: account, gas: 500000 });
        return res;
    },

    async isApprovedForAll(owner, operator) {

        let {isApprovedForAll} = this.meta.methods;

        let res = await isApprovedForAll(owner, operator).call();
        return res;
    },

}

export default {
    meta: null,
    account: null,
    web3: null,
    networkId: null,
    async init() {
        let obj = await DApp.mkyPropsCoinInit();
        let {meta,account, networkId,web3} = obj;
        this.meta = meta;
        this.account = account;
        this.networkId = networkId;
        this.web3 = web3;
        return this;
    },
    ...API
}
