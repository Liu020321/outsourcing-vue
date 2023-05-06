<template>
  <div class="h-100">

    <!-- <div id="preloader">
      <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
        </svg>
      </div>
    </div> -->


    <div class="login-form-bg h-100" id="app">
      <div class="container h-100">
        <div class="row justify-content-center h-100">
          <div class="col-xl-6">
            <div class="form-input-content">
              <div class="card login-form mb-0">
                <div class="card-body pt-5">
                  <router-link to="/" class="text-center" href="index.html">
                    <h4>返回主界面</h4>
                  </router-link>

                  <form class="mt-5 mb-5 login-input">
                    <div class="form-group">
                      <input v-model="user.userName" id="userName" name="userName" type="text" class="form-control"
                        placeholder="用户名">
                    </div>
                    <div class="form-group">
                      <input v-model="user.password" id="password" name="password" type="password" class="form-control"
                        placeholder="密码">
                    </div>
                    <div class="form-check">
                      <input v-model="user.remember" type="checkbox" class="form-check-input" id="remember"
                        name="remember" value="1">
                      <label class="form-check-label" for="remember">记住账号密码</label>
                    </div>

                    <hr class="my-4">

                    <button class="btn login-form__btn submit w-100" type="button" @click="login()">登录</button>
                  </form>
                  <p class="mt-5 login-form__footer">没有账户? <router-link to="/register" class="text-primary">注册</router-link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from'jquery/dist/jquery.min.js'
// // import '../../../static/plugins/common/common.min.js'
// import '../../../static/js/theme/custom.min.js'
// import '../../../static/js/theme/settings.js'
// import '../../../static/js/theme/gleek.js'
// import '../../../static/js/theme/styleSwitcher.js'


export default {

  name: 'Login',
  data() {
    return {
      user: {
        userName: '',
        password: '',
        remember: ''
      },
    }
  },
  methods: {
    login() {
     this.$router.push('/')
    }
  }

}
</script>


<style lang="css" scoped>
@import '../../../static/css/theme/style.css'
</style>