import DApp from '../config/configuration';

const API = {
  // 购买盲盒
  async buyBlindBox(user,amount1, amount2, deadline, nonce, payType, v, r, s) {

    let {buyBlindBox} = this.meta.methods;
    let {account} = this;

    let res = await buyBlindBox(user,amount1, amount2, deadline, nonce, payType, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },
  // 购买技能
  async BuySkills(user,itemId, amount, deadline, nonce, v, r, s) {

    let {BuySkills} = this.meta.methods;
    let {account} = this;

    let res = await BuySkills(user,itemId, amount, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },
  // 购买道具
  async buyProps(user,itemId, amount, deadline, nonce, v, r, s) {

    let {buyProps} = this.meta.methods;
    let {account} = this;

    let res = await buyProps(user,itemId, amount, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },
  // 批量锻造卡牌
  async cardMintBatch(user,tokenIds, deadline, nonce, v, r, s) {

    let {cardMintBatch} = this.meta.methods;
    let {account} = this;

    let res = await cardMintBatch(user,tokenIds, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },
  // 卡牌兑换道具
  async swapCardsToProps(user,tokenIds, propsId, proTokenIds, deadline, nonce, v, r, s) {

    let {swapCardsToProps} = this.meta.methods;
    let {account} = this;

    let res = await swapCardsToProps(user,tokenIds, propsId, proTokenIds, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },
  // 卡牌兑换技能
  async swapCardsToSkill(user,tokenIds, itemIds, proTokenIds, deadline, nonce, v, r, s) {

    let {swapCardsToSkill} = this.meta.methods;
    let {account} = this;

    let res = await swapCardsToSkill(user,tokenIds, itemIds, proTokenIds, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },
  // 批量锻造卡牌
  async propsMintBatch(user,tokenIds, deadline, nonce, v, r, s) {

    let {propsMintBatch} = this.meta.methods;
    let {account} = this;

    let res = await propsMintBatch(user,tokenIds, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },


}

export default {
  meta: null,
  account: null,
  web3: null,
  networkId: null,
  async init() {
    let obj = await DApp.marketCon();
    let {meta,account, networkId,web3} = obj;
    this.meta = meta;
    this.account = account;
    this.networkId = networkId;
    this.web3 = web3;
    return this;
  },
  ...API
}
