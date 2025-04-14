import { Component } from '@angular/core';

declare var Calendly: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
