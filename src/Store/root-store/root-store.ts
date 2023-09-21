import { AuthStoreModel } from "Domain/index";
import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const RootStoreModel = types
  .model("RootStore")
  .props({
    authStore: types.optional(AuthStoreModel, {} as any)
  })

// exporting the instance type
export interface RootStore extends Instance<typeof RootStoreModel> {}

// exporting the data model type
export interface RootStoreSnapshoot extends SnapshotOut<typeof RootStoreModel> {}