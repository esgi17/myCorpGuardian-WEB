import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor( private apiService: ApiService) { }

    getAll() {
        return new Promise(
            (resolve, reject) => {
                this.apiService.get("user")
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

    getPass(id) {
        return new Promise(
            (resolve, reject) => {
                this.apiService.get("pass/" + id)
                    .then(
                        (data) => {
                            resolve(data);
                        },
                        (error) => {
                            reject(error);
                        }
                    )
            }
        )
    }

}
