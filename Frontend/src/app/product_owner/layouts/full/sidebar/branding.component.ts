import { Component } from '@angular/core';

@Component({
  selector: 'app-branding-1',
  template: `
    <div class="branding">
      <a href="/homepage" style="text-decoration: none;">
      <h1 class="taskmaster-connect">TaskMaster <span class="connect">Connect</span></h1>
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
