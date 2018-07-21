import { Component, OnInit, ViewChild } from '@angular/core';
import { ListUsersComponent} from '../../modules/list/list-users/list-users.component';
import { ListEventsComponent} from '../../modules/list/list-events/list-events.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    /*** Récupération des composants ***/
    // List Users
    @ViewChild(ListUsersComponent)
    private listUsersComponent: ListUsersComponent;

    // List Events
    @ViewChild(ListEventsComponent)
    private listEventsComponent: ListEventsComponent;

    constructor() { }


    ngOnInit() {

    }

}
