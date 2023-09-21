import { Environment } from "Store/enviroment";
import { IStateTreeNode, getEnv } from "mobx-state-tree";

export const withEnviroment = (self: IStateTreeNode) => ({
  views: {
    get enviroment() {
      return getEnv<Environment>(self)
    }
  }
})