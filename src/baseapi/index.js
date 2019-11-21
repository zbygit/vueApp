import axios from 'axios'
// 提取公共部分路径信息进行文件路径简写
axios.defaults.baseURL="/static/"



//请求的拦截
axios.interceptors.request.use((config)=>{
config.headers.a="1234"
console.log(config);
return config
})
//数据响应的拦截
axios.interceptors.response.use((res)=>{
    return res.data;
})
//axios是封装的promise
export let getBanner=function () {
    // get(url)  url代表路径

    return axios.get('data/banner.json');//promise实例
}
export let gethotlist=function () {
    return axios.get('data/hotlist.json');
}

