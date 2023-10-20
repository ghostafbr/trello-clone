import {Component, inject, OnInit} from '@angular/core';

import {DataSourceUser} from './data-source';
import {UsersService} from "@services/users.service";
import {User} from "@models/user.model";
import {AuthService} from "@services/auth.service";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {

  private userService = inject(UsersService);
  private authService = inject(AuthService);

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  user: User | null = null;

  constructor() {}

  ngOnInit() {
    this.getUsers();

    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.dataSource.init(users);
    });
  }

}
