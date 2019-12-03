import request from '@/utils/request'
import config from '@/utils/config'

export function getPromotionHouse () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getPromotionHouse success',
      data: [
        {
          id: 0,
          typeId: 'apartment',
          roomCount: 1,
          bathroomCount: 1,
          bedCount: 1,
          desc: 'room3厦大沙坡尾大学路正街独立卫生间',
          realPrice: 89,
          originPrice: 99,
          star: 6,
          isPlusChecked: true
        },
        {
          id: 1,
          typeId: 'room',
          roomCount: 1,
          bathroomCount: 1,
          bedCount: 1,
          desc: '《壹所设计》全新ins/近厦大/曾厝安/环岛路/白城沙滩/投影大床',
          realPrice: 134,
          originPrice: 149,
          star: 148,
          isPlusChecked: false
        },
        {
          id: 2,
          typeId: 'loft',
          roomCount: 0,
          bathroomCount: 1.5,
          bedCount: 1,
          desc: '泡泡椅(投影仪)一线无遮挡海景房',
          realPrice: 178,
          originPrice: 189,
          star: 11,
          isPlusChecked: false
        },
        {
          id: 3,
          typeId: 'apartment',
          roomCount: 1,
          bathroomCount: 1.5,
          bedCount: 1,
          desc: '鼓浪屿,厦大,中山路,体育中心旁单身公寓,大浴缸➕投影房 莲坂地铁口100米特价房',
          realPrice: 159,
          originPrice: 199,
          star: 13,
          isPlusChecked: false
        }
      ]
    })
  } else {
    return request.get('/common/get-promotion-house')
  }
}

export function getPromotionCity () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getPromotionCity success',
      data: [
        {
          id: 'Beijing',
          name: '北京'
        },
        {
          id: 'Shanghai',
          name: '上海'
        },
        {
          id: 'Guangzhou',
          name: '广州'
        },
        {
          id: 'Shenzhen',
          name: '深圳'
        },
        {
          id: 'Zhuhai',
          name: '珠海'
        }
      ]
    })
  } else {
    return request.get('/common/get-promotion-city')
  }
}

export function getDestinationHouse () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getDestinationHouse success',
      data: [
        {
          id: 0,
          typeId: 'apartment',
          roomCount: 1,
          bathroomCount: 1,
          bedCount: 1,
          desc: 'room3厦大沙坡尾大学路正街独立卫生间',
          realPrice: 89,
          originPrice: 99,
          star: 6,
          isPlusChecked: true
        },
        {
          id: 1,
          typeId: 'room',
          roomCount: 1,
          bathroomCount: 1,
          bedCount: 1,
          desc: '《壹所设计》全新ins/近厦大/曾厝安/环岛路/白城沙滩/投影大床',
          realPrice: 134,
          originPrice: 149,
          star: 148,
          isPlusChecked: false
        },
        {
          id: 2,
          typeId: 'loft',
          roomCount: 0,
          bathroomCount: 1.5,
          bedCount: 1,
          desc: '泡泡椅(投影仪)一线无遮挡海景房',
          realPrice: 178,
          originPrice: 189,
          star: 11,
          isPlusChecked: false
        },
        {
          id: 3,
          typeId: 'apartment',
          roomCount: 1,
          bathroomCount: 1.5,
          bedCount: 1,
          desc: '鼓浪屿,厦大,中山路,体育中心旁单身公寓,大浴缸➕投影房 莲坂地铁口100米特价房',
          realPrice: 159,
          originPrice: 199,
          star: 13,
          isPlusChecked: false
        }
      ]
    })
  } else {
    return request.get('/common/get-destination-house')
  }
}

export function getDestinationCity () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getDestinationCity success',
      data: [
        {
          id: 'Beijing',
          name: '北京',
          houseCount: 35000
        },
        {
          id: 'Shanghai',
          name: '上海',
          houseCount: 39000
        },
        {
          id: 'Chongqin',
          name: '重庆',
          houseCount: 21000
        },
        {
          id: 'Chengdu',
          name: '成都',
          houseCount: 29000
        },
        {
          id: 'Hangzhou',
          name: '杭州',
          houseCount: 19000
        }
      ]
    })
  } else {
    return request.get('/common/get-destination-city')
  }
}

