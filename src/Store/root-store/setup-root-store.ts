import { Environment } from "Store/enviroment"
import { RootStore, RootStoreModel } from "./root-store"

export const createEnviroment = async () => {
  const env = new Environment()
  return env
}

export const setupRootStore = async () => {
  let rootStore: RootStore

  const env = await createEnviroment()

  rootStore = RootStoreModel.create({},env)

  return rootStore
}