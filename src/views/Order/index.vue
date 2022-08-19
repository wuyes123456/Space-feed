<template>
  <div class="Order">
    <div class="main-scroll" >

      <div class="title">订单列表</div>

      <div class="box" v-for="(item ,i) in Order" :key="i">
        <div class="hear">
          <div class="time">{{ item.time | DatdIos}}</div>
          <div class="star">待领养</div>
        </div>
        <div class="hr"></div>

        <div class="info">
          <div class="dwonTime">{{ item.date | DateDay }}</div>
          <p class="p">大门开启时间</p>
          <div class="bottom">预约金额：<span>1000</span></div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Order",
  data(){
    return{
      Order:[
        {
          id:0,time:'2022-09-30 00:00:00',endTime:"2022-08-19 16:06:10",
          state:0,price:1000,
        },
        {
          id:0,time:'2022-09-30 00:00:00',endTime:"2022-09-30 00:00:00",
          state:0,price:1000,
        }
      ]
    }
  },
  mounted() {
    this.Disparity();

  },
  methods:{
    Disparity(){
      this.Order.map((item)=>{
        var date = new Date(item.endTime) - new Date()
        item.date = date;
        this.$forceUpdate();
      })
      this.StartDwon();
    },
    StartDwon(){
      setInterval( () =>{
        this.Order.map((item)=>{
          if(item.date > 0){
            item.date = item.date-1000;
          }
          this.$forceUpdate();
        })
      },1000)
    }

  },
  filters:{
    DatdIos(time) {
      var date = time.replace(/\-/g, '/');
      date = 	date.substr(0, 10);
      return date;
    },
    DateDay(date){
      var t = date / 1000

      var d = Tome(t / (24*60*60) )
      var h = Tome(t % 24 / 3600 )
      var m = Tome(t % 3600 / 60);
      var s = Tome(t % 60);

      function Tome (e){
        var t = parseInt(e)

        if(t < 10) return '0'+t

        return t
      }

      var time = d +'日'+ h +'时'+ m+'分'+s+'秒';
      return time;
    }
  }

}
</script>

<style lang="scss" scoped>

  .main-scroll{
    width: 100%; box-sizing: border-box;
    height: calc(100% - 180px);
    margin-top: 80px;
    color: #FFF;
  }
  .title{
    font-size: 20px; margin-bottom: 20px;
  }

  .box{
    margin: 15px 15px;
    background: rgba(0,0,0,0.5);
    min-height: 50px;
    border-radius: 10px;
    box-shadow: 0 0 5px 0px rgba(255,255,255,0.6);
  }

  .hear{
    display: flex; justify-content: space-between;
    line-height: 40px; padding: 0px 30px;

    .star{color: #eed740}
  }
  .hr{
    height: 2px;
    background-image: linear-gradient(to right, transparent,  #4faee7 , transparent);
    -webkit-background-image:linear-gradient(to right, transparent,  #4faee7 , transparent);
  }

  .info{
    padding: 20px;
    .dwonTime{font-size: 20px; color: #FFF;  }
    .p{color: #339ad9; font-size: 13px}
    .bottom{font-size:14px;
      span{color: #eed740}
    }
  }

</style>