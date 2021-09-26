import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// 4.4.1 版本問題
// http://www.datll.com/ask/article/60.html
// '~/plugins/vue-awesome-swiper',

// 目前做法
// https://bbs.huaweicloud.com/blogs/249517

// "swiper": "^6.6.2",
// "vue-awesome-swiper": "^4.1.1"
// css: ['swiper/swiper-bundle.css',]

// npm install swiper@4.5.1  --save
// npm install vue-awesome-swiper@v3.1.3  --save

Vue.use(VueAwesomeSwiper);

// 加入 lazy 解決

import Swiper2, { Navigation, Pagination, EffectFade, Autoplay, Lazy } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay, Lazy])