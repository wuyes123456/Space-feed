import Web3Init from "../../web3-init";
import { contracts } from '../../config'
Web3Init.url = 'https://127.0.0.1:9545';
import file from './file'
export default {
    MAX_APPROVE : '115792089237316195423570985008687907853269984665640564039457584007913129639935',

    async mkyCoinInit() {
        let {mkyCoin} = file;
        // 正式地址
        // let mkyAddress = '0xd4e9A8a3709e4Bd1C185C85192A62757b82a8cd4'
        // 测试地址
        let mkyAddress = contracts.mkyToken
        let instance = new Web3Init({artifact: mkyCoin, address: mkyAddress})
        let obj = await instance.init();
        return obj
    },

    async scpCoinInit() {
        let {scpCoin} = file;
        let scpAddress = contracts.scpToken
        let instance = new Web3Init({artifact: scpCoin, address: scpAddress})
        let obj = await instance.init();
        return obj
    },

    async hbkCoinInit() {
        let {hbkCoin} = file;
        // 正式地址
        // let hbkAddress = '0x0d3A0F635734d3b9e74418568bE85d7d01388E72'
        // 测试地址
        let hbkAddress = contracts.hbkToken
        let instance = new Web3Init({artifact: hbkCoin, address: hbkAddress})
        let obj = await instance.init();
        return obj
    },

    async hbkyCoinInit() {
        let {hbkyCoin} = file;
        // 正式地址
        // let hbkyAddress = '0x4f123A139c6734B084A0E0088424fc18b9EF9E58'
        // 测试地址
        let hbkyAddress = contracts.hbkyToken
        let instance = new Web3Init({artifact: hbkyCoin, address: hbkyAddress})
        let obj = await instance.init();
        return obj
    },

    async mkyCardCoinInit() {
        let {mkyCardCoin} = file;
        // 正式地址
        // let hbkyAddress = '0x4f123A139c6734B084A0E0088424fc18b9EF9E58'
        // 测试地址
        let mkyCardAddress = contracts.mkyCardToken
        let instance = new Web3Init({artifact: mkyCardCoin, address: mkyCardAddress})
        let obj = await instance.init();
        return obj
    },

    async mkyPropsCoinInit() {
        let {mkyPropsCoin} = file;
        // 正式地址
        // let hbkyAddress = '0x4f123A139c6734B084A0E0088424fc18b9EF9E58'
        // 测试地址
        let mkyPropsAddress = contracts.mkyPropsToken
        let instance = new Web3Init({artifact: mkyPropsCoin, address: mkyPropsAddress})
        let obj = await instance.init();
        return obj
    },

    // 商城合约
    async marketCon() {
      let { marketCon } = file;

      let marketAdd = contracts.marketCon
      let instance = new Web3Init({artifact: marketCon, address: marketAdd})
      let obj = await instance.init();
      return obj
    },
    // 交易大厅合约
    async tradingHallCon() {
      let { tradingHallCon } = file;

      let tradingHallAdd = contracts.tradingHallCon
      let instance = new Web3Init({ artifact: tradingHallCon, address: tradingHallAdd })
      let obj = await instance.init();
      return obj
    }

}
