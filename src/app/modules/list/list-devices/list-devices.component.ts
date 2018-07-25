import { Component, OnInit, AfterViewInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../../../services/device.service';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css']
})
export class ListDevicesComponent implements OnInit, AfterViewInit {
    devices: Array<Object>;
    doors : Array<Object>;
    captors : Array<Object>;
    selectedDevice: {};
    nbDevices = 0;

    constructor( private router : Router, private deviceService : DeviceService, private eventService : EventService) { }

    @Output() activeDevice = new EventEmitter<Object>();

    getStyle() {
        switch( this.router.url ) {
            case '/home' :
                return 'half_height'
            case '/user' :
                return 'half_height'
            case '/event' :
                return 'half_height'
            case '/device' :
                return 'full_height'
        }
    }

    isSelected(id) {
        var res = <any>{};
        res = this.selectedDevice;
        if( res !== undefined && res.id == id )
            return true;

        return false;
    }

    devicesExist() {
      if( this.devices !== undefined && this.devices.length > 0 ) {
          return true;
      }
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
                    this.activeDevice.emit(res);
                },
                (error) => {
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
                            console.log(result);
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
                      this.devices = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
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

    getAllDoors() {
        return new Promise(
            (resolve, reject) => {
              var res = <any>{};
              this.deviceService.getDeviceTypeId('Door')
                  .then(
                      (result) => {
                          res = result;
                          console.log(res.datas[0].id);
                          this.deviceService.getAllDoors(res.datas[0].id)
                              .then(
                                  (result) => {
                                      res = <any>{};
                                      res = result;
                                      console.log(res);
                                      this.doors = Object.keys(res.datas).map( key => res.datas[key]);

                                      console.log(this.doors);
                                      resolve(this.doors);
                                  },
                                  (error) => {
                                      reject(error);
                                      console.log(error);
                                  })
                                .catch(
                                 (error) => {
                                    reject(error);
                                     console.log(error);
                                 });
                      }
                  )
            }
        )


    }

    getAllCaptors() {
        return new Promise (
            (resolve, reject) => {
                var res = <any>{};
                this.deviceService.getDeviceTypeId('Captor')
                    .then(
                          (result) => {
                          res = result;
                          console.log(res.datas[0].id);
                            this.deviceService.getAllCaptors(res.datas[0].id)
                                .then(
                                    (result) => {
                                        res = <any>{};
                                        res = result;
                                        console.log(result);
                                        this.captors = Object.keys(res.datas).map( key => res.datas[key]);
                                        console.log(this.captors);
                                        resolve(this.captors);
                                    },
                                    (error) => {
                                        reject(error);
                                        console.log(error);
                                    })
                                  .catch(
                                   (error) => {
                                     reject(error);
                                       console.log(error);
                                   });
                          },
                          (error) => {
                            reject(error);
                              console.log(error);
                          })
                        .catch( (err) => {
                            reject(err);
                            console.log(err);
                        })
                }
        )


    }

    ngOnInit() {
        if( this.router.url == '/event') {
            this.devices = [];
            this.getAllDoors()
                .then(
                    (result) => {
                        this.getAllCaptors()
                            .then(
                                (result) => {
                                    console.log(this.doors);
                                    this.devices = this.captors.concat(this.doors);
                                },
                                (error) => {
                                    console.log(error);
                                }
                            )
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        } else {
            this.getAll();

        }
    }

    ngAfterViewInit() {
    }

}
