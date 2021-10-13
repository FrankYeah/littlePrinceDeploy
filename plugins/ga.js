// https://ithelp.ithome.com.tw/articles/10212098

if (process.client && process.env.NODE_ENV === 'production') {

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    // 替換自己 GA 的 ID
    ga('create', 'G-L9BGXZ49XE', 'auto')
  }
  
  export default ({ app: { router }, store }) => {
    router.afterEach((to, from) => {
      ga('set', 'page', to.fullPath)
      ga('send', 'pageview')
    })
  }