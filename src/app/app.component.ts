import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  auth;

  constructor(public af: AngularFire) {

  }

  ngOnInit() {
    this.af.auth.subscribe((response) => {
      if (response) {
        this.auth = response.auth;
      }
    })
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
