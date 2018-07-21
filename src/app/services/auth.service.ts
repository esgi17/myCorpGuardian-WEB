import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
        var res = <any>{};
        return new Promise(
            (resolve, reject) => {
                this.apiService.post("", datas)
                  .then(
                      (data) => {
                          res = data;
                          sessionStorage.setItem('isLogged', "1");
                          sessionStorage.setItem('token', res.token);
                          resolve(data);
                      },
                      (error) => {
                          console.log(error);
                          sessionStorage.setItem('isLogged', "0");
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
      sessionStorage.setItem('isLogged', "0");
      sessionStorage.setItem('token', '');
    }

    /**
    * Verification de la connexion
    */
    checkLogin() {
        return new Promise(
            (resolve, reject) => {
                this.apiService.get("").then(
                    (data) => {
                        sessionStorage.setItem('isLogged', "1");
                        resolve(data);
                    },
                    (error) => {
                        sessionStorage.setItem('isLogged', "0");
                        reject(error);
                    }
                )
            }
        )


    }
}
