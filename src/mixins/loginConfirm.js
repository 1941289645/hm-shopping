export default {
  // 此处编写的就是Vue组件实例的 配置项，通过一定的语法，可以直接混入到组件内部
  // data , methods , computed , watch , 生命周期钩子....
  // 注意点：
  // 1. 如果此处 和 组件内，提供了同名的 data 和methods ，那么最终会以组件内部的为准
  // 2. 如果编写了生命周期函数，则mixins中的生命周期函数 和 页面的生命周期函数，会用数组管理，统一执行

  methods: {
    // 根据登录状态，判断是否需要显示登录确认框
    // 1.如果未登录 => 显示确认框 返回true
    // 2.如果已登录 => 啥也不干 返回false
    loginConfirm () {
      // 判断token是否存在
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作哦',
          confirmButtonText: '去登陆',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            // 如果希望跳转到登录=> 登陆后能回跳回来，需要在跳转去携带参数（当前路径地址）
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {
          })
        return true
      }
      return false
    }
  }
}
