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

  constructor( private authService: AuthService, private router: Router) {
      console.log(localStorage.getItem('isLogged'));
      this.authService.checkLogin().then( (data:object) => {

          localStorage.setItem('isLogged', "1")
          this.router.navigate(['/home'])
      })
      .catch( (err) => {

          console.log(err);
          //this.authService.isLogged = false;
          localStorage.setItem('isLogged', "0")
          this.router.navigate(['/login'])
      });

      //console.log(this.authService.checkLogin())
      //this.authService.checkLogin();
      //this.isLogged = sessionStorage.getItem('logged')
      //console.log(this.isLogged)
  }

  get checkLogin() : boolean {
      if( localStorage.getItem('isLogged') == "1" ) {
          console.log("Connected");
          return true;
      }
      console.log("Not connected");
      return false;
  }

}
