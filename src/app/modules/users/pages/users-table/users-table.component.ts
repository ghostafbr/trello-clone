import {Component, inject, OnInit} from '@angular/core';

import {DataSourceUser} from './data-source';
import {UsersService} from "@services/users.service";
import {User} from "@models/user.model";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {

  private userService = inject(UsersService);

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor() {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.dataSource.init(users);
    });
  }

}
