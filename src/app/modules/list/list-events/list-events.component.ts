import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  events: Array<Object>;

  constructor( private eventServices: EventService, private router : Router) { }

  getEvents() {
      return this.events;
  }

  isHome() {
      if( this.router.url == '/home') {
          return true;
      }
      return false;
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
