import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

export interface ScrumMaster {
  name: string;
  updated: Date;
  project: string;
}

@Component({
  selector: 'app-listsScrum-1',
  templateUrl: './lists.component.html',
 
})
export class AppListsComponent {
  constructor() {}
  
  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  scrumMasters: ScrumMaster[] = [
    {
      name: 'Scrum Master 1',
      updated: new Date('1/1/16'),
      project: 'Project 1',
    },
    {
      name: 'Scrum Master 2',
      updated: new Date('1/17/16'),
      project: 'Project 4',
    },
    {
      name: 'Scrum Master 3',
      updated: new Date('1/28/16'),
      project: 'Project 3',
    },
  ];
}
