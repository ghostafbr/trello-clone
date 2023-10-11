import { Component } from '@angular/core';
import { faClose, faInfoCircle, faBell } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpen: boolean = false;
  isOpenBody: boolean = false;
  faClose = faClose;
  faInfoCircle = faInfoCircle;
  faBell = faBell;

}
