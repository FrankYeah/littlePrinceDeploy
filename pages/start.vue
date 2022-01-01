<template>
  <div class="start">
    
  </div>
</template>

<script>

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  head: {
    title: '小王子的藝想世界 75 周年特展',
  },
  layout: 'default',
  components: {
    boxContent: require('~/components/common/box-content.vue').default,
  },
  props: {

  },
  data () {
    return {
      
    }
  },
  mounted () {
    // aos
    AOS.init()

    
  },
  computed: {

  },
  methods: {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.start {

}

@media( max-width: 1023px ){

.start {


}

}

</style>
