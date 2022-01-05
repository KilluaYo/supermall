import axios from 'axios';

// 列入第三方框架时，最好先封装，再使用
// 1.封装axios，config是对象，传入接口参数，success和failure是函数
// export function request(config, success, failure) {
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/hy66',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config).then(res => {
//         success(res)
//     }).catch(err => {
//         failure(err)
//     })
// }

// 2.只有一个参数的封装方式
// export function request(config) {
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/hy66',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config.baseConfig).then(res => {
//         config.success(res)
//     }).catch(err => {
//         config.failure(err)
//     })
// }

// 3.与promise结合使用
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://152.136.185.210:7878/api/hy66',
//             timeout: 5000
//         })
//         // 发送真正的网络请求
//         instance(config)
//             .then(res => {  //这里的then和catch是axios提供的
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

// 4.与Promise结合，简略版
export function request(config) {
    // （1）创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    // （2）axios的拦截器——请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config);  //成功拦截URL的配置
        return config;  //返回出去，否则就被拦截了
    }, err => {
        // console.log(err);
    })

    //响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);  //响应结果
        // return res;   //要return出去，否则就被拦截了
        return res.data;   //可以只返回数据
    }, err => {
        console.log(err);
    })

    // （3）发送真正的网络请求
    // 由于instance返回的就是Promise，所以不用再写
    return instance(config)
}