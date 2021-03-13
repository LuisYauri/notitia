import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-menu-ciudadano',
  templateUrl: './header-menu-ciudadano.component.html',
  styleUrls: ['./header-menu-ciudadano.component.scss']
})
export class HeaderMenuCiudadanoComponent implements OnInit {

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
    this.router.navigate(['/list']);
  }

  logout(): void {
    this.router.navigate(['/inicio']);
  }

}
