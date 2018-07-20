import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    headers: {};
    token: String;
    api = "http://localhost:3000/";
    constructor( private httpClient : HttpClient ) {
        this.headers = this.setHeaders();
    }

    getToken() {
        return this.token;
    }

    setToken(token) {
        this.token = token;
    }

    getHeaders() {
        return this.headers;
    }

    setHeaders():Object {
        return {
            'Authorization' : this.getToken(),
            'Access-Control-Allow-Origin': '*'
        }
    }

    get( route:string ) {
        return new Promise(
            (resolve, reject) => {
                var options = {
                    headers : this.getHeaders()
                }
                this.httpClient.get(this.api + route, options).subscribe(
                    (data) => {
                        console.log("***** Debug => (api.service) ****** ");
                        console.log(data);
                        console.log("***** Fin debug => (api.service) ******");
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
