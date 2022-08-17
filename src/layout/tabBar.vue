<template>
  <div id="main_page">
    <div class="app-main">
      <router-view />
    </div>
  </div>

</template>

<script>
export default {
  name: "tabBar"
}
</script>

<style lang="scss" scoped>
  #main_page{
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
  }
</style>