import { Component, OnInit } from '@angular/core';
import { AppBadgeService } from './badge.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-badge-1',
  templateUrl: './badge.component.html'
})
export class AppBadgeComponent implements OnInit {
  public user:any;
  constructor(private Service: AppBadgeService,
    private http: HttpClient ) { }
    
  // Service.getuserconnect().subscribe((data) =>{this.user = data
  //     console.log("data=",data)
  //   },(error)=>{console.error('error:',error)} );
  ngOnInit(): void {
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
