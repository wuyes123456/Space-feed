<template>

</template>

<script>
export default {
  name: "index",
  mounted() {
    $.getRegion("/map/sss").then((r) => {
      console.log(r);
    });
    $.getCulture().then((r) => {
      t.msg = r.data.data;
    });
  }
}
</script>

<style scoped>

</style>