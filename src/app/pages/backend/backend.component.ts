import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  activeCorp : Object;
  closeResult: string;

  constructor( private authService: AuthService, private modalService: NgbModal, private router: Router) {
      this.authService.checkLogin()
          .then(
              (data) => {
                  if( sessionStorage.getItem('isAdmin') == "1" ) {

                      this.router.navigate(['/admin']);
                  } else {
                        console.log(sessionStorage.getItem('isAdmin'));
                        this.router.navigate(['/home']);
                  }
              },
              (error) => {
                  this.router.navigate(['/login']);
              }
          )
   }

   loadActiveCorp($event, content) {
      this.activeCorp = $event;
      this.open(content, 'addUser', $event.id);
   }



   open(content, type, data) {
       switch( type ) {
           case 'addUser' :
               this.openModal(content);
               console.log(type);
               break;
           case 'deleteCorp' :
               break;
           case 'createCorp' :
               break;
           case 'deleteUser' :
               break;
       }


   }

   openModal(content) {
       this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
   }

   private getDismissReason(reason: any): string {
       if (reason === ModalDismissReasons.ESC) {
           return 'by pressing ESC';
       } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
           return 'by clicking on a backdrop';
       } else {
           return  `with: ${reason}`;
       }
   }

  ngOnInit() {
      if( sessionStorage.getItem('isAdmin') == "1" && this.router.url == '/admin') {
          this.router.navigate(['/admin'])
      }
  }

}
