const Mock = require('mockjs');
let musicList = [{
  name: '舞女泪',
  artist: '刘晓超',
  url: 'https://other-web-nf01-sycdn.kuwo.cn/a070d41691ea30164c7100db8ab46fad/61cae2cf/resource/n3/61/23/2878374540.mp3',
  cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300',
  lrc: '',
},]

export default [
    {
        url: '/music/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: musicList
            }
        }
    }
]