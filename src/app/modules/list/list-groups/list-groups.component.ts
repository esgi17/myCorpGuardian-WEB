import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { GroupService } from '../../../services/group.service';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.css']
})
export class ListGroupsComponent implements OnInit {
    selectedGroup:Object;
    groups: Array<Object>;

    @Input() lastSelected: string;
    @Output() activeGroup = new EventEmitter<Object>();

    constructor( private groupService: GroupService, private router : Router) { }

    getStyle() {
        switch( this.router.url ) {
            case '/home' :
                return ''
            case '/user' :
                return 'half_height'
            case '/event' :
                break;
            case '/device' :
                break;
        }
    }

    isSelected(id) {
        var res = <any>{};
        res = this.selectedGroup;
        if( res !== undefined && res.id == id ) {
            return true;
        }
        return false;
    }

    groupExist() {
      if( this.groups !== undefined && this.groups.length > 0 ) {
          return true;
      }
      return false;
    }

    selectActiveGroup(group) {
        this.selectedGroup = group;
        this.activeGroup.emit(group);
    }

    loadGroupUsers() {
        return new Promise(
            (resolve, reject) => {
                var group = <any>{};
                group = this.selectedGroup;
                this.groupService.getUsers(group.id)
                    .then(
                        (result) => {
                            var res = <any>{};
                            var users = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                            resolve(users)
                        },
                        (error) => {
                            reject(error);
                        }
                    )
            }
        )
    }

    getAll() {
        var res = <any>{};
        this.groupService.getAll()
            .then(
                (result) => {
                     res = result;
                     this.groups = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
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
