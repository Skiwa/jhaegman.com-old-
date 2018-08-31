import {Component, Input} from '@angular/core';
import { routerTransition } from './router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'app';
  scrolledInput;

  constructor() {
    console.log('%c flat' + '%c is' + '%c not' + '%c dead', 'font-size: 1.3em;font-family: "Comic Sans MS";color: magenta', 'font-size: 1.3em;font-family: "Comic Sans MS";color: orange', 'font-size: 1.3em;font-family: "Comic Sans MS";color: red', 'font-size: 1.3em;font-family: "Comic Sans MS";color: cyan');

  }
  scrolled(event) {
    this.scrolledInput = 'done';
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
