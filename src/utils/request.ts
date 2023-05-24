import { message } from 'antd';
import axios from "axios";
import {config} from "process"
import Nprogress from "nprogress"

const request = axios.create({
    baseURL: 'http://dida100.com:8080',
    timeout: 50000
})

request.interceptors.request.use( config => {
    let token = sessionStorage.getItem("token");
    Nprogress.start()
    if(token){
        config.headers["Authorization"] = "Bearar" + token
    }
    return config
})

request.interceptors.response.use(
    res => {
        Nprogress.done()
        if(res.status === 401){
            message.info("没有权限")
        }else if(res.status === 500 || res.status === 501){
            message.info("服务器内部异常")
        }else if(res.status === 404){
            message.info("404找不到页面")
        }else {
            message.info("请求错误")
        }
        if(res.status === 200){
            return res.data
        }else {
            return res
        }
    },
    err => {
        Nprogress.done()
        message.info("请求错误");
        console.log(err);
        return err
    }
)

export default request