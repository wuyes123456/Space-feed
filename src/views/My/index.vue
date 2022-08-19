<template>
  <div class="my">
    <div class="main-scroll">
        <img class="top" src="../../assets/niao.png">

      <div class="serv box">
        <div class="title btn-bg">资产明细</div>

        <div class="flx">
          <div class="btn btn-bg" @click="rechargeShow =true">充值</div>
          <div class="btn btn-bg" @click="withdrawalShow = true">领取</div>
        </div>
      </div>


      <div class="yqm box">
        <div class="text">我的邀请码</div>
        <div class="icon"></div>
      </div>

      <div class="box bd">
        <div class="inp"><input placeholder="请输入信息" ></div>
        <div class="btn btn-bg">绑定</div>
      </div>

      <div class="box tis">
        <div>上级邀请码：15454454</div>
      </div>

      <div class="box datil">
        <div class="fle">
          <div class="li"> <span>0</span> 一代 </div>
          <div class="li"> <span>0</span> 二代 </div>
          <div class="li"> <span>0</span> 三代 </div>
        </div>
        <div class="bottom">
          <div class="btn btn-bg">详细</div>
          <div class="btn btn-bg">团队详细</div>
        </div>

      </div>

    </div>

    <exch-recharge v-if="rechargeShow" @close="rechargeShow = false"></exch-recharge>

    <exch-withdrawal v-if="withdrawalShow" @close="withdrawalShow = false"></exch-withdrawal>

  </div>
</template>

<script>
import exchRecharge from "@/views/My/components/ExchRecharge";
import exchWithdrawal from "@/views/My/components/ExchWithdrawal";

export default {
  name: "my",
  components:{exchRecharge , exchWithdrawal},
  data(){
    return{
      rechargeShow:false,
      withdrawalShow:false
    }
  }

}
</script>

<style lang="scss" scoped>

.main-scroll{
  width: 100%; box-sizing: border-box;
  height: 100%; padding-top: 50px;
  padding-bottom: 100px; box-sizing: border-box;
  overflow-y: scroll;
}

.top{
  width: 120px; height: 120px;
  display: block;
  margin: 0px auto;
}
.box{
  margin: 15px 15px;
  background: rgba(0,0,0,0.5);
  min-height: 50px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0px rgba(255,255,255,0.6);
}

.serv{
  padding: 10px;
  .title{
    font-size: 16px; line-height: 55px; height: 50px; width: 150px;
    margin-top: 10px;
  }
  .flx{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    .btn{line-height: 45px;height: 40px; width: 100px}
  }

}

.yqm{
  display: flex; padding: 0px 15px;
  .text{flex: 1; line-height: 50px; text-align: left }
  .icon{background: red;width: 40px;height: 40px; margin: 5px}
}

.bd{
  display: flex; padding: 0px 10px;
  .inp{flex:1; margin: 10px 0; height: 30px;
    input{height: 30px;line-height: 30px; border: none;border-radius: 3px; width: 100%; padding:0px 5px;
      background: rgba(255,255,255,0.6);
    }
    input::placeholder{
      color: #EEEEEE;
    }
  }
  .btn{height: 40px; line-height: 45px; margin: 5px 0; width: 80px; margin-left: 30px}

  .bbb{color: #339ad9}
}

.tis{
  line-height: 50px; padding: 0px 15px; text-align: left;
}

.datil{
  padding:15px;

  .fle{
    display: flex; justify-content: space-around;
    .li{
      font-size: 10px;
      span{display: block; color: #eed740; font-size: 30px; text-shadow: 0 0 3px #ff0000 }
    }
  }

  .bottom{
    display: flex; justify-content: space-around; margin-top: 20px;
    .btn{width: 100px;
      height: 40px; line-height: 45px;
    }

  }

}

</style>