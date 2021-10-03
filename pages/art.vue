<template>
  <div class="art">
    <div class="art-artist-outer">
      <img class="art-star1" src="@/assets/img/common/star.png" alt="star">
      <img class="art-star2" src="@/assets/img/common/star.png" alt="star">
      <img class="art-star3" src="@/assets/img/common/star.png" alt="star">
      <img class="art-star4" src="@/assets/img/common/star.png" alt="star">
      <img class="art-star5" src="@/assets/img/common/star.png" alt="star">
      <img class="art-star6" src="@/assets/img/common/star.png" alt="star">
      <img class="art-star7" src="@/assets/img/common/star.png" alt="seven">
      <img class="art-sun" src="@/assets/img/art/sun.png" alt="sun">
      <img class="art-tree" src="@/assets/img/art/tree.png" alt="tree">
      <boxContent class="art-artist">
        <router-link :to="'/'">
          <img class="art-artist-arrow" src="@/assets/img/common/back.png" alt="artist">
        </router-link>
        <img class="art-artist-title" src="@/assets/img/index/title-artist.png" alt="back">
        <img class="art-artist-star" src="@/assets/img/common/star.png" alt="star">
      
        <!-- 輪播 -->
        <div class="art-artist-rotate">
          <swiper class="swiper art-artist-swiper" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(artist, index) in artists"
              :key="`${index}artist`"
            >
              <div class="art-artist-box">
                <img class="art-artist-icon" src="@/assets/img/art/prince1.png" alt="prince">
                <img class="art-artist-pic" :src="require(`@/assets/img/art/artist${index+1}.png`)" alt="prince">
                <div class="art-artist-head">
                  <div class="art-artist-head-name">{{ artist.name }}</div>
                  ｜
                  <div class="art-artist-head-job">{{ artist.job }}</div>
                  ｜
                  <div class="art-artist-head-location">{{ artist.location }}</div>
                </div>
                <div v-html="artist.text" class="art-artist-head-text"></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>


      <img class="art-artist-fly" src="@/assets/img/art/prince2.png" alt="prince">


      
      
      
      </boxContent>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VanillaTilt from 'vanilla-tilt';

