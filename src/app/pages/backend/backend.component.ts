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
  createCorpActive: Boolean;
  editCorpActive: Boolean;
  addUserActive: Boolean;

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

   loadCreateCorp($event, content) {
      if( $event ) {
          this.createCorpActive = $event;
          this.openModal(content)
              .then( () => {
                  this.createCorpActive = false;
              })
              .catch( (err) => {
                  console.log(err);
              })
      }
   }

   loadEditCorp($event, content) {
      this.activeCorp = $event;
      this.editCorpActive = true;
      this.openModal(content)
          .then( () => {
              this.activeCorp = null;
              this.editCorpActive = false;
          })
   }

   loadActiveCorp($event, content) {
        this.activeCorp = $event;
        this.addUserActive = true;
        this.openModal(content)
            .then( () => {
                this.activeCorp = null;
                this.addUserActive = false;
            })
            .catch( (err) => {
                console.log(err);
            })
   }

   openModal(content) {
      return new Promise(
          (resolve, reject) => {
              this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
                  this.closeResult = `Closed with: ${result}`;
                  resolve();
              }, (reason) => {
                  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                  resolve();
              }).catch(
                  (err) => {
                      reject(err);
                  }
              );
          }
      )

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
