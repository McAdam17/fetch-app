import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";

export const UserModel = types
  .model("User")
  .props({
    name: types.string,
    email: types.string
  })

export interface UserModel extends Instance<typeof UserModel> {}
export interface UserModelSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserModelSnapshotIn extends SnapshotIn<typeof UserModel> {}