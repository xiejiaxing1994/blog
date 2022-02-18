import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
export function getHomeTianQi(params) {
  return new Promise((resolve, reject) => {
    axios({
      url: 'https://www.yiketianqi.com/free/day',
      method: 'get',
      params
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        Message({
          message: '天气接口出问题了',
          type: 'error',
          duration: 5 * 1000
        })
        reject(res)
      }
    })
  })
}

// http://timor.tech/api/holiday 假期接口文档
function holidayAPI(url, params) {  
  console.log(url)
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}${params ? params.date : ''}`,
      method: 'get',
      params
    }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        resolve(res.data.holiday)
      } else {
        Message({
          message: '假期接口出问题了',
          type: 'error',
          duration: 5 * 1000
        })
        reject(res)
      }
    })
  })
}

export async function getHolidayNext(params) {
  return await holidayAPI('http://timor.tech/api/holiday/next/', params)
}
export async function getHolidayYear(params) {
  return await holidayAPI('http://timor.tech/api/holiday/year/', params)
}
