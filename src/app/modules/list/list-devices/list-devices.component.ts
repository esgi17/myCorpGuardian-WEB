import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../../../services/device.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css']
})
export class ListDevicesComponent implements OnInit {
    devices: Array<Object>;
    constructor( private router : Router, private deviceService : DeviceService) { }

    getAll() {
        var res = <any>{};
        this.deviceService.getAll()
            .then(
                (result) => {
                     res = result;
                     this.devices = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
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
