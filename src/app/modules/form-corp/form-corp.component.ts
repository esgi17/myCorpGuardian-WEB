import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-corp',
  templateUrl: './form-corp.component.html',
  styleUrls: ['./form-corp.component.css']
})
export class FormCorpComponent implements OnInit {
    corpForm: FormGroup;
    @Input() activeCorp: {};
    constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {
        this.initForm();
    }

    initForm() {
        this.corpForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,20}$/)]],
            db_url: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,40}$/)]],
            db_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,25}$/)]],
            db_login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,20}$/)]],
            db_pwd: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,20}$/)]]
        });
    }


    submit() {
        const name = this.corpForm.get("name").value;
        const db_url = this.corpForm.get("db_url").value;
        const db_name = this.corpForm.get("db_name").value;
        const db_login = this.corpForm.get("db_login").value;
        const db_pwd = this.corpForm.get("db_pwd").value;

        const datas = {
            name : name,
            db_url : db_url,
            db_name : db_name,
            db_login : db_login,
            db_pwd : db_pwd
        }

        this.adminService.createCorp(datas)
            .then( (result) => {
                console.log(result);
                this.router.navigate(['/admin']);
            })
            .catch( (err) => {
                console.log(err);
            })
            return true;
    }

    ngOnInit() {
    }

}
