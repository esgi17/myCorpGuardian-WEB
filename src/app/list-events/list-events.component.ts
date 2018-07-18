import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  events: Array<Object>;

  constructor( private eventsServices: EventsService) { }

  getEvents() {
      return this.events;
  }

  getAll() {
      var res = <any>{};
      this.eventsServices.getAll().then(
          (result) => {
              res = result;
              this.events = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
              console.log(this.events);
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
