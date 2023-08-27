<template>
  <div id="app">
    <div class="box"></div>
    <van-button type="primary">主要按钮</van-button>

    <router-view/>
  </div>
</template>

<style lang="less">
.box {
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>
