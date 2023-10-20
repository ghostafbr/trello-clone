import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "@services/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})

export class LayoutComponent implements OnInit {

  private authService = inject(AuthService);

  constructor() {
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(() => {
      console.log('Profile loaded');
    });
  }

}
