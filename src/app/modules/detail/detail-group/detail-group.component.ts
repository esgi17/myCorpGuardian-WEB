import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.css']
})
export class DetailGroupComponent implements OnInit {

    @Input() activeGroup: {};

    constructor() { }

    usersExist() {
        var res = <any>{};
        res = this.activeGroup
        if( res.users !== undefined && res.users.length > 0 ) {
            return true;
        }
        return false;
    }

    ngOnInit() {
    }

}
