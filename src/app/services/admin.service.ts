import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private apiService: ApiService ) { }

  getAllCorps() {
      return new Promise(
          (resolve, reject) => {
              this.apiService.get("corp")
                  .then(
                      (result) => {
                          resolve(result);
                      },
                      (error) => {
                          reject(error);
                      }
                  )
          }
      )
  }

  getUsersFromCorp(id) {
      return new Promise(
          (resolve, reject) => {
              this.apiService.get("corp/" + id)
                  .then(
                      (result) => {
                          resolve(result);
                      },
                      (error) => {
                          reject(error);
                      }
                  )
          }
      )
  }

  changeCorpName(id, corpName) {
      return new Promise(
          (resolve, reject) => {
              this.apiService.put("corp/"+id, { name : corpName })
                  .then(
                      (result) => {
                          resolve(result);
                      },
                      (error) => {
                          reject(error);
                      }
                  )
          }
      )
  }

  changeCorpUrl(id, corpUrl) {
      return new Promise(
          (resolve, reject) => {
              this.apiService.put("corp/"+id, { db_url : corpUrl })
                  .then(
                      (result) => {
                          resolve(result);
                      },
                      (error) => {
                          reject(error);
                      }
                  )
          }
      )
  }

  changeCorpDbName(id, corpDbName) {
      return new Promise(
          (resolve, reject) => {
              this.apiService.put("corp/"+id, { db_name : corpDbName })
                  .then(
                      (result) => {
                        console.log("to");
                          resolve(result);
                      },
                      (error) => {
                          reject(error);
                      }
                  )
          }
      )
  }

  changeCorpDbLogin(id, corpDbLogin) {
      return new Promise(
          (resolve, reject) => {
              this.apiService.put("corp/"+id, { db_login : corpDbLogin })
                  .then(
                      (result) => {
                          resolve(result);
                      },
                      (error) => {
                          reject(error);
                      }
                  )
          }
      )
  }

  changeCorpDbPassword(id, corpDbPassword) {
      return new Promise(
          (resolve, reject) => {
              this.apiService.put("corp/"+id, { db_password : corpDbPassword })
                  .then(
                      (result) => {
                          resolve(result);
                      },
                      (error) => {
                          reject(error);
                      }
                  ).catch( (err) => {
                      console.log(err);
                  })
          }
      )
  }

  updateCorp(id, datas) {
      var res = <any>{};
      res = datas
      return new Promise(
          (resolve, reject) => {
              this.apiService.put('corp/' + id, res)
                  .then( (result) => {
                      resolve(result);
                  }, (error) => {
                      console.log(error);
                      reject(error);
                  }).catch((err)=> {
                      console.log(err);
                      reject(err)
                  });

          }
      )
  }

  createCorp(datas) {
      var res = <any>{};
      res = datas
      return new Promise(
          (resolve, reject) => {
              this.apiService.post('corp', res)
                  .then(
                      (result) => {
                          resolve(result);
                      },
                      (error) => {
                          console.log(error);
                          reject(error);
                      }
                    ).catch( (err) => {
                      console.log(err);
                        reject(err);
                    })
          }
      )
    }

    deleteCorp(id) {
        return new Promise(
            (resolve, reject) => {
                this.apiService.delete('corp/' + id)
                    .then(
                        (result) => {
                            resolve(result);
                        },
                        (error) => {
                            console.log(error);
                            reject(error);
                        }
                    ).catch( (err) => {
                        console.log(err);
                        reject(err);
                    })
            }
        )
    }

    createUser(datas) {
        return new Promise(
            (resolve, reject) => {
                this.apiService.post('admin/', datas)
                    .then(
                        (result) => {
                            resolve(result);
                        },
                        (error) => {
                            console.log(error);
                            reject(error);
                        }
                    )
                    .catch( (err) => {
                        reject(err);
                    })
            }
        )
    }
}
