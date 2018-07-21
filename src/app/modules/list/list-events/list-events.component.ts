import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  events: Array<Object>;

  constructor( private eventServices: EventService) { }

  getEvents() {
      return this.events;
  }

  getAll() {
      var res = <any>{};
      this.eventServices.getAll().then(
          (result) => {
              res = result;
              this.events = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
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
      this.getAll()
  }

}
