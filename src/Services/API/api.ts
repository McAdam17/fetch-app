import {API_URL} from "Config/env"
import * as Types from "./api.types"
import axios, { AxiosInstance } from "axios"

export class Api {
  axios : AxiosInstance = {} as AxiosInstance
  constructor(baseURL: string, { headers }:Types.ApiConfig = {}){
    this.axios = axios.create({
      baseURL,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        ...headers
      },
     // withCredentials: true
    })
  }

  async executeGet<T>(path: string, params?:any): Promise<Types.ApiResult<T>>{
    const response = await this.axios.get(path, {
      params
    })

    if (response.status!==200) {
      return { kind: response.statusText}
    }

    return { kind: "OK", payload: response.data as T}
  }

  async executePost<T>(path: string, data?:any): Promise<Types.ApiResult<T>>{
    const serialized = JSON.stringify(data);
    const response = await this.axios.post(path,serialized)

    if (response.status!==200) {
      return { kind: response.statusText}
    }

    return { kind: "OK", payload: response.data as T}
  }
}

export const createApi = () => {
  const api = new Api(API_URL)
  return api
}