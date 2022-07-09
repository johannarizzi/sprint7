import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  
  public starter:boolean;

  constructor() {
    this.starter = false;
   }

  ngOnInit(): void {}
    
    showHome() {

      this.starter = true;

    }
}
