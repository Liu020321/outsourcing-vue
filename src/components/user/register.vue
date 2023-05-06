<template>
  <div>
    <!--*******************
    Preloader start
********************-->
    <div id="preloader">
      <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
        </svg>
      </div>
    </div>
    <!--*******************
    Preloader end
********************-->


    <div class="login-form-bg h-100" id="register">
      <div class="container h-100">
        <div class="row justify-content-center h-100">
          <div class="col-xl-6">
            <div class="form-input-content">
              <div class="card login-form mb-0">
                <div class="card-body pt-5">

                  <router-link to="/" class="text-center" >
                    <h4>返回主界面</h4>
                  </router-link>

                  <form class="mt-5 mb-5 login-input" action="" method="">
                    <div class="form-group">
                      <input v-model="user.userName" id="userName" name="userName" type="text" class="form-control"
                        placeholder="账号" required>
                    </div>

                    <div class="form-group">
                      <input v-model="user.password" id="password" name="password" type="password" class="form-control"
                        placeholder="密码" required>
                    </div>

                    <div class="col-xs-4 mb-3">
                      <select v-model="user.status" id="status" name="status" class="form-select "  required>
                        <option value="">选择用户</option>
                        <option value="1">医生</option>
                        <option value="0">患者</option>
                      </select>
                    </div>


                    <div class="row">
                      <div class="ml-3 form-group">
                        <input v-model="user.checkCode" name="checkCode" type="text" id="checkCode" class="form-control"
                          placeholder="验证码" required>
                      </div>
                      <div class="">
                        <!-- <img id="checkCodeImg" src="/outsourcing/user/checkCode"> -->
                        <!-- <a href="#" id="changeImg" @click="refresh">看不清？</a> -->
                      </div>
                    </div>

                    <hr class="my-4">
                    <button class="btn login-form__btn submit w-100" type="button" @click="register">注册
                    </button>
                  </form>
                  <p class="mt-5 login-form__footer">拥有账号？ <router-link to="/login" class="text-primary">登录</router-link>
                  </p>
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
// import '../../../static/plugins/common/common.min.js'
// import '../../../static/js/theme/custom.min.js'
// import '../../../static/js/theme/settings.js'
// import '../../../static/js/theme/gleek.js'
// import '../../../static/js/theme/styleSwitcher.js'

export default {
  name: 'Register',

  data() {
    return {
      user: {
        userName: '',
        password: '',
        remember: ''
      },
    };
  },
  methods: {

    register() {
      this.$router.push('/login')
    }
  },
};
</script>

<style >
@import '../../../static/css/theme/style.css';
</style>