export function getGlobalHouse () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getGlobalHouse success',
      data: [
        {
          id: 0,
          typeId: 'apartment',
          roomCount: 1,
          bathroomCount: 1,
          bedCount: 1,
          desc: 'room3厦大沙坡尾大学路正街独立卫生间',
          realPrice: 89,
          originPrice: 99,
          star: 6,
          isPlusChecked: true
        },
        {
          id: 1,
          typeId: 'room',
          roomCount: 1,
          bathroomCount: 1,
          bedCount: 1,
          desc: '《壹所设计》全新ins/近厦大/曾厝安/环岛路/白城沙滩/投影大床',
          realPrice: 134,
          originPrice: 149,
          star: 148,
          isPlusChecked: false
        },
        {
          id: 2,
          typeId: 'loft',
          roomCount: 0,
          bathroomCount: 1.5,
          bedCount: 1,
          desc: '泡泡椅(投影仪)一线无遮挡海景房',
          realPrice: 178,
          originPrice: 189,
          star: 11,
          isPlusChecked: false
        },
        {
          id: 3,
          typeId: 'apartment',
          roomCount: 1,
          bathroomCount: 1.5,
          bedCount: 1,
          desc: '鼓浪屿,厦大,中山路,体育中心旁单身公寓,大浴缸➕投影房 莲坂地铁口100米特价房',
          realPrice: 159,
          originPrice: 199,
          star: 13,
          isPlusChecked: false
        }
      ]
    })
  } else {
    return request.get('/common/get-global-house')
  }
}

export function getTravelStory () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getGlobalHouse success',
      data: [
        {
          id: 1,
          city: {
            id: 'Guangzhou',
            name: '广州'
          },
          summary: '房东说，欢迎体验你的 “珠江之夜”。',
          likeCount: 37,
          commentCount: 3
        },
        {
          id: 2,
          city: {
            id: 'Taizhou',
            name: '台州'
          },
          summary: '去这家深藏最美渔村的海边石墅 赏一场不容错过的东海日出！',
          likeCount: 65,
          commentCount: 2
        },
        {
          id: 3,
          city: {
            id: 'Bangkok',
            name: '曼谷'
          },
          summary: '曼谷有座四合院，隐秘又惊艳',
          likeCount: 63,
          commentCount: 4
        },
        {
          id: 4,
          city: {
            id: 'Waxford',
            name: '威克斯福德'
          },
          summary: '为了体验地道的爱尔兰乡村风情，我竟然住进城堡马厩！',
          likeCount: 19,
          commentCount: 0
        }
      ]
    })
  } else {
    return request.get('/common/get-travel-story')
  }
}

export function getQualityActivity () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getGlobalHouse success',
      data: [
        {
          id: 0,
          country: {
            id: 'Germany',
            name: '德国'
          },
          introduce: 'Dogs Go Green - Walk with the Pack',
          price: 439,
          score: 4.99,
          star: 101
        },
        {
          id: 1,
          country: {
            id: 'Italy',
            name: '意大利'
          },
          introduce: 'The Secrets of Parmigiano Reggiano',
          price: 639,
          score: 4.98,
          star: 806
        },
        {
          id: 2,
          country: {
            id: 'Indonesia',
            name: '印度尼西亚'
          },
          introduce: 'Bali Healer and Holy Bathing Tour',
          price: 4496,
          score: 4.95,
          star: 334
        },
        {
          id: 3,
          country: {
            id: 'Japan',
            name: '日本'
          },
          introduce: 'Feeling Samurai Soul',
          price: 629,
          score: 4.99,
          star: 1000
        }
      ]
    })
  } else {
    return request.get('/common/get-quality-activity')
  }
}
