import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

    constructor( private apiService: ApiService) { }

    getAll() {
        return new Promise(
            (resolve, reject) => {
                  this.apiService.get("event")
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

    getEventsFromPass(id) {
        return new Promise(
            (resolve, reject) => {
                this.apiService.get("event?id_pass=" + id)
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
