import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-edit-corp',
  templateUrl: './edit-corp.component.html',
  styleUrls: ['./edit-corp.component.css']
})
export class EditCorpComponent implements OnInit {
    editCorpForm: FormGroup;

    @Input() activeCorp: {};
    constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {
        this.initForm();
    }

    initForm() {
        this.editCorpForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,20}$/)]],
            db_url: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,40}$/)]],
            db_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,25}$/)]],
            db_login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,20}$/)]],
            db_pwd: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{2,20}$/)]]
        });
    }

    submit() {
        const name = this.editCorpForm.get("name").value;
        const db_url = this.editCorpForm.get("db_url").value;
        const db_name = this.editCorpForm.get("db_name").value;
        const db_login = this.editCorpForm.get("db_login").value;
        const db_pwd = this.editCorpForm.get("db_pwd").value;

        const datas = {
            name : name,
            db_url : db_url,
            db_name : db_name,
            db_login : db_login,
            db_pwd : db_pwd
        }
        var res = <any>{};
        res = this.activeCorp
        console.log(res);
        this.adminService.updateCorp(res.id, datas)
            .then( (result) => {
                console.log("ok");
                alert("Corp has been modified");
            })
            .catch( (error) => {
                console.log(error);
            })
            return true;
        // this.adminService.createCorp(datas)
        //     .then( (result) => {
        //         console.log(result);
        //         this.router.navigate(['/admin']);
        //     })
        //     .catch( (err) => {
        //         console.log(err);
        //     })
        //     return true;
    }

    ngOnInit() {
    }

}
