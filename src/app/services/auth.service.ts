import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLogged:boolean;
    contentType:string;
    accessControlAllowOrigin:string;
    constructor(private httpClient: HttpClient) { };

    /**
    * Récupération du token
    */
    getToken() {
        return localStorage.getItem('token');
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    /**
    * Authentification
    **/
    login( datas ) {
      var res = <any>{};
      return new Promise(
          (resolve, reject) => {
              console.log(datas);
              //res = datas;
              const options = {
                 headers: {
                     
                     'Access-Control-Allow-Origin': '*'
                 }
              };
              this.httpClient.post("http://localhost:3000/", datas, options ).subscribe(
                  (data) => {
                      res = data
                      this.setToken(res.token);
                      localStorage.setItem('isLogged', "1")
                      resolve(res);
                  },
                  (error) => {
                    console.log("bonjour");
                      console.log(error)
                      localStorage.setItem('isLogged', "0")
                      this.isLogged = false;
                      reject(error);
                  }
              )
          }
      )
    }

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
                const options = {
                   headers: {
                       'Content-Type': 'application/x-www-form-urlencoded',
                       'Authorization': this.getToken(),
                       'Access-Control-Allow-Origin': '*'
                   }
                };
                this.httpClient.get("http://localhost:3000/", options).subscribe(
                    (data) => {
                        resolve(1);
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        )
    }
}
