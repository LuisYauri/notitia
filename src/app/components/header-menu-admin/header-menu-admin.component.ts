import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-menu-admin',
  templateUrl: './header-menu-admin.component.html',
  styleUrls: ['./header-menu-admin.component.scss']
})
export class HeaderMenuAdminComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  openReview(): void {
    this.router.navigate(['/inicio']);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  openDataSet(): void {
    this.router.navigate(['/admin/add']);
  }

  openStatics(): void {
    this.router.navigate(['/admin']);
  }

  logout(): void {
    this.router.navigate(['/inicio']);
  }
}
