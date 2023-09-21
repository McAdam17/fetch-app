import { Api, createApi } from "Services/API/api";

export class Environment {
  api: Api
  constructor() {
    this.api = createApi()
  }
}