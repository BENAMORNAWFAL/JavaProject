import { Component, OnInit } from '@angular/core';
import { AppBadgeService } from './badge.service'
@Component({
  selector: 'app-badgescrum',
  templateUrl: './badge.component.html'
})
export class AppBadgescrumComponent implements OnInit {
  user:any;
  constructor(private Service:AppBadgeService) { }

  ngOnInit(): void {
    this.Service.getuserconnect().subscribe((data) =>{this.user = data},(error)=>{console.error('error:',error)} );
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
