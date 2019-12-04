<template>
  <div class="home-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(img, index) in bannerImgs" :key="index">
        <div class="banner-img" :style="{'background-image': `url(${img})`}"></div>
      </swiper-slide>
    </swiper>
    <div class="banner-points">
      <banner-point></banner-point>
    </div>
  </div>
</template>
<script>
import BannerPoint from '@/components/BannerPoint'
import banner1 from '@/assets/banner/banner1.jpg'
import banner2 from '@/assets/banner/banner2.jpg'
import banner3 from '@/assets/banner/banner3.jpg'
import banner4 from '@/assets/banner/banner4.jpg'
import banner5 from '@/assets/banner/banner5.jpg'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeBanner',
  components: {
    BannerPoint,
    swiper,
    swiperSlide
  },
  data () {
    return {
      bannerImgs: [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5
      ],
      swiperOption: {
        autoplay: true,
        speed: 10000,
        loop: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="less" scoped>
.home-banner {
  position: relative;
  height: 366px;
  background-color: #f5f5f5;
}
.swiper-container {
  height: 100%;
}
.banner-img {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.banner-points {
  position: absolute;
  left: 48px;
  top: 270px;
  z-index: 1;
}
</style>
