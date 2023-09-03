import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-1',
  templateUrl: './badge.component.html'
})
export class AppBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
