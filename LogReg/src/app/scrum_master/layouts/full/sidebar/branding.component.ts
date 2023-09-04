import { Component } from '@angular/core';

@Component({
  selector: 'app-brandingscrum',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/dark-logo.svg"
          class="align-middle m-2"
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponentscrum {
  constructor() {}
}
