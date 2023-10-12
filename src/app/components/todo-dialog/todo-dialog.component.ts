import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {faClose, faCheckToSlot, faBars, faCheckSquare, faClock, faTag, faUser} from "@fortawesome/free-solid-svg-icons";
import {BtnComponent} from "../btn/btn.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TodoModel} from "../../models/todo.model";

interface inputData {
  todo: TodoModel;
}

interface outputData {
  resp: boolean;
}

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

  todo: TodoModel;

  private dialogRefService = inject(DialogRef<outputData>);
  private data: inputData = inject(DIALOG_DATA);

  constructor() {
    this.todo = this.data.todo;
  }

  close(resp: boolean = false) {
    this.dialogRefService.close({resp});
  }

}
