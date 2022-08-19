<template>
  <div class="Team">
    <div class="main-hidden" >
      <div class="meun">
        <div class="li on">团队领养</div>
        <div class="li">团队预约</div>
      </div>
      <div class="main">

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Team",
  data(){
    return{

    }
  },
  mounted() {
  },
  methods:{
  },

}
</script>

<style lang="scss" scoped>

.main-hidden{
  width: 100%; box-sizing: border-box;
  height: calc(100% - 80px);
  margin-top: 80px;
  color: #FFF; overflow: hidden;

  .main{
    height: calc(100% - 40px);
    padding-bottom: 100px;box-sizing: border-box;
  }
}

.meun{
  height: 40px; line-height: 40px; padding: 0px 30px;
  display: flex; justify-content: space-around;
  font-size: 16px;

  .li{position: relative}
  .li:before{
    content: "";

    height: 3px; width: 0px;
    background: #339ad9;
    position: absolute;
    bottom: 0px; left: 50%; border-radius: 3px;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transition: all 1S;
    -webkit-transition: all 1S;
  }
  .li.on:before{
    width: 30px;
  }
}

</style>