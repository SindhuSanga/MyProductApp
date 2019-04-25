import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../services/authentication.service';
import { UserService, AuthenticationService } from '../services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
}

ngOnInit() {
    this.loadAllUsers();
}

ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
}

deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
        this.loadAllUsers()
    });
}

private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.users = users;
    });
}


    slides = [
      {
        image: "assets/images/slider1.jpg"
      },
      {
        image: "assets/images/slider2.jpg"
      },
      {
        image: "assets/images/slider3.jpg"
      },
      {
        image: "assets/images/slider4.jpg"
      }
    ];

}
