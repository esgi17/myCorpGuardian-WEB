import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    activeDevice: Object;
    constructor() { }

    loadActiveDevice($event) {
        this.activeDevice = $event;
    }

    isActiveDevice() {
        if( this.activeDevice !== undefined ) {
            return true;
        } else {
            return false;
        }
    }

    ngOnInit() {
    }

}
