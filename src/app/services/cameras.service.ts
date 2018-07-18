import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  constructor(private authService: AuthService, private httpClient: HttpClient) { }

  getAll() {
      return new Promise(
        (resolve, reject) => {
            const options = {
                headers : {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': this.authService.getToken(),
                  'Access-Control-Allow-Origin': '*'
                }
            };
            this.httpClient.get("http://localhost:3000/device/camera/", options).subscribe(
                (data) => {
                    resolve(data);
                },
                (error) => {
                    console.log(error)
                    reject(error);
                }
            )
        }
      )
  }
}
