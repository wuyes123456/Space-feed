import DApp from '../config/configuration';

const API = {
  // 购买平台卡牌
  async officalCardBuy(user, tokenId,amount1, amount2, deadline, nonce, payType, v, r, s) {

    let {officalCardBuy} = this.meta.methods;
    let {account} = this;

    let res = await officalCardBuy(user, tokenId,amount1, amount2, deadline, nonce, payType, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },
  // 个人上架交易市场
  async personalSell(user, tokenId, proTokenIds, price, deadline, nonce, v, r, s) {

    let {personalSell} = this.meta.methods;
    let {account} = this;

    let res = await personalSell(user, tokenId, proTokenIds, price, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },

  // 个人取回寄售卡牌
  async personalCancel(user, tokenId, deadline, nonce, v, r, s) {

    let {personalCancel} = this.meta.methods;
    let {account} = this;

    let res = await personalCancel(user, tokenId, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },

  // 用户区卡牌购买
  async yongHuCardBuy(user, seller,tokenId,amount,deadline,nonce,v,r,s) {

    let {yongHuCardBuy} = this.meta.methods;
    let {account} = this;

    let res = await yongHuCardBuy(user, seller,tokenId,amount,deadline,nonce,v,r,s).send({ from: account, gas: 500000 });
    return res;
  },

  // 摧毁卡牌
  async destroyCard(user,tokenIds,proTokenIds,deadline,nonce,v,r,s) {

    let {destroyCard} = this.meta.methods;
    let {account} = this;

    let res = await destroyCard(user,tokenIds,proTokenIds,deadline,nonce,v,r,s).send({ from: account, gas: 500000 });
    return res;
  },

  // 合成道具
  async composeItem(user,itemIds,deadline,nonce,v,r,s) {

    let {composeItem} = this.meta.methods;
    let {account} = this;

    let res = await composeItem(user,itemIds,deadline,nonce,v,r,s).send({ from: account, gas: 500000 });
    return res;
  },

  // 个人上架交易市场
  async daoJuUserSell(user, tokenId, price, deadline, nonce, v, r, s) {

    let {daoJuUserSell} = this.meta.methods;
    let {account} = this;

    let res = await daoJuUserSell(user, tokenId, price, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },

  // 个人取回寄售道具
  async daoJuUserCancel(user, tokenId, deadline, nonce, v, r, s) {

    let {daoJuUserCancel} = this.meta.methods;
    let {account} = this;

    let res = await daoJuUserCancel(user, tokenId, deadline, nonce, v, r, s).send({ from: account, gas: 500000 });
    return res;
  },

  // 用户区卡牌购买
  async buyDaoJu(user, seller,tokenId,amount,deadline, nonce, v, r, s) {

    let {buyDaoJu} = this.meta.methods;
    let {account} = this;

    let res = await buyDaoJu(user, seller,tokenId,amount,deadline,nonce,v,r,s).send({ from: account, gas: 500000 });
    return res;
  },

  // 用户区卡牌购买
  async recycleSystem(user,tokenId,proTokenIds,deadline, nonce, v, r, s) {

    let {recycleSystem} = this.meta.methods;
    let {account} = this;

    let res = await recycleSystem(user,tokenId,proTokenIds,deadline,nonce,v,r,s).send({ from: account, gas: 500000 });
    return res;
  },

}

export default {
  meta: null,
  account: null,
  web3: null,
  networkId: null,
  async init() {
    let obj = await DApp.tradingHallCon();
    let {meta, account, networkId, web3} = obj;
    this.meta = meta;
    this.account = account;
    this.networkId = networkId;
    this.web3 = web3;
    return this;
  },
  ...API
}
