import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

    constructor( private apiService: ApiService) { }

    getAll() {
        return new Promise(
            (resolve, reject) => {
                  this.apiService.get("device")
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

    getAllCaptors(id) {
      return new Promise(
          (resolve, reject) => {
                this.apiService.get("device?device_type_id="+id)
                    .then(
                        (result) => {
                            console.log(result);
                            resolve(result);
                        },
                        (error) => {
                            reject(error);
                        }
                    )
          }
      )
    }

    getAllDoors(id) {
        console.log(id);
        return new Promise(
            (resolve, reject) => {
                  this.apiService.get("device?device_type_id=" + id)
                      .then(
                          (result) => {
                              console.log(result);
                              resolve(result);
                          },
                          (error) => {
                              reject(error);
                          }
                      )
            }
        )
    }

    getDeviceTypeId(name) {
        return new Promise(
            (resolve, reject) => {
                  this.apiService.get("deviceType?name=" + name)
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

}
