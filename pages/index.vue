<template>
  <div class="index">

    <!-- --------------------------------------- -->
    <!-- box content -->
    <div class="index-prince-outer">
      <img class="index-prince-bt-sheep" v-lazy="require('@/assets/img/desktop/bt-sheep.png')" alt="sheep">
      <img class="index-prince-bt-starL1" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starL2" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starL3" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starL4" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starL5" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starL6" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starL7" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">

      <img class="index-prince-bt-flower" v-lazy="require('@/assets/img/desktop/bt-flower.png')" alt="flower">
      <img class="index-prince-bt-board" v-lazy="require('@/assets/img/desktop/bt-board.png')" alt="board">
      <img class="index-prince-bt-elephant" v-lazy="require('@/assets/img/desktop/bt-elephant.png')" alt="elephant">
      <img class="index-prince-bt-starR1" v-lazy="require('@/assets/img/desktop/star2.png')" alt="star">
      <img class="index-prince-bt-starR2" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starR3" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starR4" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starR5" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-prince-bt-starR6" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">

      <!-- 小王子的藝想世界 -->
      <boxContent class="index-prince" v-lazy:background-image="require('@/assets/img/index/prince-star.png')">
        
        <div class="index-prince-man-box">
          <div class="index-prince-moon"></div>
          <!-- <img class="index-prince-moon"
            v-lazy="require('@/assets/img/index/prince-moon.png')" alt="moon"
          > -->
        </div>
        
        
        <div class="index-prince-bg"></div>
        <img class="wow animate__fadeInTopLeft index-prince-man"
          data-wow-duration="4.5s"
          data-wow-delay="0s"
          data-wow-iteration="1"
          v-lazy="require('@/assets/img/index/prince-bird.png')" alt="bird"
        >
        <img class="index-prince-title" v-lazy="require('@/assets/img/index/title-anniversary.png')" alt="anniversary">
        <img class="wow animate__fadeIn index-prince-star1"
          data-wow-duration="2.5s"
          data-wow-delay="2.4s"
          data-wow-iteration="infinite"
          v-lazy="require('@/assets/img/desktop/star.png')" alt="star"
        >
        <img class="wow animate__fadeIn index-prince-star2"
          data-wow-duration="3.5s"
          data-wow-delay="2.7s"
          data-wow-iteration="infinite"
          v-lazy="require('@/assets/img/desktop/star.png')" alt="star"
        >
        <img class="wow animate__fadeIn index-prince-star3"
          data-wow-duration="5.5s"
          data-wow-delay="3s"
          data-wow-iteration="infinite"
          v-lazy="require('@/assets/img/desktop/star.png')" alt="star"
        >
        <div>
          <img class="index-prince-exhi" v-lazy="require('@/assets/img/index/prince-exhibition.png')" alt="exhibition">
        </div>

        <div class="index-prince-box">
          <img @click="scrollEvent('ticketInfo')" class="index-prince-intro1" v-lazy="require('@/assets/img/index/star-ticket.png')" alt="ticket">
          <router-link :to="'/art'">
            <img class="index-prince-intro2" v-lazy="require('@/assets/img/index/star-art.png')" alt="art">
          </router-link>
        </div>
        <img @click="scrollEvent('exIntro')" class="index-prince-intro3" v-lazy="require('@/assets/img/index/star-exhibition.png')" alt="exhibition">
      </boxContent>

      <!-- 最新消息 -->
      <boxContent class="index-news">
        <div class="index-news-bg" v-lazy:background-image="require('@/assets/img/index/news-papper.png')">
          <img class="index-news-head-hat" v-lazy="require('@/assets/img/index/news-hat.png')" alt="hat">
          <div class="index-news-head-box">
            <img class="index-news-head-title" v-lazy="require('@/assets/img/index/title-news.png')" alt="hat">
            <a href="https://www.facebook.com/LePetitPrince.75tw" target="facebook">
              <img class="index-news-fb" v-lazy="require('@/assets/img/index/news-fb.png')" alt="hat">
            </a>
          </div>
          <div class="index-news-text">早鳥優惠價280元限時優惠（原價350元/張），即日起至10/31止，全檔期唯一最低單價票種，暢遊5大劇場情境式展區，完整走入小王子的世界！</div>
        </div>
      </boxContent>

      <!-- 故事翻頁 -->
      <boxContent class="index-book">
        <img class="index-book-title"
          data-aos="fade-in" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-in-sine" v-lazy="require('@/assets/img/index/title-prince.png')"
          alt="prince"
        >
        <div class="index-book-desc">
          #尋找 找到你心中的小王子<br>
          " All grown-ups were children first. (But few of them remember it.) "<br>
          問題不在於長大，在於你忘了自己曾是個小孩。
        </div>
        <!-- 缺文字 img -->

        <div class="index-book-rotate" v-lazy:background-image="require('@/assets/img/index/book-filp.png')">
          <img @click="selectMark(1)" v-if="!isSelectMark.one" src="@/assets/img/index/bookmark1.png" class="index-book-mark index-book-mark1" alt="bookmark">
          <img v-else class="index-book-mark index-book-mark1" src="@/assets/img/index/bookmark1-select.png" alt="bookmark">
          <img @click="selectMark(2)" v-if="!isSelectMark.two" class="index-book-mark index-book-mark2" src="@/assets/img/index/bookmark2.png" alt="bookmark">
          <img v-else class="index-book-mark index-book-mark2" src="@/assets/img/index/bookmark2-select.png" alt="bookmark">
          <img @click="selectMark(3)" v-if="!isSelectMark.three" class="index-book-mark index-book-mark3" src="@/assets/img/index/bookmark3.png" alt="bookmark">
          <img v-else class="index-book-mark index-book-mark3" src="@/assets/img/index/bookmark3-select.png" alt="bookmark">
          <img @click="selectMark(4)" v-if="!isSelectMark.four" class="index-book-mark index-book-mark4" src="@/assets/img/index/bookmark4.png" alt="bookmark">
          <img v-else class="index-book-mark index-book-mark4" src="@/assets/img/index/bookmark4-select.png" alt="bookmark">
          <img @click="selectMark(5)" v-if="!isSelectMark.five" class="index-book-mark index-book-mark5" src="@/assets/img/index/bookmark5.png" alt="bookmark">
          <img v-else class="index-book-mark index-book-mark5" src="@/assets/img/index/bookmark5-select.png" alt="bookmark">
          <img @click="selectMark(6)" v-if="!isSelectMark.six" class="index-book-mark index-book-mark6" src="@/assets/img/index/bookmark6.png" alt="bookmark">
          <img v-else class="index-book-mark index-book-mark6" src="@/assets/img/index/bookmark6-select.png" alt="bookmark">
          <!-- swiper -->
          <swiper class="swiper index-book-swiper" :options="swiperOptionBook" ref="mySwiperBook">
            <swiper-slide v-for="(book, index) in books"
              :key="`${index}book`"
            >
              <div v-if="book.switch" class="index-book-slide-box">
                <img class="index-book-img" v-lazy="require(`@/assets/img/index/bookImg${book.img}.png`)"  alt="prince">
                <div class="index-book-head">{{ book.title }}</div>
                <div v-html="book.text" class="index-book-text">"</div>
                <img v-if="book.isTwo" @click="book.switch = false" class="index-book-btn" v-lazy="require(`@/assets/img/index/book-btn.png`)"  alt="btn">
              </div>
              <div v-else class="index-book-slide-box">
                <img class="index-book-img" v-lazy="require(`@/assets/img/index/bookImg${book.img2}.png`)"  alt="prince">
                <div class="index-book-head">{{ book.title2 }}</div>
                <div v-html="book.text2" class="index-book-text">"</div>
                <img @click="book.switch = true" class="index-book-btn" v-lazy="require(`@/assets/img/index/book-btn.png`)"  alt="btn">
              </div>
            </swiper-slide>
          </swiper>
              
        </div>

      </boxContent>

      <!-- 藝術家介紹 -->
      <boxContent class="index-art">
        <div class="index-art-head-box">
          <img class="index-art-head" v-lazy="require('@/assets/img/index/title-artist.png')" alt="artist">
          <img class="wow animate__flipInX index-art-intro"
            data-wow-duration="1.5s"
            data-wow-delay="0s"
            data-wow-iteration="1"
            v-lazy="require('@/assets/img/index/art-intro.png')" alt="intro"
          >
        </div>
        <div class="index-art-text">邀集國內外藝術家以全新視角詮釋，從視覺藝術到驚喜引導的故事人聲、量身定做的展場原聲音樂環繞，透過奇幻氛圍的劇場空間與沈浸式互動投影聯手，和小王子一起來趟暖心療癒的星球旅行吧！</div>
        <div class="index-art-rotate">
          <!-- 等上面完成，一次做輪播 -->
          <swiper class="swiper index-art-swiper" :options="swiperOptionArt" ref="mySwiperArt">
            <swiper-slide v-for="(artist, index) in artists"
              :key="`${index}art`"
              class="index-art-slide"
            >
              <router-link :to="'/art'">
                <img class="index-art-artist" v-lazy="require(`@/assets/img/index/artist${artist.art}.png`)" alt="artist1">
                <div class="index-art-name">
                  <div>{{ artist.name }}｜</div>
                  <div class="index-art-title">{{ artist.title }}</div>
                </div>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
        <div class="index-art-line"></div>
        <img ref="exIntro" class="index-art-img"
          data-aos="fade-in" data-aos-delay="700" data-aos-duration="800" data-aos-easing="ease-in-sine"
          v-lazy="require('@/assets/img/index/intro-img.png')" alt="intro"
        >
      </boxContent>


    </div>
    


    <!-- --------------------------------------- -->
    <div class="index-exhi-outer">

      <img class="index-exhi-skin-moon" v-lazy="require('@/assets/img/desktop/skin-moon.png')" alt="moon">
      <img class="index-exhi-skin-star" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-exhi-skin-sun" v-lazy="require('@/assets/img/desktop/skin-sun.png')" alt="sun">
      
      <boxContent class="index-exhi">
        <div class="index-exhi-text">邀請喜愛小王子的鐵粉以及新朋友們一同家人全新展覽體驗；不再只是「看」展覽，而是跟著小王子穿越75個年頭，回到相遇的原點，一起展開星球旅行！請戴上登機手環與準備好一台互動的智慧型手機，即將於12.29～2022.4.6，在台北華山1914文創園區西一西二館啟程出發！</div>
      </boxContent>
    
    <!-- 章節 -->
      <boxContent class="index-chapter">
        <!-- data driven -->
        <div v-for="(chapter, index) in chapterContent"
          :key="index"
        >
          <div @click="isShowChapter[chapter.num] = !isShowChapter[chapter.num]" class="index-chapter-head-box">
            <!-- 左 -->
            <div class="index-chapter-head-left">
              <img class="index-chapter-chapter" v-lazy="require(`@/assets/img/index/chapter${index+1}.png`)" alt="intro">
              <div>
                <div class="index-chapter-title">{{ chapter.title }}</div>
                <div class="index-chapter-tag">{{ chapter.tag }}</div>
              </div>
            </div>
            <!-- 右 -->
            <img
              :class="['index-chapter-arrow', {'index-chapter-arrow-reverse': isShowChapter[chapter.num]}]"
              v-lazy="require('@/assets/img/index/swiper-icon.png')" alt="intro"
            >
          </div>
          <div v-show="isShowChapter[chapter.num]" class="index-chapter-box">
            <img class="index-chapter-img" v-lazy="require(`@/assets/img/index/ch${index+1}.png`)" alt="intro">
            <div v-html="chapter.text" class="index-chapter-text"></div>
          </div>
          <div class="index-chapter-line"></div>

        </div>

        <div class="index-chapter-head-box">
          <div class="index-chapter-head-left">
            <img class="index-chapter-chapter" v-lazy="require('@/assets/img/index/chapter-gallery.png')" alt="intro">
              <div class="index-chapter-title"></div>
          </div>
        </div>
        <div class="index-chapter-gallery">

          <swiper class="swiper index-gallery-swiper" :options="swiperOptionGallery" ref="mySwiperGallery">
            <swiper-slide v-for="(plaza, index) in plazas"
              :key="`${index}plaza`"
            >
              <img class="index-chapter-gallery-img" v-lazy="require(`@/assets/img/index/plaza${plaza.img}.jpg`)" alt="intro">
            </swiper-slide>
          </swiper>
          <div class="index-chapter-gallery-page">
            <div :class="['index-chapter-gallery-page-dot', {'index-chapter-gallery-page-select': plazas[index].selected}]"
             v-for="(plaza, index) in plazas"
             :key="index"
             @click="selectGallery(index)"
            ></div>
          </div>
          
        </div>
      </boxContent>

    </div>

   
   <!-- --------------------------------------- -->
    <div ref="ticketInfo" class="index-ticket-outer">
      <img class="index-ticket-white-sun" v-lazy="require('@/assets/img/desktop/white-sun.png')" alt="sun">
      <img class="index-ticket-white-fox" v-lazy="require('@/assets/img/desktop/white-fox.png')" alt="fox">
      <img class="index-ticket-white-prince" v-lazy="require('@/assets/img/desktop/white-prince.png')" alt="prince">
      <img class="index-ticket-white-flower" v-lazy="require('@/assets/img/desktop/white-flower.png')" alt="flower">
      <img class="index-ticket-white-sun2" v-lazy="require('@/assets/img/desktop/white-sun.png')" alt="flower">



    <!-- 購票資訊 -->
      <boxContent class="index-ticket">
        <img class="wow animate__fadeInLeft index-ticket-title"
          data-wow-duration="1.5s"
          data-wow-delay="0s"
          data-wow-iteration="1"
          v-lazy="require('@/assets/img/index/title-buy.png')" alt="info"
        >
        <img class="wow animate__zoomInDown index-ticket-airplane"
          data-wow-duration="1.5s"
          data-wow-delay="0s"
          data-wow-iteration="1"
          v-lazy="require('@/assets/img/index/ticket-airplane.png')" alt="airplane"
        >
        <div class="index-ticket-sub">
          欲前往「小王子的藝想世界」前，請特別留意以下事項：<br>
          1. 同一筆訂單需一同登機，如須分開入場，請分開下訂。<br>
          2. 請務必於展覽期間，逾期視同作廢，超過2022年4月6日後，小王子就會回去自己的星球囉！<br>
          3. 這裡與合作通路各有不同的登機方式，請挑選最適合你的吧～<br><br>
          為能達成控管入場人流與最佳觀展品質，將於「開展前一個月」開放提供參觀時段預約連結。於入場時配合防疫措施，完成實聯制並進行消毒雙手及測量體溫（現場將備有消毒酒精），並且記得參觀時應全程佩戴口罩喔！
        
        </div>
        <img class="index-ticket-land" v-lazy="require('@/assets/img/index/ticket-land.png')" alt="airplane">

        <div class="index-ticket-box">
          <div class="index-ticket-head-box">
            <img class="index-ticket-head-fox" v-lazy="require('@/assets/img/index/ticket-fox.png')" alt="airplane">
            <div class="index-ticket-head">基本票</div>
          </div>
          <div class="index-ticket-line"></div>

          <!-- 票種 -->
          <div target="_blank" v-for="(ticket, index) in ticketInfo"
            :key="index"
            class="index-ticket-row-box"
          >
            <a :href="`${ticket.href}`" class="index-ticket-row">
              <div class="index-ticket-type" v-lazy:background-image="require('@/assets/img/index/ticket-post.png')">{{ ticket.type }}</div>
              <div class="index-ticket-desc">
                <div v-if="ticket.money" class="index-ticket-desc-name">
                  <span class="index-ticket-desc-name-big">{{ ticket.money }}</span>
                  {{ ticket.paper }}
                </div>
                <div v-html="ticket.text" class="index-ticket-desc-text"></div>
              </div>
            </a>
            <div class="index-ticket-line"></div>
          </div>

          <div class="index-ticket-hint">＼ 你也可以在以下平台購買 ／</div>
          <div class="index-ticket-place-left">
            <a href="https://weiyunchangart.kktix.cc/events/b42fb9f3" target="_blank">
              <img class="index-ticket-place" v-lazy="require('@/assets/img/index/outsell-kktix.png')" alt="kktix">
            </a>
            <a href="https://www.kkday.com/zh-tw/product/123126" target="_blank">
              <img class="index-ticket-place" v-lazy="require('@/assets/img/index/outsell-kkday.png')" alt="kkday">
            </a>
            
            <a href="https://tickets.books.com.tw/progshow/08010201555203" target="_blank">
              <img class="index-ticket-place" v-lazy="require('@/assets/img/index/outsell-book.png')" alt="kkday">
            </a>
          </div>
          <div class="index-ticket-place-right">
            <a href="https://www.pchometravel.com/ticket/V921007202109250005/the-fantasy-world-of-le-petit-prince" target="_blank">
              <img class="index-ticket-place" v-lazy="require('@/assets/img/index/outsell-pchome-travel.png')" alt="book">
            </a>
            <a href="https://24h.pchome.com.tw/prod/DXAP2E-A900BT8TH" target="_blank">
              <img class="index-ticket-place" v-lazy="require('@/assets/img/index/outsell-pchome.png')" alt="pchome">
            </a>
            <a href="" target="_blank">
              <img class="index-ticket-place" v-lazy="require('@/assets/img/index/outsell-klook.png')" alt="klook">
            </a>
          </div>
          
        </div>
      </boxContent>
    </div>
    
    
    <!-- --------------------------------------- -->
    <div class="index-store-outer">
      <img class="index-store-bb-star1" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-store-bb-star2" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-store-bb-elephant" v-lazy="require('@/assets/img/desktop/bb-elephant.png')" alt="elephant">
      <img class="index-store-bb-tree1" v-lazy="require('@/assets/img/desktop/bb-tree1.png')" alt="tree">

      
      <img class="index-store-bb-star3" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-store-bb-star4" v-lazy="require('@/assets/img/desktop/star.png')" alt="star">
      <img class="index-store-bb-tree2" v-lazy="require('@/assets/img/desktop/bb-tree2.png')" alt="tree">


      <!-- 小王子商店 -->
      <boxContent class="index-store">
        <img class="index-store-tree"
          data-aos="fade-in" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-sine"
          v-lazy="require('@/assets/img/index/store-tree.png')" alt="tree"
          >
        <img class="index-store-title" v-lazy="require('@/assets/img/index/title-store.png')" alt="store">

        <div class="index-store-tab-box">
          <div class="index-store-tab">tab01</div>
          <div class="index-store-tab">tab02</div>
          <div class="index-store-tab">tab03</div>
          <div class="index-store-tab">tab04</div>
        </div>

        <!-- 輪播 -->

        <!--  -->

        <div class="index-store-go-box">
          <div class="index-store-go">前往商店</div>
        </div>
        
        <img class="index-store-land" v-lazy="require('@/assets/img/index/sponsor-img.png')" alt="sponsor">


        <!-- 協力單位 -->

        <div class="index-sponsor">
          <div class="index-sponsor-title">協力單位</div>

          <div class="index-sponsor-rotate">
            <!-- 輪播 -->輪播
          </div>
        </div>
      

        <!-- footer -->
        <div class="index-footer">

          <div class="index-footer-outer-box">
            <div class="index-footer-box">
              <div>
                <div class="index-footer-text">主辦單位｜為美學有限公司</div>
                <div class="index-footer-text">協同策展｜群眾自造股份有限公司</div>
                <div class="index-footer-text">授權單位｜薩摩亞商羚邦亞洲有限公司</div>
              </div>
              <div>
                <div class="index-footer-text">行銷團隊｜大宇宙情報股份有限公司</div>
                <div class="index-footer-text">行銷顧問｜貝殼放大股份有限公司</div>
                <div class="index-footer-text">商品開發｜可蘿國際股份有限公司</div>
              </div>
            </div>

            <div class="index-footer-social-box">
              <a href="https://www.facebook.com/LePetitPrince.75tw" target="facebook">
                <img class="index-footer-social" v-lazy="require('@/assets/img/index/social-fb.png')" alt="sponsor">
              </a>
              <a href="https://www.instagram.com/le_petit_prince75th_tw" target="_blank">
                <img class="index-footer-social" v-lazy="require('@/assets/img/index/social-ig.png')" alt="instagram">
              </a>
              <a href="mailto:service@weiyunchang.com" target="_blank">
                <img class="index-footer-social" v-lazy="require('@/assets/img/index/social-email.png')" alt="mail">
              </a>
            </div>
          </div>

          <div class="index-footer-copyright">
            <img class="index-footer-copyright-img" v-lazy="require('@/assets/img/index/copyright.png')" alt="copyright">
          </div>

        </div>
        


      </boxContent>

    </div>

    <!-- sidebar -->

    <div class="index-side">
      <div class="index-side-box">
        <div v-html="runtime" class="index-side-text">
          <br>
          
        </div>
      </div>
    </div>



  </div>
