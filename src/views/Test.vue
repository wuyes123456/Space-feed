<template>
    <div class="">
      <button @click="get()">连接钱包</button>
    </div>
</template>

<script>
export default {
  name: "Test",
  methods: {
    get() {
      // web3前面必须有window
      const Web3 = require("../common/getWeb3");
      Web3.default.getWeb3().then((res) => {
        window.web3 = res;
        console.log("getWeb3", res);
      });
    }
  },

}
</script>

<style scoped>

</style>