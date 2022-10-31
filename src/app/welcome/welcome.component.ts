/**
 * Modify this file to fetch and display the login details
 */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  user: any; // type this variable using user.type.ts file
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.getUsers().subscribe((result) => {
      this.user = result;
      console.log(this.user);
    });
  }

  ngOnDestroy() {}
}
