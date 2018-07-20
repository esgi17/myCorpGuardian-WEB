import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
        this.initForm();
    }

    get login() {
      return this.loginForm.get("login");
    }

    get password() {
      return this.loginForm.get("password");
    }

    initForm() {
        this.loginForm = this.formBuilder.group({
            login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{3,16}$/)]],
            password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9#/$/^+=!/*/(/)@%]{3,15}$/)]]
        });
    }

    submit() {
        //console.log(this.loginForm.value);
        const login = this.loginForm.get('login').value;
        const password = this.loginForm.get('password').value;

        const datas = {
            'login' : login,
            'password' : password
        }
        if( this.authService.login(datas) ) {
              this.router.navigate(['/home']);
        }else {
            alert("nope");
        }


          // console.log(this.loginForm.get('login').value);
          // this.authService.login(datas).then(
          //     (result) => {
          //         res = result;
          //         if( res !== undefined ) {
          //             localStorage.setItem('token', res.token);
          //
          //         }
          //     },
          //     (error) => {
          //         console.log(error);
          //     }
          // )
    }

    ngOnInit() {

    }


}
