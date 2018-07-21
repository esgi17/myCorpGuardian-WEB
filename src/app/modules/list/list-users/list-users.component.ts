import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
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

    @Output() activeUser = new EventEmitter<Object>();
    constructor( private userService : UserService, private eventService: EventService ) {
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
                            var res = <any>{};
                            var pass_id = result[0].id;

                            this.eventService.getEventsFromPass(pass_id)
                                .then(
                                    (result) => {
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
                                }
                            )
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
