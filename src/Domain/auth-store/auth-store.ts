import { UserModel,UserModelSnapshotOut } from "Models";
import { withAuthRepository } from "Store/extensions/with-auth-repository";
import { withEnviroment } from "Store/extensions/with-enviroment";
import { Instance, SnapshotIn, SnapshotOut, cast, types } from "mobx-state-tree";

export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    user: types.maybe(UserModel)
  })
  .extend(withEnviroment)
  .extend(withAuthRepository)
  .actions((self) => ({
    isAuthenticated () {
      return !!self.user
    },
    setUser(user : UserModelSnapshotOut){
      self.user = cast(user)
    }
  }))
  .actions((self) => ({
    async login(name: string, email: string) {
      const result = await self.authRepository.authenticate(name,email)
      if (result.isOk){
        self.setUser(result.model)
      }
    }
  }))

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshotOut extends SnapshotOut<typeof AuthStoreModel> {}
export interface AuthStoreSnapshotIn extends SnapshotIn<typeof AuthStoreModel> {}
export const createAuthStoreDefaultModel = () => types.optional(AuthStoreModel, {})