/**
 * 接口请求封装
 * @author jianghong.wei
 * @since 2022-09-15 11:09:42
 */

import axios, { Method, AxiosRequestConfig } from "axios";

const http = axios.create();

http.interceptors.response.use(
  function (res) {
    if (res.status === 200 || res.status === 304) {
      // 如果返回类型是json，直接返回json里的data字段
      if (res.headers['content-type'].includes('application/json')) {
        return res.data.data;
      }
      return res.data;
    }
    return Promise.reject(res);
  },
  function (err) {
    return Promise.reject(err);
  }
);

export const fetch = function <T = any>(
  method: Method,
  url: string,
  options: AxiosRequestConfig = {}
) {
  return http({
    method,
    url,
    ...options
  }) as unknown as T;
};

export const get = function <T = any>(url: string, options: AxiosRequestConfig = {}) {
  return fetch<T>("GET", url, options);
};

export const post = function <T = any>(url: string, data?: T, options: AxiosRequestConfig = {}) {
  return fetch<T>("POST", url, {
    data,
    ...options
  });
};

export const put = function <T = any>(url: string, data?: T, options: AxiosRequestConfig = {}) {
  return fetch<T>("PUT", url, {
    data,
    ...options
  });
};

export const del = function <T = any>(url: string, options: AxiosRequestConfig = {}) {
  return fetch<T>("DELETE", url, options);
};

export default {
  fetch, get, post, put, del
}