import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public isLogged:boolean;
    // contentType:string;
    // accessControlAllowOrigin:string;
    constructor(private apiService : ApiService) { };

    /**
    * Récupération du token
    */
    // getToken() {
    //     return localStorage.getItem('token');
    // }
    //
    // setToken(token: string) {
    //     localStorage.setItem('token', token);
    // }



    /**
    * Authentification
    **/
    login( datas ) {
        return new Promise(
            (resolve, reject) => {
                this.apiService.post("", datas)
                  .then(
                      (data) => {
                          console.log(data);
                          this.isLogged = true;
                          resolve(data);
                      },
                      (error) => {
                          console.log(error);
                          this.isLogged = false;
                          reject(error);
                      }
                  )
            }
        )
    }
    // login( datas ) {
    //
    //   var res = <any>{};
    //   return new Promise(
    //       (resolve, reject) => {
    //           console.log(datas);
    //           //res = datas;
    //           const options = {
    //              headers: {
    //                  'Access-Control-Allow-Origin': '*'
    //              }
    //           };
    //           this.httpClient.post("http://localhost:3000/", datas, options ).subscribe(
    //               (data) => {
    //                   res = data
    //                   this.setToken(res.token);
    //                   localStorage.setItem('isLogged', "1")
    //                   resolve(res);
    //               },
    //               (error) => {
    //                 console.log("bonjour");
    //                   console.log(error)
    //                   localStorage.setItem('isLogged', "0")
    //                   this.isLogged = false;
    //                   reject(error);
    //               }
    //           )
    //       }
    //   )
    // }

    logout() {
      localStorage.setItem('isLogged', "0");
      localStorage.setItem('token', '');
    }

    /**
    * Verification de la connexion
    */
    checkLogin() {
        return new Promise(
            (resolve, reject) => {
                this.apiService.get("").then(
                    (data) => {
                        this.isLogged = true;
                        resolve();
                    },
                    (error) => {
                        this.isLogged = false;
                        reject();
                    }
                )
            }
        )


    }
}
