import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    addUserForm: FormGroup;

    @Input() activeCorp: {};
    constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {
        this.initForm();
        console.log(this.activeCorp);
    }

    initForm() {
        this.addUserForm = this.formBuilder.group({
            login : ['', Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,20}$/)],
            password : ['', Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,20}$/)],
            admin : undefined
        })
    }

    addUser() {
        const login = this.addUserForm.get("login").value;
        const password = this.addUserForm.get("password").value;
        const isAdmin = this.addUserForm.get("admin").value;

        var res = <any>{};
        res = this.activeCorp
        const id = res.id;
        console.log(id);
        const datas = {
            login : login,
            password : password,
            isAdmin : isAdmin,
            corp_id : id
        }
        console.log(datas);
        this.adminService.createUser(datas)
            .then( (result) => {

            })
            .catch( (err) => {
                console.log(err);
            })
    }

    ngOnInit() {
    }

}
