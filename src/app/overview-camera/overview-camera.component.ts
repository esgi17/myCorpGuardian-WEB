import { Component, OnInit } from '@angular/core';
import { CamerasService } from '../services/cameras.service';

@Component({
  selector: 'app-overview-camera',
  templateUrl: './overview-camera.component.html',
  styleUrls: ['./overview-camera.component.css']
})
export class OverviewCameraComponent implements OnInit {
  cameras: Array<Object>;

  constructor( private camerasService: CamerasService) { }

  getCameras() {
      return this.cameras;
  }

  getAll() {
      var res = <any>{};
      this.camerasService.getAll().then(
          (result) => {
              res = result;
              this.cameras = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
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

  loadCamera(camera) {
      // @TODO Chargement du flux video (HTTP / RTSP ?)
      console.log(camera)
  }

  ngOnInit() {
      this.getAll();
  }

}
