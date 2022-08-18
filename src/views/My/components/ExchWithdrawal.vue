<template>
  <div class="EXchShow" :class="{'show' : show}"  @click="openClose()">

    <div class="Recharge window">
      <div class="tit">输入领取金额</div>

      <input type="number" class="rechNum" placeholder="请输入信息">

      <div class="bottom">
        <div class="btn btn-red">确定</div>
        <div class="btn btn-lan" @click="openClose()" >取消</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ExchRecharge",
  data(){
    return{
      show:true
    }
  },
  methods:{
    openClose(){
      this.show = false;
      setTimeout(()=>{
        this.$emit("close");
      },1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .Recharge{
    background-image: url("../../../assets/open_bg.png") ;
    background-size: 100% 100%;
    min-height:200px;
    width: 320px;
    color: #FFF; text-align: center;
    padding: 30px; box-sizing: border-box;

    .tit{font-size: 18px; margin-bottom: 10px;}
    .rechNum{height: 40px; margin:20px 10px; padding: 0px 15px;border-radius: 3px; border: none;}
    .bottom{
      display: flex; justify-content: space-around;
      .btn{height: 40px; line-height: 45px; width: 100px}
    }
  }
</style>