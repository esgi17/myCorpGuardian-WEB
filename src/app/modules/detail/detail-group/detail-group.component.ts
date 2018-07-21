import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.css']
})
export class DetailGroupComponent implements OnInit {

    @Input() activeGroup: {};

    constructor() { }

    ngOnInit() {
    }

}
