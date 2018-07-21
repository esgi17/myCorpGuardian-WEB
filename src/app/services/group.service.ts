import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor( private apiService: ApiService) { }

  getAll() {
      return new Promise(
          (resolve, reject) => {
              this.apiService.get("group")
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

  getUsers(id) {
      return new Promise(
          (resolve, reject) => {
                this.apiService.get("group/" + id)
                .then(
                    (result) => {
                        console.log(result);
                        resolve(result);
                    },
                    (error) => {
                        reject(error);
                    }
                )
                .catch( (err) => {
                    console.log(err);
                })
          }
      )
  }
}
