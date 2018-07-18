import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: Array<Object>;

  constructor( private usersService : UsersService ) { }

  getUsers() {
      return this.users;
  }

  getAll() {
      var res = <any>{};
      this.usersService.getAll().then(
          (result) => {
              res = result;
              this.users = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
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
