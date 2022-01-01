<template>
  <div class="draw">
    <canvas id="canvas" width="800" height="500"></canvas>
    <img style="display: none;" id="testImg1" src="@/assets/img/index/prince-bird.png" alt="sidd">
    <br><br>
    <img @click="getImg()" :src="renderImg" alt="">
  </div>
</template>

<script>

import { fabric } from 'fabric'

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
      card: null,
      renderImg: 'https://siddharam.com/_nuxt/img/88866a3.webp'
    }
  },
  mounted () {
    this.card = new fabric.Canvas('canvas', {
      backgroundColor: 'blue'
    })

    const imgElement = document.getElementById('testImg1');
    const imgInstance = new fabric.Image(imgElement, {
      left: 100, // 圖片相對畫布的左側距離
      top: 100, // 圖片相對畫布的頂部距離
      angle: 30, // 圖片旋轉角度
      opacity: 0.85, // 圖片透明度
      // 這裡可以通過scaleX和scaleY來設置圖片繪製後的大小，這裡為原來大小的一半
      scaleX: 0.5, 
      scaleY: 0.5
    });
    // 添加對象後, 如下圖
    this.card.add(imgInstance);
    
    this.card.backgroundColor = 'yellow';

    this.card.on('object:modified', (e) => {
      this.cardChange(e)
    });

    // const currState = this.card.toJSON();
    // console.log(currState)

    // this.card.loadFromJSON(currState, () => {
    //   this.card.renderAll();
    // });


  },
  computed: {

  },
  methods: {
    cardChange (e) {
      console.log(e)
    },
    getImg () {
      const dataURL = this.card.toDataURL({
        format: `image/png`,
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        multiplier: 1,
        quality: 0.1
      })
      const a = document.createElement('a')
      a.href = dataURL
      a.download = `output.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)


    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.draw {

}

@media( max-width: 1023px ){

.draw {


}

}

</style>
