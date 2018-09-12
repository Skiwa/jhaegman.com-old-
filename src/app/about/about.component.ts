import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  scrolled = false;
  keyEventStorage;

  constructor(private route: Router) {}

  ngOnInit() {
    document.getElementById('footerPart').addEventListener('wheel', (e) => {
      this.scrollEvent(e);
    });
    document.getElementById('aboutPart').addEventListener('wheel', (e) => {
      this.scrollEvent(e);
    });

    // Key event listener
    this.keyEventStorage = this.navigateUp.bind(this);
    document.addEventListener('keyup', this.keyEventStorage);
  }

  scrollEvent(e) {
    if (!this.scrolled) {
      if (e.deltaY < 0 ) {
        this.scrolled = true;
        this.navigateUp();
      }
    }
  }

  navigateUp() {
    document.removeEventListener('keyup', this.keyEventStorage);
    this.route.navigate(['portfolio']);
  }


}
