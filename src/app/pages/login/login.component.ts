import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: '';
  password: '';

  constructor(private router: Router)  {
  }

  ngOnInit(): void {
  }

  loginView(): void {
    // @ts-ignore
    if (this.email === 'universidadpablodeolavide@gmail.com') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/ciudadano']);
    }
  }
}
