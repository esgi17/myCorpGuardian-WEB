import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {

    @Input() activeUser: {};

    constructor( ) { }

    eventsExist() {
      var res = <any>{};
      res = this.activeUser
      if( res.events !== undefined && res.events.length > 0 ) {
          return true;
      }
      return false;
    }
}
