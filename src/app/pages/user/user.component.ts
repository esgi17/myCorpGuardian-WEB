import { Component, OnInit, ViewChild } from '@angular/core';
import { ListUsersComponent } from '../../modules/list/list-users/list-users.component';
import { ListGroupsComponent } from '../../modules/list/list-groups/list-groups.component';
import { DetailUserComponent } from '../../modules/detail/detail-user/detail-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    activeUser: Object;
    activeGroup: Object;
    lastSelected: String;

    /*** Récupération des composants ***/
    // List Users
    @ViewChild(ListUsersComponent)
    private listUsersComponent: ListUsersComponent;

    @ViewChild(ListGroupsComponent)
    private listGroupsComponent: ListGroupsComponent;

    @ViewChild(DetailUserComponent)
    private detailUserComponent: DetailUserComponent;

    // List Events
    // @ViewChild(ListEventsComponent)
    // private listEventsComponent: ListEventsComponent;

    constructor() { }


    loadActiveUser($event) {
        this.activeUser = $event;
        this.lastSelected = "user";
    }

    loadActiveGroup($event) {
        this.activeGroup = $event;
        this.lastSelected = "group";
    }

    isActiveUser() {
        if( this.lastSelected != "user" ) {
            return false;
        }
        return true;
    }

    isActiveGroup() {
      if( this.lastSelected != "group" ) {
          return false;
      }
      return true;
    }

    ngOnInit() {
    }

}