</template>

<script>

if (process.browser) { // Here we introduce... According to the environment wow.js
  var {WOW} = require('wowjs')
}

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VanillaTilt from 'vanilla-tilt';

export default {
  head: {
    title: '小王子的藝想世界 75 周年特展',
  },
  layout: 'default',
  components: {
    Swiper,
    SwiperSlide,
    boxContent: require('~/components/common/box-content.vue').default,
  },
  props: {

  },
  data () {
    return {
      runtime: '',
      screenWidth: null,
      swiperOptionBook: {
        slidesPerView: 1,
        spaceBetween: 0,
        lazy: true,
        effect: "coverflow",
        grabCursor: true,
        coverflowEffect: {
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
      swiperOptionArt: {
        slidesPerView: 1,
        initialSlide: 1,
        spaceBetween: -138,
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOptionGallery: {
        slidesPerView: 1,
        spaceBetween: 30,
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      books: [
        {
          switch: true,
          isTwo: false,
          img: '1',
          title: 'I. 遇見小王子',
          text: '遇見小王子＃尋找<br>我會住在其中的一顆星星上面，在某一顆星星上微笑著，每當夜晚你仰望星空的時候，就會像是看到所有的星星都在微笑一般。<br>In one of the stars I shall be living. In one of them I shall be laughing. And so it will be as if all the stars were laughing, when you look at the sky at night… You – only you – will have stars that can laugh…',
          img2: '',
          title2: '',
          text2: '',
        },
        {
          switch: true,
          isTwo: false,
          img: '2',
          title: 'II. 旅程的起點',
          text: 'B612 唯一的玫瑰＃選擇<br>如果我想要和蝴蝶做朋友的話，就得要能忍受毛毛蟲。他們看上去都很美麗。<br>Well, I must endure the presence of two or three caterpillars if I wish to become acquainted with the butterflies. It seems that they are very beautiful.',
          img2: '',
          title2: '',
          text2: '',
        },
        {
          switch: true,
          isTwo: true,
          img: '3',
          title: '國王與自負的人',
          text: 'B325行星：國王＃探索<br>權威首先應當是合情合理的。如果你要求你的百姓去投海，他們就會起來革命。我之所以有權要求大家服從我，是因為我的命令都是合理的。<br>Accepted authority rests first of all on reason. If you ordered your people to go and throw themselves into the sea, they would rise up in revolution. I have the right to require obedience because my orders are reasonable.',
          img2: '32',
          title2: '國王與自負的人',
          text2: 'B326行星：自負的人＃探索<br>崇拜就是你覺得我是這星球上最帥、穿得最漂亮，最有錢，也最聰明的人。<br>To admire mean that you regard me as the handsomet, the best-dressed, the richest, and the most intelligent men on this planet.',
        },
        {
          switch: true,
          isTwo: true,
          img: '4',
          title: '酒鬼與商人',
          text: 'B327行星：酒鬼＃探索<br>我在喝酒。為了忘卻。忘卻我的羞愧。因為喝酒而羞愧！<br>I am drinking. So that I may forget. Forget that I am ashamed. Ashamed of drinking.',
          img2: '42',
          title2: '酒鬼與商人',
          text2: 'B328行星：商人＃探索<br>小的金色的東西，那些讓懶人們遊手好閒做夢的東西。我呢，我就只關心正經事。我的生活裡根本沒有遊手好閒做夢的時間。<br>Little glittering objects that set lazy men to idle dreaming. As for me, I am concerned with matters of consequence. There is no time for idle dreaming in my life.',
        },
        {
          switch: true,
          isTwo: true,
          img: '5',
          title: '點燈人與地理學家',
          text: 'B329行星：點燈人＃探索<br>我接手了一份苦差事。我在清晨熄滅路燈，晚上再把他點亮。白天可以休息，晚上就能睡覺。但現在這個星球一年比一年轉得快，而命令卻一點都沒變！I follow a terible profession. I put the lamp out in the morning, and in the evening I lighted it again. Then — the planet now makes a complete turn every minute, and I no longer have a single second for repose. Once every minute I have to light my lamp and put it out!',
          img2: '52',
          title2: '點燈人與地理學家',
          text2: 'B330行星：地理學家＃探索<br>地理書，是所有的書裡最嚴肅的書，從來都不會過時。一座山基本不會變化他的位置，海洋也不會乾涸。我們寫的都是長久的事物。<br>Geographies, are the books which, of all books, are most concerned with matters of consequence. They never become old-fashioned. It is very quickly that a mountain changes its position. It is very rarely that an ocean empties itselfof its waters. We write of eternal things.',
        },
        {
          switch: true,
          isTwo: false,
          img: '6',
          title: '落日與星空',
          text: '落日與星空＃道別<br>只有用心才能看清楚，真正重要的東西用眼睛是看不見的。<br>It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
          img2: '',
          title2: '',
          text2: '',
        },
      ],
      tempGallery: null,
      tempBook: null,
      plazas: [
        { img: 1, selected: true },
        { img: 2, selected: false },
        { img: 3, selected: false }
      ],
      isSelectMark: {
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
      },
      artists:[
        { art: 1, name: '呂志文', title: '藝術家' },
        { art: 2, name: '張嘉穎', title: '藝術家'  },
        { art: 3, name: '蔡景康', title: '藝術家'  },
        { art: 4, name: '何佳樺', title: '音樂家'  },
        { art: 5, name: '半隻羊立體書實驗室', title: '立體紙藝'  }
      ],
      isShowChapter: {
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
      },
      chapterContent: [
        {
          num: 'one',
          title: 'START｜日出/遇見小王子',
          tag: '＃相遇',
          img: '',
          text: `
            戴上飛行手環、開啟機艙門，踏入安東尼與小王子初次相見的沙漠中。<br>
            劇場式的場景中，滿佈經典小王子手稿、書籍封面、歷年跨界合作創作，一頁頁散落日記般的手稿，逐步引導走入小王子的宇宙。
          `
        },
        {
          num: 'two',
          title: 'B-612｜旅程的起點',
          tag: '＃選擇',
          img: '',
          text: `
            一段專屬於你的旅程起點從這裡開啟。<br>
            小王子的星球B-612上，有兩座火山和1朵美麗的玫瑰花。你想前往哪個星球呢？讓玫瑰為你指引方向！
          `
        },
        {
          num: 'three',
          title: 'SIX PLANETS｜六個星球的探索',
          tag: '＃探索',
          img: '',
          text: `
            探訪小王子的星球B-612後，跟隨小王子的腳步拜訪六顆不同個性的星球，結合視覺、聽覺與體感的聲光效果，在藝術家的創作詮釋寓意之下，展開一趟奇幻而深刻的星際之旅。
          `
        },
        {
          num: 'four',
          title: 'SALUT｜再見/落日與星空',
          tag: '＃道別',
          img: '',
          text: `
            降落地球，相遇——第44次日落，學會說再見<br>
            透過地理學家推薦，小王子決定來拜訪地球。這個與B-612大小相差甚多，且生機勃勃的星球，展開一連串相遇，得到成長與體悟，最後，學會說再見⋯⋯。
          `
        },
        {
          num: 'five',
          title: 'ROSE GARDEN｜玫瑰花園',
          tag: '＃追尋',
          img: '',
          text: `
            小王子決定回到他的星球，留在地球上的我們是不是也找到自己的那一顆星了呢？<br>
            小王子在地球上發現的「玫瑰花園」作為商品區，特別企劃小王子75周年限定與精選授權商品，並開放非購票觀眾於防疫規範下自由入場。
          `
        },
      ],
      ticketInfo: [
        {
          href: 'javascript:void(0);',
          type: '全票',
          paper: '元/張',
          money: '280',
          text: `早鳥優惠期間 280 元/張（原價 350 元/張）<br>適用於一般身份成人。`,
        },
        {
          href: 'javascript:void(0);',
          type: '親子票',
          paper: '元/2張',
          money: '500',
          text: `
            ● 1張全票＋1張國小以下兒童票<br>
            1. 適用於一位成人、陪伴一位4歲（含）～12歲（含）以下國小生。<br>
            2. 使用親子票時，需同時入場，並出示有效身份證明文件。*提醒：現場未帶證件需補足「學生票」差額（即全票＋學生票=670元）
          `,
        },
        {
          href: 'javascript:void(0);',
          type: '團體票',
          paper: '元/張',
          money: '300',
          text: `
            1. 單次購買限定為40張（含）以上團體購票<br>
            2. 需同時入場，並提供平日參觀時段預約
          `,
        },
        {
          href: 'mailto:service@weiyunchang.com',
          type: '企業票',
          paper: '',
          money: '',
          text: `
            1. 單次購買限定為50張（含）以上，請來信聯繫票務小組<br>
            2. 可選擇同時入場或非同時入場，提供平日參觀時段預約<br>
            3. 另提供 VIP CLUB 空間租借與活動辦理合作，歡迎來信洽詢需求
          `,
        },
        {
          href: 'mailto:service@weiyunchang.com',
          type: '校園票',
          paper: '',
          money: '',
          text: `
            1. 單次購買限定為50張（含）以上，請來信聯繫票務小組<br>
            2. 可選擇同時入場或非同時入場，提供平日參觀時段預約<br>
            3. 另提供 VIP CLUB 空間租借與活動辦理合作，歡迎來信洽詢需求
          `,
        },
      ]
    }
  },
  mounted () {
    // 倒數
    setInterval(()=> {
      this.getRunTime()
    }, 1000)

    // aos
    AOS.init()

    this.screenWidth  = window.screen.width

    // wow
    this.$nextTick(() => {
      if (process.browser) { // On the page mounted In the life cycle Instantiate according to the environment WOW
        new WOW({
          boxClass: 'wow', // 欲套用wow.js的class
          animateClass: 'animated', // 欲修改設定animat.css 的類別名稱
          offset: 0, // 當用戶滾動並到達這個距離時才開始執行動畫
          mobile: true, // 是否在行動裝置上執行動畫
          live: false, // 非同步產生的內容是否要套用
          callback: null,
          scrollContainer: null
        }).init()
      }
    })

    // 輪播
    this.tempGallery = this.mySwiperGallery
    this.tempBook = this.mySwiperBook
  },
  computed: {
    mySwiperGallery () { return this.$refs.mySwiperGallery.$swiper },
    mySwiperBook () { return this.$refs.mySwiperBook.$swiper },
  },
  methods: {
    scrollEvent (id) {
      this.$nextTick(() => {
        this.$refs[id].scrollIntoView({ behavior: 'smooth' })
      })
    },
    getRunTime () {
      // 作法：https://blog.csdn.net/sinat_34104446/article/details/81259483
      let setTime = new Date("2021/10/4 20:15:00")
      let nowTime = new Date()

      let restSec = setTime.getTime() - nowTime.getTime()

      let day = parseInt(restSec / (60*60*24*1000))
      let hour = parseInt(restSec / (60*60*1000) % 24)
      let minu = parseInt(restSec / (60*1000) % 60)
      let sec = parseInt(restSec / 1000 % 60)

      this.runtime = ''

      if(hour < 10) {
        this.runtime =　day + '天<br>' + '0' + hour + ':'
      } else {
        this.runtime = day + '天<br>' + hour + ':'
      }
      if(minu < 10) {
        this.runtime =　this.runtime + '0' + minu + ':'
      } else {
        this.runtime = this.runtime + minu + ':'
      }
      if(sec < 10) {
        this.runtime =　this.runtime + '0' + sec + '<br>限時早鳥'
      } else {
        this.runtime = this.runtime + sec + '<br>限時早鳥'
      }

      
    },
    selectMark (mark) {
      this.cleanMark()
      this.mySwiperBook.slideTo(mark-1)
      switch (mark) {
        case 1:
          this.isSelectMark.one = true
          break
        case 2:
          this.isSelectMark.two = true
          break
        case 3:
          this.isSelectMark.three = true
          break
        case 4:
          this.isSelectMark.four = true
          break
        case 5:
          this.isSelectMark.five = true
          break
        case 6:
          this.isSelectMark.six = true
          break
      }
    },
    cleanMark () {
      this.isSelectMark.one = false
      this.isSelectMark.two = false
      this.isSelectMark.three = false
      this.isSelectMark.four = false
      this.isSelectMark.five = false
      this.isSelectMark.six = false
    },
    selectGallery(index) {
      this.mySwiperGallery.slideTo(index)
    }
  },
  watch: {
    'tempGallery.activeIndex': {
      handler: function(index) {
        this.plazas[0].selected = false
        this.plazas[1].selected = false
        this.plazas[2].selected = false
        this.plazas[index].selected = true
      },
    },
    'tempBook.activeIndex': {
      handler: function(index) {
        this.selectMark(index+1)
      },
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes keepRotate{
    0%   { transform: rotate(0deg); }
    50%   { transform: rotate(360deg); }
    100%   { transform: rotate(720deg); }
}

.index {

  &-prince-outer {
    position: relative;
    background: linear-gradient(180deg, #001D39 0%, #0C3966 28.34%, #0F3963 63.28%);
  }

  // 桌面版：小王子的藝想世界

  &-prince-bt {



    &-sheep {
      position: absolute;
      top: 15%;
      left: 20%;
      width: 10%;
    }

    &-starL1 {
      position: absolute;
      top: 5%;
      left: 12%;
      width: 70px;
    }

    &-starL2 {
      position: absolute;
      top: 15%;
      left: 7%;
      width: 70px;
    }

    &-starL3 {
      position: absolute;
      top: 24%;
      left: 18%;
      width: 70px;
    }

    &-starL4 {
      position: absolute;
      top: 37%;
      left: 7%;
      width: 70px;
    }

    &-starL5 {
      position: absolute;
      top: 45%;
      left: 16%;
      width: 54px;
    }

    &-starL6 {
      position: absolute;
      top: 68%;
      left: 10%;
      width: 70px;
    }

    &-starL7 {
      position: absolute;
      top: 82%;
      left: 18%;
      width: 67px;
    }

    &-flower {
      position: absolute;
      top: 13%;
      right: 16%;
      width: 8%;
    }


    &-board {
      position: absolute;
      top: 50%;
      right: 2%;
      width: 120px;
    }

    &-elephant {
      position: absolute;
      top: 70%;
      right: 12%;
      width: 14%;
    }

    &-starR1 {
      position: absolute;
      top: 4%;
      right: 10%;
      width: 110px;
    }

    &-starR2 {
      position: absolute;
      top: 27%;
      right: 15%;
      width: 66px;
    }

    &-starR3 {
      position: absolute;
      top: 38%;
      right: 22%;
      width: 52px;
    }

    &-starR4 {
      position: absolute;
      top: 89%;
      right: 20%;
      width: 60px;
    }

    &-starR5 {
      position: absolute;
      top: 81%;
      right: 10%;
      width: 54px;
    }

    &-starR6 {
      position: absolute;
      top: 90%;
      right: 24%;
      width: 61px;
    }

  }

  
  // 小王子的藝想世界

  &-prince {
    position: relative;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;

    &-man-box {
      display: flex;
      justify-content: flex-end;
      text-align: right;
      padding: 232px 0px 90px;
    }

    &-moon {
      // https://www.oxxostudio.tw/articles/201803/css-animation.html
      width: 150px;
      height: 150px;
      border-radius: 100%;
      background-image: url('../assets/img/index/prince-moon.png');
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      margin: 0px 0px 0px 0px;
      background-repeat: no-repeat;
      animation: keepRotate 40s linear infinite;
    }

    &-bg {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 232px;
      background: linear-gradient(179.79deg, #281717 0.18%, rgba(40, 23, 23, 0.51) 66.61%, rgba(40, 23, 23, 0) 99.82%);
      z-index: 2;
    }

    &-man {
      position: absolute;
      left: 24px;
      top: 0px;
      width: 80%;
    }

    &-title {
      position: absolute;
      left: 20px;
      top: 0px;
      width: 230px;
      cursor: pointer;
      z-index: 3;
    }

    &-star1 {
      position: absolute;
      right: 34px;
      top: 40px;
      width: 40px;
      z-index: 2;
    }

    &-star2 {
      position: absolute;
      right: 34px;
      top: 180px;
      width: 40px;
      z-index: 2;
    }

    &-star3 {
      position: absolute;
      right: 184px;
      top: 180px;
      width: 40px;
      z-index: 2;
    }

    &-exhi {
      position: absolute;
      left: 20px;
      top: 150px;
      width: 95px;
      transform: translateY(-20px);
      z-index: 3;
    }

    &-box {
      position: absolute;
      left: 0px;
      top: 270px;
      display: flex;
    }

    &-intro1 {
      width: 100px;
      height: 97px;
      margin-left: 10px;
      cursor: pointer;
    }

    &-intro2 {
      width: 80px;
      margin: 72px 0px 0px 0px;
      cursor: pointer;
    }

    &-intro3 {
      position: absolute;
      left: 0px;
      top: 360px;
      width: 90px;
      cursor: pointer;
    }
  }

  // 最新消息
  &-news {
    padding: 20px 0px 23px;

    &-bg {
      position: relative;
      max-width: 372px;
      height: 232px;
      width: calc(100% - 0px);
      margin: 0px 0px;
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
    }

    &-head-hat {
      position: absolute;
      top: -4px;
      width: 81px;
    }

    &-head-box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 56px;
    }

    &-head-title {
      width: 96px;
    }

    &-fb {
      width: 25px;
      margin-left: 20px;
    }

    &-text {
      padding: 12px 56px 0px;
      line-height: 1.8;
      color: #4D4D4D;
      font-size: 12px;
      
    }
  }

  // 故事翻頁

  &-book {
    position: relative;

    &-title {
      width: calc(100% - 20px);
      margin: 0px 10px;
    }

    &-desc {
      margin: 0px 35px 21px;
      line-height: 1.5;
      font-size: 13px;
      color: white;
    }

    &-rotate {
      position: relative;
      width: calc(100% - 40px);
      margin: 0px 0px;
      height: 460px;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    &-mark {
      position: absolute;
      right: -20px;
      width: 22px;
      cursor: pointer;
    }

    &-mark1 {
      top: 10px;
    }

    &-mark2 {
      top: 80px;
    }

    &-mark3 {
      top: 150px;
    }

    &-mark4 {
      top: 220px;
    }

    &-mark5 {
      top: 290px;
    }

    &-mark6 {
      top: 360px;
    }

    &-swiper {

    }

    &-slide-box {
      width: 70%;
      text-align: center;
      margin: auto;
      color: #4D4D4D;
    }

    &-img {
      height: 108px;
      margin-top: 18px;
    }

    &-head {
      margin-top: 12px;
      font-size: 17px;
      text-align: center;
    }

    &-text {
      margin-top: 16px;
      font-size: 13px;
      line-height: 1.5;
      text-align: justify;

      // &::first-letter {
      //   font-size: 20px;
      // }
    }

    &-btn {
      margin-top: 2px;
      width: 26px;
    }
  }

  // 藝術家介紹

  &-art {
    margin-top: 30px;

    &-head-box {
      margin: 0px 10px; 
      display: flex;
      align-items: center;
    }

    &-head {
      width: calc(72% - 20px);
    }

    &-intro {
      width: 28%;
    }

    &-text {
      margin: 17px 28px;
      line-height: 1.4;
      letter-spacing: 0.8px;
      font-size: 14px;
      color: white;
    }

    &-rotate {

    }

    &-swiper {

    }

    &-slide {
      width: 200px;
      text-align: center;
      margin: auto;
    }

    &-artist {
      width: 200px;
    }

    &-name {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
      font-size: 17px;
      color: #FFFFFF;
    }

    &-title {
      font-size: 14px;
      color: #F5EEDC;
    }

    &-line {
      margin-top: 15px;
      border-bottom: 1px dashed #778FB4;
    }

    &-img {
      width: 100%;
      margin-top: -10px;
      transform: translateY(15px);
    }
  }


  //------------------------------------------- 

  &-exhi-outer {
    position: relative;
    background-color: #F5EDDC;
  }

  &-exhi-skin {

    &-moon {
      position: absolute;
      left: 10%;
      top: 20%;
      width: 180px;
    }

    &-star {
      position: absolute;
      right: 20%;
      top: 15%;
      width: 41px;
    }

    &-sun {
      position: absolute;
      right: 0%;
      bottom: -10%;
      width: 180px;
      z-index: 2;
    }

  }


  // 展場介紹

  &-exhi {
    position: relative;
    background-color: #F5EDDC;

    &-text {
      margin: 0px 27px;
      padding: 20px 0px 14px;
      line-height: 1.5;
      letter-spacing: 0.8px;
      font-size: 13px;
      color: #4D4D4D;
    }

  }

  // 章節

  &-chapter {
    position: relative;
    background-color: #F5EDDC;
    padding-bottom: 66px;

    &-head-box {
      width: calc(100% - 11px);
      margin: 18px 11px 13px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-head-left {
      display: flex;
    }

    &-chapter {
      width: 90px;
      height: 37px;
      margin-right: 11px;
    }

    &-title {
      margin-top: 4px;
      font-size: 15px;
      color: #4D4D4D;
    }

    &-tag {
      margin-top: 5px;
      font-size: 11px;
      color: #317ABE;
    }

    &-arrow {
      width: 24px;
      transition: 0.3s;
      transform: rotate(180deg);
      cursor: pointer;
    }

    &-arrow-reverse {
      transform: rotate(0deg);
    }

    &-box {
      width: calc(100% - 62px);
      margin: auto;
      padding: 12px 20px;
      background: #FFFFFF;
      border-radius: 11px;
      text-align: center;
    }

    &-img {
      width: 200px;
    }

    &-text {
      margin-top: 8px;
      line-height: 1.3;
      letter-spacing: 0.8px;
      font-size: 12px;
      text-align: left;
      color: #4A3620;
    }

    &-line {
      width: calc(100% - 22px);
      margin: 11px auto 0px;
      border-bottom: 1px dashed #778FB4;
    }

    &-gallery {
      max-height: 245px;
      padding: 14px 0px 8px;
      background-color: black;

      &-swiper {
        
      }

      &-img {
        width: calc(100% - 18px);
        margin: 0px 9px;
      }

      &-page {
        display: flex;
        justify-content: center;
        margin-top: 15px;
      }

      &-page-dot {
        width: 5px;
        height: 5px;
        margin: 0px 1.5px;
        border-radius: 100%;
        background-color: #9A9A9A;
        cursor: pointer;
      }

      &-page-select {
        background-color: white;
      }
    }

  }


  //------------------------------------------- 
  // 購票資訊

  &-ticket-outer {
    position: relative;
    background-color: white;
  }

  &-ticket-white {

    &-sun {
      position: absolute;
      left: 0%;
      top: -7%;
      width: 140px;
    }

    &-fox {
      position: absolute;
      left: 8%;
      top: 15%;
      width: 128px;
    }

    &-prince {
      position: absolute;
      left: 0%;
      top: 75%;
      width: 450px;
    }

    &-flower {
      position: absolute;
      right: 5%;
      top: 50%;
      width: 400px;
    }

    &-sun2 {
      position: absolute;
      right: 0%;
      bottom: -6%;
      width: 140px;
      transform: rotate(180deg);
      z-index: 2;
    }
  }

  &-ticket {
    position: relative;
    padding-top: 25px;
    background-color: white;

    &-title {
      width: 200px;
    }

    &-airplane {
      position: absolute;
      top: -68px;
      right: 0px;
      width: 160px;
    }

    &-sub {
      position: relative;
      margin: 10px 34px 0px;
      padding-bottom: 148px;
      font-size: 13px;
      line-height: 1.5;
      letter-spacing: 0.8px;
      color: #4D4D4D;
      z-index: 2;
    }

    &-land {
      position: absolute;
      top: 300px;
      width: 100%;
    }

    &-box {
      width: calc(100% - 24px);
      margin: 0px 12px;
    } 
    
    // 票

    &-head-box {
      display: flex;
      align-items: baseline;
      margin: 40px 0px 0px;
    }

    &-head-fox {
      width: 50px;
    }

    &-head {
      font-size: 20px;
      color: #674F4F;
    }
    &-line {
      margin: 14px 0px;
      border-bottom: 1px dashed #778FB4;
    }

    // 票種

    &-row-box {

      &:nth-child(3)  .index-ticket-type {
        letter-spacing: 8px;
        padding: 0px 0px 0px 4px;
      }

      &:nth-child(7)  .index-ticket-type {
        letter-spacing: 8px;
        padding: 0px 0px 0px 4px;
      }

      &:nth-child(9)  .index-ticket-type {
        height: 45px;
        line-height: initial;
        padding: 10px 0px;
      }

      &:nth-child(10)  .index-ticket-type {
        height: 45px;
        line-height: initial;
        padding: 10px 0px;
      }

    }

    &-row {
      display: flex;
      color: #674F4F;
    }

    &-type {
      width: 96px;
      height: 37px;
      line-height: 40px;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
      margin-right: 15px;
      font-size: 17px;
      text-align: center;
    }

    &-desc {
      width: calc(100% - 100px);
    }

    &-desc-name {
      font-size: 14px;
      margin-bottom: 5px;
    }

    &-desc-name-big {
      font-size: 19px;
    }

    &-desc-text {
      font-size: 12px;
      line-height: 1.5;
    }

    // 平台

    &-hint {
      margin: 38px 0px 23px;
      text-align: center;
      color: #674F4F;
      font-size: 15px;
    }

    &-place-left {
      display: flex;
      justify-content: center;
    }

    &-place-right {
      padding-bottom: 257px;
      display: flex;
      justify-content: center;
      margin: 15px 0px 0px;
    }

    &-place {
      max-width: 100px;
      width: 100%;
      margin: 0px 5px;
      cursor: pointer;
    }


  }

  

  //-------------------------------------------
  // 小王子商店 

  &-store-outer {
    position: relative;
    background: linear-gradient(180deg, #6385B2 0%, #335A85 15.1%, #0F3963 37.5%);
  }

  &-store-bb {

    &-star1 {
      position: absolute;
      left: 10%;
      top: 5%;
      width: 80px;
    }

    &-star2 {
      position: absolute;
      left: 20%;
      top: 30%;
      width: 62px;
    }

    &-elephant {
      position: absolute;
      left: 0%;
      top: 50%;
      width: 15%;
    }

    &-tree1 {
      position: absolute;
      left: 0%;
      bottom: 0%;
      width: 30%;
    }

    &-star3 {
      position: absolute;
      right: 10%;
      top: 24%;
      width: 80px;
    }

    &-star4 {
      position: absolute;
      right: 15%;
      top: 55%;
      width: 62px;
    }

    &-tree2 {
      position: absolute;
      right: 0%;
      bottom: 0%;
      width: 30%;
    }
  }

  &-store {
    position: relative;
    text-align: center;

    &-tree {
      position: absolute;
      top: -210px;
      left: 0px;
      width: 100%;
    }

    &-title {
      width: 80%;
      padding-top: 365px;
    }

    &-tab-box {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    &-tab {
      margin: 0px 10px;
      font-size: 15px;
      color: #A8B9D1;
    }

    &-go-box {
      padding: 30px 0px 0px;

      margin-bottom: -10px;
    }

    &-go {
      width: 110px;
      margin: auto;
      padding: 8px 0px;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      background: #317ABE;
      border: 2px solid #6DAD8F;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }

    &-land {
      position: relative;
      bottom: -44px;
      width: 100%;
    }

  }

  // 協力單位

  &-sponsor {
    background-color: white;

    &-title {
      padding: 80px 0px;
      font-size: 16px;
      color: #4d4d4d;
      text-align: center;
    }

    &-rotate {
      padding: 0px 0px 40px;
    }
  }

  // footer

  &-footer {
    padding: 25px 31px 10px;
    background-color: #E8E1D1;

    &-outer-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-box {

    }

    &-text {
      margin: 0px 0px 11px;
      font-size: 12px;
      text-align: left;
      color: #4D4D4D;
    }

    &-social-box {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    &-social {
      height: 21px;
      margin: 7px 0px;
    }

    &-copyright {
      margin-top: 10px;
      font-size: 12px;
      color: #9B9B9B;
    }

    &-copyright-img {
      width: calc(100% - 40px);
    }
  }


  // sidebar

  &-side {
    position: fixed;
    bottom: 5vh;
    right: 0px;
    z-index: 2;
    // left: calc(100vw - 107px);
    // transform: none;

    &-box {
      width: 110px;
      height: 100px;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
      background-image: url('../assets/img/index/fix-ticket.png');
    }

    &-text {
      padding: 49px 3px 0px 0px;
      line-height: 1.3;
      color: #564242;
      font-size: 12px;
      text-align: center;
    }
  }

}

@media( max-width: 1023px ){

  .index {

    &-prince {

      &-bt-sheep {
        top: 17%;
        left: 16%;
      }


      &-bt-starR4 {
        right: 10%;
      }

      &-bt-starR6 {
        top: 94%;
        right: 8%;
      }
    }
    
  }

}

@media( max-width: 830px ){

  // 部分關

  .index {

    &-prince-bt {

      &-starL1 {
        display: none;
      }

      &-starL2 {
        display: none;
      }

      &-starL3 {
        display: none;
      }

      &-starL4 {
        display: none;
      }

      &-starL5 {
        display: none;
      }

      &-starL6 {
        display: none;
      }

      &-starL7 {
        display: none;
      }

      &-starR1 {
        display: none;
      }

      &-starR2 {
        display: none;
      }

      &-starR3 {
        display: none;
      }

      &-starR4 {
        display: none;
      }

      &-starR5 {
        display: none;
      }

      &-starR6 {
        display: none;
      }

      &-sheep {
        display: none;
      }

      &-flower {
        display: none;
      }

      &-board {
        display: none;
      }

      &-elephant {
        display: none;
      }



    }

    &-exhi-skin {


      &-moon {
        display: none;
      }

      &-sun {
        display: none;
      }
    }

    &-ticket-white {

      &-sun {
        display: none;
      }

      &-fox {
        display: none;
      }

      &-prince {
        display: none;
      }

      &-flower {
        display: none;
      }

      &-sun2 {
        display: none;
      }
    }

    &-store-bb {

      &-elephant {
        display: none;
      }

      &-moon {
        display: none;
      }

    }

  }

}

@media( max-width: 500px ){

  // 部分關
  .index {

    &-store-bb {

      &-star1 {
        display: none;
      }

      &-star2 {
        display: none;
      }

      &-tree1 {
        display: none;
      }

      &-star3 {
        display: none;
      }

      &-star4 {
        display: none;
      }

      &-tree2 {
        display: none;
      }
    }

    &-side {
      // left: calc(50% + 110px);
      // transform: translateX(-50%);
    }
  }

  

}

@media( max-width: 440px ){

  // 全關
  .index {

    &-prince {

      &-moon {
        margin-right: 16px;
      }
    }

  }
}

@media( max-width: 412px ){

  // 全關
  .index {

    &-prince {

      &-moon {
        width: 130px;
        height: 130px;
        margin-right: 22px;
      }
    }

  }
}

@media( max-width: 389px ){

  // 全關
  .index {

    &-prince {

      &-moon {
        margin-right: 27px;
      }
    }

  }
}

@media( max-width: 350px ){

  .index {

    &-ticket {

      &-land {
        top: 338px;
      }

      &-head-box {
        margin: 10px 0px 0px;
      }
    }

    &-book {

      &-img {
        height: 106px;
      }
      
      &-slide-box {
        width: 85%;
      }
    }
  }

}

</style>
