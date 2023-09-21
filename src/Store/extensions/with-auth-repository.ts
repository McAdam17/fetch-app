import { AuthRepository } from "Repositories";
import { Environment } from "Store/enviroment";
import { IStateTreeNode, getEnv } from "mobx-state-tree";

export const withAuthRepository = (self: IStateTreeNode) => ({
  views: {
    get authRepository() : AuthRepository{
      const env = getEnv<Environment>(self)
      return new AuthRepository(env.api)
    }
  }
})