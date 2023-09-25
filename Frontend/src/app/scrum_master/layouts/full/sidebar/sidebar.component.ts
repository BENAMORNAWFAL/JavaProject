import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../../services/nav.service';

@Component({
  selector: 'app-sidebarscrum',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponentscrum implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
