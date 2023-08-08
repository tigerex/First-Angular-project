import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public router: Router,public authService:AuthenticationService){}

  home(){
    this.router.navigate(['/']);
  }

  showRoom(){
    this.router.navigate(['/showroom']);
  }

  contactUs(){
    this.router.navigate(['/contact']);
  }

  info(){
    this.router.navigate(['/catFacts']);
  } 

  logOut(){
    this.authService.logout();
  }
  logIn(){
    this.authService.login();
  }
}


