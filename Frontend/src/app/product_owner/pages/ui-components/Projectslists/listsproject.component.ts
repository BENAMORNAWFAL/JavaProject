import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}


export interface Project {
  name: string;
  status: string;
  progress: number;
}

@Component({
  selector: 'app-listsProject-1',
  templateUrl: './listsproject.component.html',
})
export class AppProjectsListsComponent {
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


  projects: Project[] = [
    {
      name: 'Project 1',
      status: 'In Progress',
      progress: 50, // Set the progress percentage (0-100)
    },
    {
      name: 'Project 2',
      status: 'Completed',
      progress: 100,
    },
    {
      name: 'Project 3',
      status: 'In Progress',
      progress: 75,
    },
    {
      name: 'Project 4',
      status: 'On Hold',
      progress: 25,
    },
    {
      name: 'Project 5',
      status: 'Completed',
      progress: 100,
    },
  ];
}
