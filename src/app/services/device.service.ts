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
}
