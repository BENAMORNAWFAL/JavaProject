import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-listsDevscrum',
  templateUrl: './listsdev.component.html',
})
export class AppListsscrumDevComponent {
  constructor() { }

  Array = new Array(40);
  
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

  formData = {
    task: '',
    priority: ''
  };
  submittedData: any[] = [];
  editingIndex: number = -1;
  onSubmit() {
    if (this.editingIndex === -1) {
      console.log('Form data submitted:', this.formData);
      this.submittedData.push({ ...this.formData });
    } else {
      // Update an existing task
      this.submittedData[this.editingIndex] = { ...this.formData };
      this.editingIndex = -1; // Reset editingIndex
    }
    // Clear the form
    this.formData = {
      task: '',
      priority: ''
    };
  }
  editTask(index: number) {
    // Set the editingIndex to the selected task for editing
    this.editingIndex = index;
    // Populate the form fields with the selected task's data
    this.formData = { ...this.submittedData[index] };
  }
  deleteTask(index: number) {
    // Delete the task at the specified index
    this.submittedData.splice(index, 1);
    // If the task being edited is deleted, reset editingIndex
    if (this.editingIndex === index) {
      this.editingIndex = -1;
      // Clear the form fields
      this.formData = {
        task: '',
        priority: ''
      };
    }
  }
}
