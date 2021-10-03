<template>
  <div>
    <topBar/>
    <sideBar/>
    <nuxt/>
    <bottomBar/>
  </div>
</template>

<script>

export default {
  components: {
    topBar: require('~/components/top-bar.vue').default,
    bottomBar: require('~/components/bottom-bar.vue').default, 
    sideBar: require('~/components/side-bar.vue').default, 
  },
  props: {

  },
  data () {
    return {

    }
  },
  created () {
    
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll, false);
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll, false);
    // document.addEventListener('click', this.autoHide, false)
    // document.addEventListener('click', this.autoHideMenu, false)

    // 點開手機版輸入框時，要避免畫面滑動
    // let mo = function (e) { e.preventDefault() }
    // document.body.style.overflowX='hidden'
    // document.addEventListener('touchmove', mo, false)
    // this.$nextTick(() => {
    //   document.body.style.overflowX='hidden'
    //   document.body.addEventListener('touchmove', mo, {passive:false})
    // })
  },
  computed: {

  },
  methods: {
    handleScroll () {
      // 禁止滑動
      // https://stackoverflow.com/questions/22678482/disable-horizontal-scroll-but-allow-vertical-scroll
      
      if(document.body.scrollLeft != 0) {
        document.body.scrollLeft = 0
        document.body.scrollLeft = 0
        window.scrollTo(0,window.scrollY)
      }
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss">

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
  line-height: 1;
  margin: 0px;
  padding: 0px;
  font-family: 'Georama' ,'Noto Sans TC', 'Noto Sans SC', sans-serif;
  background-color: #f0f0f0;
  max-width: 100% !important;
  overflow-x: hidden !important;
  // font-family: 'GoudyOldStyle,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,PingFang TC,Hiragino Sans GB,Microsoft JhengHei,sans-serif!important';
}

a {
  color: #fff;
  text-decoration: none;
}

input {
  padding: 0px;
  margin: 0px;
  outline: none;
 -webkit-appearance: none;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
}

textarea {

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
}

</style>
