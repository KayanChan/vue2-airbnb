<template>
  <div class="home-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(img, index) in bannerImgs" :key="index">
        <div class="banner-img" :style="{'background-image': `url(${img})`}"></div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
    <!-- <div class="banner-points">
      <banner-point></banner-point>
    </div> -->
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
    // const _that = this
    return {
      bannerImgs: [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5
      ],
      count: 0,
      swiperOption: {
        autoplay: {
          delay: 10000
        },
        speed: 1000,
        loop: false,
        freeModeSticky: true,
        disableOnInteraction: false,
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        on: {
          // slideChangeTransitionStart: function () {
          //   console.log('===============')
          //   console.log(this.activeIndex)
          //   console.log('===============')
          // },
          // autoplayStart: function () {
          //   setInterval(function () {
          //     _that.count++
          //     console.log(_that.count % 10)
          //   }, 1000)
          // }
        }
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
  },
  methods: {
    counter () {
      const _that = this
      setInterval(function () {
        _that.count++
        console.log(_that.count)
      }, 1000)
    }
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
