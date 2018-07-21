import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent {
    selectedUser:{};
    users: Array<Object>;

    @Input() lastSelected: string;
    @Output() activeUser = new EventEmitter<Object>();
    constructor( private userService : UserService, private eventService: EventService ) {
    }

    isSelected(id) {
        var res = <any>{};
        res = this.selectedUser;
        if( res !== undefined && res.id == id ) {
            return true;
        }
        return false;
    }

    usersExist() {
        if( this.users !== undefined && this.users.length > 0 ) {
            return true;
        }
        return false;
    }

    selectActiveUser(user) {
        this.selectedUser = user;
        this.loadUserEvents()
            .then(
                (result) => {
                    var res = <any>{};
                    res = this.selectedUser;
                    res.event = result;
                    console.log(res);
                    this.activeUser.emit(res);
                },
                (error) => {
                    this.activeUser.emit(user);
                }
            )
    }

    loadUserEvents() {
        return new Promise(
            (resolve, reject) => {
              var user = <any>{};
              user = this.selectedUser;
              this.userService.getPass(user.id)
                    .then(
                        (result) => {
                            console.log(result);
                            var res = <any>{};
                            res = result;
                            console.log(res);
                            var pass_id = res.datas[0].id;
                            this.eventService.getEventsFromPass(pass_id)
                                .then(
                                    (result) => {
                                        var res = <any>{};
                                        res = result;
                                        var events = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                                        resolve(events);
                                    },
                                    (error) => {
                                        reject(error)
                                      console.log(error)
                                    }
                                )
                                .catch( (err) => {
                                      console.log(err);
                                      reject(err);
                                });
                        },
                        (error) => {
                            reject(error);
                        }
                    )
                    .catch( (err) => {
                        console.log(err);
                    })
            }
        )
    }

    getAll() {
        var res = <any>{};
        this.userService.getAll()
            .then(
                (result) => {
                     res = result;
                     this.users = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
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

    ngOnInit() {
        this.getAll();
    }
}
