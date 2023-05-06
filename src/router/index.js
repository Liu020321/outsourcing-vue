import Vue from 'vue'
//导入路由插件
import VueRouter from 'vue-router'

//导入上面自定义好的登录组件
import login from '../components/user/login.vue'
import register from '../components/user/register.vue'
import main from '../components/main.vue'

//安装路由
Vue.use(VueRouter)

//配置路由
export default new VueRouter({
  mode:'history',
  routes: [
    //配置登录路由
    {
      //路由路径
      path: '/login',
      //路由名称
      name: 'login',
      //跳转到路由组件
      component: login
    },
    //配置注册路由
    {
      path:'/register',
      name:'register',
      component:register
    },
    //配置主页路由
    {
      //为空代表默认路由，也就是首页
      path:'',
      name:'main',
      component:main
    },
  ]

})