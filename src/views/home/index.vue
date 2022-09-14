<template>
  <div class="home">
    <div class="Men" :class="{'kai' : MenKai}">
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
            {{address}}公告....公告....公告....公告....公告....
        </div>
      </div>

      <div class="reserve btn-bg" @click="reserveShow=true">预约</div>
      <div class="btnKai btn-bg" @click="MenOpen">kai</div>

      <div class="center" :class="{'kai' : MenKai}">
        <img class="kong" src="../../assets/h_center1.png" alt="">
        <img  class="xinxuan" src="../../assets/h_center2.png" alt="">
        <img class="result" src="../../assets/eggs.png">

      </div>


    </div>

    <audio ref="audio" src="https://heco.linkgame.club/upload/2022/08/18/6088_20220818172616A010.mp3"></audio>
    <exch-reserve v-if="reserveShow" @close="reserveShow = false"></exch-reserve>
  </div>
</template>

<script>
import exchReserve from "@/views/home/components/ExchReserve";
import {mapState} from "vuex";
import web3 from "web3"

export default {
  name: "home",
  components:{exchReserve},
  data(){
    return{
      reserveShow:false,
      MenKai:false,
    }
  },
  computed:{
    ...mapState({
      token: state => state.user.token,
      address: state => state.user.address
    })
  },
  watch:{
    token(e){
      console.log(e)
    },
    address(e){
      // console.log(e)
    }
  },
  methods:{
    MenOpen(){
      this.$DApp.onAccountChanged();
      this.$DApp.getBalance()
      this.MenKai = !this.MenKai
      if(this.MenKai){
        this.$refs.audio.play();
      }
    },

  }
}
</script>

<style lang="scss" scoped>

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
    transform: rotateY(180deg);
    transition: all 1S;
  }
  .men-right{
    position: absolute;  z-index: -1;
    right: 10%;top: 0%;
    width: 40%; height: 85%;
    background-image: url("../../assets/men.jpg");
    background-size:100% 100%;
    transition: all 1S;
  }

  .guang{
    position: absolute; z-index: 1;
    width: 20%;
    left: 12%; top: 10%;

    -webkit-animation: rightGuang 7s linear infinite; /* Chrome, Safari, Opera */
    animation: rightGuang 7s linear infinite;
  }
}

.Men.kai{
  .men-left{left: -20%}
  .men-right{right: -20%}
}
.btnKai{
  height: 50px; line-height: 55px;
  width: 150px;
  position: absolute;
  bottom: 20%; left:00%; margin-left: -75px;
  color: #FFF; font-size: 18px; font-weight: bold;
}

.main{
  position:relative; z-index: 2;
  width: 100%; height: 100%;
}

@keyframes rightGuang {
  0%{width: 20%;left: 12%; top: 10%;}
  20%{width: 35%;left: 4%; top: 24%;}

  28%{width: 50%;left: -16%; top: 24%;}
  43%{width: 50%;left: -16%; top: 34%;}

  51%{width: 35%;left: 4%; top: 43%;}
  80%{width: 10%;left: 18%; top: 75%;opacity: 1}
  90%{width: 10%;left: 18%; top: 75%;opacity: 0}
  100%{width: 10%;left: 18%; top: 75%;opacity: 0}
  
}

.reserve{
  height: 50px; line-height: 55px;
  width: 150px;
  position: absolute; z-index: 20;
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

.center{
  position: absolute; z-index: -1; opacity: 0;
  top: 10%; left: 0%;
  height: 400px; width: 100%;
  transform:scale(0.1);
  background-image: url("../../assets/h_center1.png");
  background-size: 400px 400px;
  background-repeat: no-repeat;
  background-position: center;

  transition-delay: 1S;
  -webkit-transition-delay: 1S;
  transition: all 3S;
  -webkit-transition: all 3S;

  .kong{
    position: absolute; z-index: 1;
    top: 0px; left: 50%; margin-left: -200px;
    width: 400px; height: 400px;
    transform: rotate(90deg);
    animation: xuan1 30S linear infinite;
    -webkit-animation: xuan1 30S linear infinite;
    //opacity: 0;
  }

  .xinxuan{
    position: absolute; z-index: -1;
    top: 50%; left: 50%;
    transform: translate(-50% , -50%);
    width: 400px; height: 400px;
    animation: xinxuan 10S linear infinite;
    -webkit-animation: xinxuan 10S linear infinite;

    transition: all 2S;
    -webkit-transition: all 2S;
    transition-delay: 5S;
    -webkit-transition-delay: 5S;

    opacity: 0;
  }
  .result{
    position: absolute; z-index: 3;
    top: 50%; left: 50%;
    transform: translate(-50% , -50%);
    width: 0px; height: 150px;
    object-fit: contain;


    transition: all 3S;
    -webkit-transition: all 3S;
    transition-delay: 2S;
    -webkit-transition-delay: 2S;
  }


}
.center.kai{
  transform:  scale(1);
  opacity: 1;
  .result{ width: 150px; }
  .xinxuan{width: 400px; opacity: 1 }
}



@keyframes xinxuan {
  0%{transform:translate(-50% , -50%) rotate(0deg)}
  100%{transform:translate(-50% , -50%) rotate(360deg)}
}
@keyframes xuan1 {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(-360deg)}
}


</style>