const Sass = require('sass')
const Fiber = require('fibers')

export default {
  mode: 'universal',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/littlePrince/'
  },
  head: {
    titleTemplate: '%s',
    title: '小王子的藝想世界 75 周年特展',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // SCSS 配置
  browserslist: "cover 99.5%",
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },
    babel: {
      presets({isServer}) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [
          [ require.resolve("@babel/preset-env"), { targets }  ]
        ]
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator"
      ]
    },
    /*
    ** You can extend webpack config here
    */
   // 在 console 可以看見 css 位置
    cssSourceMap: true,
    parallel: true,
    cache: false,
    extractCSS: process.env.NODE_ENV === 'production',
    optimizeCSS: process.env.NODE_ENV === 'production',
    transpile: ['vue-intersect'],
    postcss: {
      'postcss-px2rem-exclude': {
          emUnit: 75,
          exclude: '/node_modules|vant/'
      },
      'autoprefixer': {
        flexbox: true,
        grid: true,
        overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
      }
    },
    vendor: ['vue-lazyload']
  },
  css: [
    '~assets/styles/global.css',
    '~assets/styles/global.scss',
    '~assets/fonts/georama/georama.css',
    'swiper/swiper-bundle.css',
    'animate.css/animate.css',
  ],
  /*@nuxtjs/style-resources*/
  styleResources: {
    //array of strings that are paths to the file:
    // scss: ['~assets/styles/globalvariables.scss']
  },
  loader: 'sass-loader',
    options: {
        sassOptions: {
            indentedSyntax: true
        }
    },
  //
  plugins: [
    '~/plugins/component.js',
    '~/plugins/vue-awesome-swiper',
    { src: '~/plugins/vue-lazyload', ssr: true },
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],
  axios: {
    
  }
}
