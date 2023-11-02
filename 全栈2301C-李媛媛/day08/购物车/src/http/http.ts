import axios from "axios";
import { showLoadingToast } from 'vant';

class http {
    instance: any
    constructor(baseConfig: any) {
        this.instance = axios.create(baseConfig);
        // 添加请求拦截器
        this.instance.interceptors.request.use((config: any) => {
            // 在发送请求之前做些什么
            showLoadingToast({
                message: '加载中...',
                forbidClick: true,
            });
            let token = localStorage.getItem('token')
            if (token) {
                config.headers.Authorizationc = token
            }
            return config;
        },);

        // 添加响应拦截器
        this.instance.interceptors.response.use((response: any) => {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            showLoadingToast({
                message: '加载中...',
                forbidClick: true,
            }).close()
            return response;
        },);
    }
    get(url: string, params?: any) {
        return this.instance.get(url, { params })
    }
    post(url: string, params?: any) {
        return this.instance.post(url, params)
    }
    put(url: string, params?: any) {
        return this.instance.put(url, params)
    }
    delete(url: string, params?: any) {
        return this.instance.delete(url, params)
    }
}
export default new http({
    baseURL: "https://api.it120.cc/xiaochengxu/"
})