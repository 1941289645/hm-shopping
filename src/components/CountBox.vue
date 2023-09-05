<template>
  <div class="count-box">
    <button @click='handleSub' class="minus">-</button>
    <input class="inp" type="text" @change="handleChange" :value="value" >
    <button @click='handleAdd' class="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleSub () {
      if (this.value > 1) {
        this.$emit('input', this.value - 1)
      }
    },
    handleChange (e) {
      const val = +e.target.value// 转数字处理（1）数字（2）NaN
      if (isNaN(val) || val < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', Math.floor(val))
    }
  }
}
</script>

<style lang="less" scoped>
.count-box{
  width:100px;
  display:flex;
  .add,.minus{
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .inp{
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}
</style>
