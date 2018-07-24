import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { AdminService } from '../../../services/admin.service';
import { UserService } from '../../../services/user.service';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-corp',
  templateUrl: './list-corp.component.html',
  styleUrls: ['./list-corp.component.css']
})
export class ListCorpComponent implements OnInit {
    corps: Array<Object>;
    users: Array<Object>;
    selectedCorp: Object;
    modifyName = false;
    modifyUrl = false;
    modifyDbName = false;
    modifyDbLogin = false;
    modifyDbPassword = false;
    closeResult: string;

    @Output() activeCorp = new EventEmitter<Object>();
    constructor( private adminService: AdminService, private modalService: NgbModal, private userService: UserService, private router : Router) { }


    getStyle() {
        switch( this.router.url ) {
            case '/admin' :
                return 'half_height'
        }
    }

    isSelected(id) {
        var res = <any>{};
        res = this.selectedCorp;
        if( res !== undefined && res.id == id ){
            return true;
        }
        return false;
    }

    selectActiveCorp(corp) {
        this.selectedCorp = corp;
        this.loadCorpUsers()
            .then(
                (result) => {
                    console.log(result);
                    var res = <any>{}
                    res = this.selectedCorp;
                    res.users = result;
                    this.activeCorp.emit(res);
                },
                (error) => {
                    this.activeCorp.emit(corp);
                }
            )
    }

    loadCorpUsers() {
        return new Promise(
            (resolve, reject) => {
                var corp = <any>{};
                corp = this.selectedCorp;
                this.adminService.getUsersFromCorp(corp.id)
                    .then(
                        (result) => {
                            var res = <any>{};
                            res = result;
                            var users =  <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                            resolve(users);
                        },
                        (error) => {
                            console.log(error);
                            reject(error);
                        }
                    )
                    .catch( (err) => {
                        console.log(err);
                        reject(err);
                    })
            }
        )
    }

    getAll() {
        var res = <any>{};
        this.adminService.getAllCorps()
            .then(
                (result) => {
                      res = result;
                      this.corps = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                      console.log(this.corps);
                 },
                 (error) => {
                     console.log(error);
                 }
            ).catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    changeCorpName(id, corpName) {
        this.modifyName = false;
        if( corpName === undefined || corpName == "") {
            return true;
        }
        if( confirm('Are you sure you want to change the name of this corporation for : ' + corpName + ' ?') ) {
            this.adminService.changeCorpName(id, corpName)
                .then(
                    (result) => {
                        this.ngOnInit();
                    },
                    (error) => {
                        return false;
                    }
                )
                .catch( (err) => {
                    return false;
                })
        }

    }

    changeCorpUrl(id, corpUrl) {
        this.modifyUrl = false;
        if( corpUrl === undefined || corpUrl == "") {
            return true;
        }
        if( confirm('Are you sure you want to change the name of this corporation for : ' + id + corpUrl + ' ?') ) {
            this.adminService.changeCorpUrl(id, corpUrl)
                .then(
                    (result) => {
                        this.ngOnInit();
                    },
                    (error) => {
                        return false;
                    }
                )
                .catch( (err) => {
                    return false;
                })
        }

    }

    changeCorpDbName(id, corpDbName) {
        this.modifyDbName = false;
        if( corpDbName === undefined || corpDbName == "") {
            return true;
        }
        if( confirm('Are you sure you want to change the name of the database for : ' + corpDbName + ' ?') ) {
            this.adminService.changeCorpDbName(id, corpDbName)
                .then(
                    (result) => {

                        this.ngOnInit();
                    },
                    (error) => {
                        return false;
                    }
                )
                .catch( (err) => {
                    return false;
                })
        }
    }

    changeCorpDbLogin(id, corpDbLogin) {
        this.modifyDbLogin = false;
        if( corpDbLogin === undefined || corpDbLogin == "") {
            return true;
        }
        if( confirm('Are you sure you want to change the name of the database for : ' + corpDbLogin + ' ?') ) {
            this.adminService.changeCorpDbLogin(id, corpDbLogin)
                .then(
                    (result) => {

                        this.ngOnInit();
                    },
                    (error) => {
                        return false;
                    }
                )
                .catch( (err) => {
                    return false;
                })
        }
    }

    changeCorpDbPassword(id, corpDbPassword) {
        this.modifyDbPassword = false;
        if( corpDbPassword === undefined || corpDbPassword == "") {
            return true;
        }
        if( confirm('Are you sure you want to change the name of the database for : ' + corpDbPassword + ' ?') ) {
            this.adminService.changeCorpDbPassword(id, corpDbPassword)
                .then(
                    (result) => {

                        this.ngOnInit();
                    },
                    (error) => {
                        return false;
                    }
                )
                .catch( (err) => {
                    return false;
                })
        }
    }

    deleteCorp(corp) {
        if( confirm('Are you sure you want de delete this Corp ? ' + corp.name)) {
            this.adminService.deleteCorp(corp.id)
                .then( (result) => {
                    alert(corp.name + "has been deleted");
                    this.ngOnInit();
                })
                .catch( (err) => {
                    console.log(err);
                });
        }
    }

    addUserCorp(corp) {
        console.log(corp)
        this.selectActiveCorp(corp)
    }

    ngOnInit() {
        this.getAll();
    }



}
