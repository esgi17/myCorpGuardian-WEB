import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    isLogged = false;

    constructor( private authService: AuthService, private router: Router) {
        this.authService.checkLogin();
        if( this.authService.isLogged )
            this.router.navigate(['/home']);
        else
            this.router.navigate(['/login']);

        //console.log(this.authService.checkLogin())
        //this.authService.checkLogin();
        //this.isLogged = sessionStorage.getItem('logged')
        //console.log(this.isLogged)
    }

    get checkLogin() : boolean {
        return this.isLogged;
    }

}
