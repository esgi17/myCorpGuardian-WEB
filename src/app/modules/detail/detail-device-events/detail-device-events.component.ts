import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-device-events',
  templateUrl: './detail-device-events.component.html',
  styleUrls: ['./detail-device-events.component.css']
})
export class DetailDeviceEventsComponent implements OnInit {

    @Input() activeDevice: {};

    constructor() { }

    ngOnInit() {
    }

}
