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
        this.setHeaders();
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
        this.headers = {
            'Authorization' : this.getToken() || '',
            'Access-Control-Allow-Origin': '*'
        }
    }

    get( route:string ) {
        return new Promise(
            (resolve, reject) => {
                var options = {
                    headers : this.getHeaders()
                }
                console.log(options);
                console.log(this.api + route);
                this.httpClient.get(this.api + route, options).subscribe(
                    (data) => {
                        console.log("***** Debug => (api.service) ****** ");
                        console.log(data);
                        console.log("***** Fin debug => (api.service) ******");
                        resolve(data);
                    },
                    (error) => {
                        console.log(error);
                        reject(error);
                    }
                )
            }
        )
    }

    post( route:string, datas:Object) {
        return new Promise(
            (resolve, reject) => {
                var options = {
                    headers : this.getHeaders()
                }
                this.httpClient.post(this.api + route, datas, options).subscribe(
                    (data) => {
                        console.log(data);
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
