import axios from "axios";
import { Message, MessageBox } from "element-ui";
import {
  ERR_MESSAGE_SHOW_DURATION,
  REQ_OVERTIME_DURATION,
  RES_PERMISSION_DENIED_CODE,
  RES_SUCCESS_DEFAULT_CODE,
  RES_UNAUTHORIZED_CODE
} from "./constants";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: REQ_OVERTIME_DURATION // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== RES_SUCCESS_DEFAULT_CODE) {
      if (res.code === RES_UNAUTHORIZED_CODE) {
        MessageBox.confirm(
          "您已经登出，您可以取消以停留在此页面，或再次登录",
          "确认注销",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
          logout();
        });
      } else if (res.code === RES_PERMISSION_DENIED_CODE) {
        Message({
          message: res.desc || res.message || "Error",
          type: "error",
          duration: ERR_MESSAGE_SHOW_DURATION
        });
        setTimeout(() => {
          logout();
        }, 1000);
      } else {
        Message({
          message: res.desc || res.message || "Error",
          type: "error",
          duration: ERR_MESSAGE_SHOW_DURATION
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err", error); // for debug
    Message({
      message: error.desc || error.message || "服务器出错",
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export function post(endpoint, params) {
  return service.post(endpoint, params);
}

export function get(endpoint, params) {
  return service.get(endpoint, {
    params: { ...params }
  });
}

export default service;
