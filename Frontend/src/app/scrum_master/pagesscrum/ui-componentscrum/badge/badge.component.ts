import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badgescrum',
  templateUrl: './badge.component.html'
})
export class AppBadgescrumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