export default {
  head: {
    title: '藝術家介紹',
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
      swiperOption: {
        slidesPerView: 1,
        initialSlide: 1,
        spaceBetween: -50,
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      artists: [
        {
          img: '',
          name: '呂志文',
          job: '藝術家',
          location: '台灣',
          text: `
            呂志文 Aer Lu 出生於1983 臺北, 台灣<br>
            現為秀藝術空間負責人<br>
            喜愛創作以平面繪畫，立體，時尚插畫家，品牌設計師等等。<br>
            風格繽紛可愛時尚，定期海內外舉辦展覽，跨足各時尚品牌的合作，喜歡用創作記錄生活。
          `,
        },
        {
          img: '',
          name: '張嘉穎',
          job: '藝術家',
          location: '台灣',
          text: `
          張嘉穎 CHANG Chia-Ying（1982）<br>
          出生於台灣台北，畢業於臺南藝術大學造形藝術研究所、臺北藝術大學美術學院油畫組。<br>
          作品獨具精緻華麗的視覺風格，顯露其純熟駕馭繪畫技法，穿梭於古典與當代之間。嚴謹的構圖裡，充滿挪用自著名童話故事的元素和東西方神話的符徵，隱微指涉多重意涵。在甜美色調的異世界裡，一切時間和空間的線索都斷裂，也讓邏輯缺失的敘事益發耐人尋味。不固定符旨的模式，以神祕學的表徵，誘發觀者自行想像，讓現實中無法顯現的真實感受呼之欲出，進而探討個人和集體的潛意識，乃至宇宙與生命之間能量的緊密關聯。<br>
          曾於臺東美術館、伊通公園、台北
          `,
        },
        {
          img: '',
          name: '蔡景康',
          job: '藝術家',
          location: '台灣',
          text: `
            首位榮獲插畫界兩大最高殊榮「英國WIA 國際插畫專業大獎」及「日本JIA插畫大賞最高賞」的華人得主，其得獎插畫作品於英國薩默塞特宮展覽及進行全國巡迴展，更進駐泰特現代藝術館、羅浮宮、龐畢度藝術中心等。他更是首位與日本殿堂玩具品牌海洋堂合作推出藝術玩具的華人藝術家，海洋堂社長宮脇修一更盛讚StevenChoi 個人風格強烈，用色構圖鮮明細膩，擁有超脫世俗及充滿神秘氣息的孤獨感，近乎冥想的靜謐和詩意都成了作品中極具辦識度的藝術標誌。更是法國官方授權重繪《小王子》及創作《小王子》續集的首位華人插畫師。
          `,
        },
        {
          img: '',
          name: '何佳樺',
          job: '音樂家',
          location: '台灣',
          text: `
            何佳樺 SARA HO<br>
            何佳樺，出生於台北，自小學習古典音樂，主修中國樂器古箏，副修古典鋼琴，為秀藝術空間音樂教學負責人。從小接受中樂及西樂的影響，認為音樂應該不受樂器限制，只要能夠完整表達自己就是最好的音樂。喜歡音樂帶給人無盡的想像空間，也喜歡讓音樂成為一種媒介，激發人內心深處的感動，並試著引發一些改變讓生活更好。定期於國家演奏廳、台北市中山堂等音樂廳演奏，曾參與2020翻轉童話情境式藝術特展之展場音樂創作及選曲。
          `,
        },
        {
          img: '',
          name: '半隻羊立體書實驗室',
          job: '創作者',
          location: '台灣',
          text: `
            半隻羊立體書實驗室<br>
            H.G. Pop-up Concept Co., Ltd. <br>
            「半隻羊立體書實驗室」是積極在亞太地區推廣多元立體紙藝的臺灣團隊，除了與新加坡、香港等跨國合作外，更是第一個同時榮獲臺灣立體書專利、臺灣文博會百大新銳獎、華人公益獎(企業CSR)等殊榮的紙藝公司。近年與國立故宮博物院、玉珍齋、奇美博物館、臺灣博物館、衛武營國家藝術文化中心...等推出聯名商品，為臺灣紙藝品牌與公民營機構跨界共創立下里程碑。
          `,
        },
      ]
    }
  },
  mounted () {
    // aos
    AOS.init()

    // tilt
    // https://micku7zu.github.io/vanilla-tilt.js/
    // const element = document.querySelector(".js-tilt");
    // VanillaTilt.init(element, {
    //   max: 25,
		//   speed: 400
    // });
    
  },
  computed: {
    // swiper () { return this.$refs.mySwiper.$swiper },
  },
  methods: {

  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.art {

  &-artist-outer {
    position: relative;
    background: #021629;
    min-height: 100vh;
  }

  &-star1 {
    position: absolute;
    left: 8%;
    top: 10%;
    width: 74px;
  }


  &-star2 {
    position: absolute;
    left: 0px;
    top: 40%;
    width: 85px;
  }

  &-star3 {
    position: absolute;
    left: 20%;
    top: 70%;
    width: 82px;
  }

  &-star4 {
    position: absolute;
    right: 16%;
    top: 10%;
    width: 70px;
  }

  &-star5 {
    position: absolute;
    right: 18%;
    top: 30%;
    width: 74px;
  }

  &-star6 {
    position: absolute;
    right: 24%;;
    top: 50%;
    width: 80px;
  }

  &-star7 {
    position: absolute;
    left: 12%;
    top: 40%;
    width: 70px;
  }

  &-sun {
    position: absolute;
    right: 0px;
    top: 30%;
    width: 152px;
  }

  &-tree {
    position: absolute;
    right: 0px;
    top: 70%;
    width: 152px;
  }


  &-artist {
    position: relative;
    min-height: calc(100vh - 8px);
    padding-bottom: 8px;
    text-align: center;
    background: linear-gradient(179.98deg, #001D39 0.01%, #04284C 50.19%, #0A3764 96.35%);

    &-arrow {
      position: absolute;
      left: 15px;
      top: 15px;
      height: 20px;
      cursor: pointer;
    }

    &-title {
      width: 240px;
    }

    &-star {
      position: absolute;
      top: 84px;
      left: 13px;
      width: 70px;
    }
    
    &-rotate {
      margin-top: -10px;
    }
    
    &-swiper {
      // overflow: visible;
    }
    
    &-box {
      position: relative;
      width: calc(100% - 140px);
      margin: 30px auto 0px;
      padding: 34px 32px 60px;
      border: 4px solid #3C759B;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 27px;
      background-color: #FFFDF8;
      text-align: center;
    }
    
    &-icon {
      position: absolute;
      left: 0px;
      top: -40px;
      width: 65px;
    }
    
    &-pic {
      width: 160px;
    }
    
    &-head {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      color: #3E3E3E;
    }
    
    &-head-name {
      font-size: 20px;
      font-weight: 800;
    }
    
    &-head-job {
      padding: 4px 8px;
      font-weight: 600;
      background: #F2EDE3;
      border-radius: 2px;
      font-size: 14px;
    }
    
    &-head-location {
      padding: 4px 12px;
      font-weight: 600;
      background: #F2EDE3;
      border-radius: 2px;
      font-size: 14px;
    }
    
    &-head-text {
      height: 62px;
      margin-top: 20px;
      line-height: 1.6;
      font-size: 13px;
      text-align: left;
      overflow: auto;
    }

    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    
    &-fly {
      width: 240px;
      margin-top: 17px;
    }


  }

}

@media( max-width: 1023px ){

.art {

  &-star1 {
    display: none;
  }


  &-star2 {
    display: none;
  }

  &-star3 {
    display: none;
  }

  &-star4 {
    display: none;
  }

  &-star5 {
    display: none;
  }

  &-star6 {
    display: none;
  }

  &-star7 {
    display: none;
  }

  &-sun {
    display: none;
  }

  &-tree {
    display: none;
  }
}

}

</style>
