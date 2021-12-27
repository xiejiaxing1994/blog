const Mock = require('mockjs');
const List = [{
    id: 0,
    siteName: "XJX′ Blog",
    path: "https://xiejiaxing1994.github.io/blog/",
    desc: "一条咸鱼"
}]

let friendList = [{
    id: 1,
    siteName: "ZZK′ Blog",
    path: "",
    desc: "给凯儿留的地方"
},{
    id: 2,
    siteName: "ZZQ′ Blog",
    path: "",
    desc: "给熊儿留的地方"
}]
List.push(...friendList)

export default [
    {
        url: '/friend',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: List
            }
        }
    }
]