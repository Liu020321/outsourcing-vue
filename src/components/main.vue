<template>
  <div>
    <!-- header section start -->
    <div class="header_section">
      <div class="container-fluid header_main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="logo" to="/"><img src="static/images/index/logo.png"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">主界面</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">关于</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/blog">博客</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/features">产品特点</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">联系我们</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">登录</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#"><img src="static/images/index/serach-icon.png"></router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <!-- banner section start -->
      <div class="container-fluid">
        <div class="banner_section layout_padding">
          <h1 class="banner_taital">欢迎 <br>我们的博客</h1>
          <div id="my_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="image_main">
                  <div class="container">
                    <img src="static/images/index/img-1.png" class="image_1">
                    <div class="contact_bt"><a to="/contact">联系我们</a></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="image_main">
                  <div class="container">
                    <img src="../../static/images/index/img-1.png" class="image_1">
                    <div class="contact_bt"><a to="/contact">Contact Us</a></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="image_main">
                  <div class="container">
                    <img src="../../static/images/index/img-1.png" class="image_1">
                    <div class="contact_bt"><a to="/contact">Contact Us</a></div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
              <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- banner section end -->
    </div>
    <!-- header section end -->
    <div class="container">
      <div class="touch_setion">
        <div class="box_main">
          <div class="image_2 active">
            <h4 class="who_text active">Who am i</h4>
          </div>
        </div>
        <div class="box_main">
          <div class="image_3">
            <h4 class="who_text">Get In Touch</h4>
          </div>
        </div>
        <div class="box_main">
          <div class="image_4">
            <h4 class="who_text">Facebook</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- footer section start -->
    <div class="footer_section layout_padding">
      <div class="container">
        <div class="footer_logo"><router-link to="/index"><img
              src="static/images/index/footer-logo.png"></router-link></div>
        <div class="footer_menu">
          <ul>
            <li><router-link to="/">主界面</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
            <li><router-link to="/blog">博客</router-link></li>
            <li><router-link to="/features">产品特点</router-link></li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </div>
        <div class="contact_menu">
          <ul>
            <li><router-link to="#"><img src="static/images/index/call-icon.png"></router-link></li>
            <li><router-link to="#">Call : +86 18731130589</router-link></li>
            <li><router-link to="/blog"><img src="static/images/index/mail-icon.png"></router-link></li>
            <li><router-link to="/features">2101686730@qq.com</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- footer section end -->
    <!-- copyright section start -->
    <div class="copyright_section">
      <div class="container">
        <p class="copyright_text">Copyright 2023 All Right Reserved By.<router-link to="https://html.design"> Free html
            Templates</router-link></p>
      </div>
    </div>
    <!-- copyright section end -->
  </div>
</template>

<script> 
import  '../../static/js/index/jquery.min.js'
import '../../static/js/index/popper.min.js'
import '../../static/js/index/bootstrap.bundle.min.js'
// import '../../static/js/index/plugin.js'
// import '../../static/js/index/custom.js'
//   import 'owl.carousel//dist/owl.carousel.js'
// import 'jquery.fancybox/source/jquery.fancybox.js'

export default {
  name: 'Main',
};
</script>


<style scoped>
@import '../../static/css/index/bootstrap.min.css';
@import '../../static/css/index/style.css';
@import '../../static/css/index/responsive.css';
@import 'owl.carousel/dist/assets/owl.carousel.css';
@import 'owl.carousel/dist/assets/owl.theme.default.css';
@import 'font-awesome/css/font-awesome.css';
@import 'jquery.fancybox/source/jquery.fancybox.css';
</style>