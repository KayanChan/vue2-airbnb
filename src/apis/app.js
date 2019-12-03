import request from '@/utils/request'
import config from '@/utils/config'

export function getLanguages () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getLanguages success',
      data: [
        {
          id: 'Chinese-Simple',
          name: '中文简体'
        },
        {
          id: 'Chinese-traditional',
          name: '中文繁体'
        },
        {
          id: 'English',
          name: '英语'
        }
      ]
    })
  } else {
    return request.get('/common/get-languages')
  }
}

export function getCurrencies () {
  if (config.isMockData) {
    return Promise.resolve({
      code: 0,
      msg: 'getCurrencies success',
      data: [
        {
          id: 'CNY',
          name: 'CNY人民币'
        },
        {
          id: 'USD',
          name: 'USD美元'
        }
      ]
    })
  } else {
    return request.get('/common/get-currencies')
  }
}
