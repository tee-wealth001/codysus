import { Component } from '@angular/core';

declare var Calendly: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  showCalendly = false;

  loadCalendly() {
    this.showCalendly = true;

    setTimeout(() => {
      Calendly.initInlineWidget({
        url: 'https://calendly.com/stephentoriola',
        parentElement: document.getElementById('calendly-container'),
        prefill: {},
        utm: {}
      });
    }, 0); // Let Angular render the div before initializing
  }

  cancelCalendly() {
    const container = document.getElementById('calendly-container');
    if (container) container.innerHTML = '';
    this.showCalendly = false;
  }

}
