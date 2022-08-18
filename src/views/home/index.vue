<template>
  <div class="home">
    <div class="Men"  >
      <div class="menKuang"></div>
      <div class="men-left">
        <img class="guang" src="../../assets/men-guang.png">
      </div>
      <div class="men-right">
        <img class="guang" src="../../assets/men-guang.png">
      </div>
    </div>

    <div class="main">
      <div class="gonggang">
        <van-icon name="bell" />
        <div class="info">
            公告....公告....公告....公告....公告....
        </div>
      </div>
      <div class="reserve btn-bg" @click="reserveShow=true">预约</div>
    </div>


    <exch-reserve v-if="reserveShow" @close="reserveShow = false"></exch-reserve>
  </div>
</template>

<script>
import exchReserve from "@/views/home/components/ExchReserve";
export default {
  name: "home",
  components:{exchReserve},
  data(){
    return{
      reserveShow:false
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100vh; position: relative;
  background-image: url("../../assets/hone-bg.jpg");
  background-size:100% 100%;
}

.Men{
  position: absolute; z-index: 1;
  width: 100%; height: 100%;

  .menKuang{
    position: relative;
    height: 100vh;
    background-image: url("../../assets/men-bg.png");
    background-size:100% 100%;
  }
  .men-left{
    position: absolute;  z-index: -1;
    left: 10%;top: 0%;
    width: 40%; height: 85%;
    background-image: url("../../assets/men.jpg");
    background-size:100% 100%;
    transform: rotateY(180deg)
  }
  .men-right{
    position: absolute;  z-index: -1;
    right: 10%;top: 0%;
    width: 40%; height: 85%;
    background: red;
    background-image: url("../../assets/men.jpg");
    background-size:100% 100%;
  }

  .guang{
    position: absolute; z-index: 1;
    width: 20%;
    left: 12%; top: 10%;

    -webkit-animation: rightGuang 5s linear infinite; /* Chrome, Safari, Opera */
    animation: rightGuang 5s linear infinite;
  }
}

.main{
  position:relative; z-index: 2;
  width: 100%; height: 100%;

}

@keyframes rightGuang {
  0%{width: 20%;left: 12%; top: 10%;}
  30%{width: 35%;left: 4%; top: 24%;}

  40%{width: 50%;left: -16%; top: 24%;}
  60%{width: 50%;left: -16%; top: 34%;}

  70%{width: 35%;left: 4%; top: 43%;}
  100%{width: 10%;left: 18%; top: 75%;}
  
}

.reserve{
  height: 50px; line-height: 55px;
  width: 150px;
  position: absolute;
  bottom: 20%; left:50%; margin-left: -75px;
  color: #FFF; font-size: 18px; font-weight: bold;
}

.gonggang{
  position: absolute;
  top: 10%; left: 10%;
  height: 40px; line-height: 40px;
  width: 80%;
  background: rgba(0 , 0 ,0,0.3);
  display: flex;
  color: #FFF;
  .van-icon{font-size: 20px; line-height: 40px;
    color: #eed740; text-shadow: 0 0 1px #f00;
    padding: 0px 10px;
  }
  .info{flex: 1; text-align: left; font-size: 12px }
}

</style>