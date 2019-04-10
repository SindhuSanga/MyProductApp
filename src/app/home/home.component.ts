import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
