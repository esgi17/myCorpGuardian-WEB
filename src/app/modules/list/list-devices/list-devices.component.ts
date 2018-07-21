import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../../../services/device.service';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css']
})
export class ListDevicesComponent implements OnInit {
    devices: Array<Object>;
    selectedDevice: {};
    constructor( private router : Router, private deviceService : DeviceService, private eventService : EventService) { }

    @Output() activeDevice = new EventEmitter<Object>();

    isSelected(id) {
        var res = <any>{};
        res = this.selectedDevice;
        if( res !== undefined && res.id == id )
            return true;

        return false;
    }

    selectActiveDevice(device) {
        this.selectedDevice = device;
        this.loadDeviceEvent()
            .then(
                (result) => {
                    var res = <any>{}
                    res = this.selectedDevice;
                    res.event = result;
                    console.log(res);
                    this.activeDevice.emit(res);
                },
                (error) => {
                    console.log(device);
                    this.activeDevice.emit(device);
                }
            )
    }

    loadDeviceEvent() {
        return new Promise(
            (resolve, reject) => {
                var device = <any>{};
                device = this.selectedDevice;
                this.eventService.getEventsFromDevice(device.id)
                    .then(
                        (result) => {
                          var res = <any>{};
                          res = result;
                          var events = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                          resolve(events);
                        },
                        (error) => {
                            reject(error)
                        }
                    )
                    .catch( (err) => {
                        console.log(err);
                        reject(err);
                    });
            }
        )
    }

    getAll() {
        var res = <any>{};
        this.deviceService.getAll()
            .then(
                (result) => {
                     res = result;
                     // this.devices = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                     this.devices = <Array<Object>>Object.keys(res.datas).map( key => {
                        if( res.datas[key].deviceType.name != "Pass" ) {
                            console.log(res.datas[key]);
                            return res.datas[key];
                        }
                      });
                      console.log(this.devices);
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
