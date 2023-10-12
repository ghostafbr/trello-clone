import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogRef} from "@angular/cdk/dialog";
import {faClose, faCheckToSlot, faBars, faCheckSquare, faClock, faTag, faUser} from "@fortawesome/free-solid-svg-icons";
import {BtnComponent} from "../btn/btn.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [CommonModule, BtnComponent, FontAwesomeModule],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  private dialogRefService = inject(DialogRef);

  close() {
    this.dialogRefService.close();
  }

}
