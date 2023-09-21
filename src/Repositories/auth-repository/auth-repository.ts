import { UserModelSnapshotOut } from "Models";
import { RepositoryResult } from "Repositories/types";
import { Api } from "Services/API/api";

export class AuthRepository {
  api: Api
  constructor(api: Api){
    this.api = api
  }

  async authenticate(name: string, email:string) : Promise<RepositoryResult<UserModelSnapshotOut,null>>{
    let status = true
    const response = await this.api.executePost("/auth/login",{
      name,
      email
    })

    try{
      if(response.kind!=="OK"){
        status = false
      }
      
    }catch(e){
      status = false
    }

    if(status){
      return {
        isOk: true,
        model: {
          name: name,
          email: email,
        }
      }
    }

    return {
      isOk: false,
      error: null
    }
    
  }
}