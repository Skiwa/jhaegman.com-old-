import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  scrolled = false;

  constructor(private route: Router) {}

  ngOnInit() {
    document.getElementById('footerPart').addEventListener('wheel', (e) => {
      this.scrollEvent(e);
    });
    document.getElementById('aboutPart').addEventListener('wheel', (e) => {
      this.scrollEvent(e);
    });
  }

  scrollEvent(e) {
    if (!this.scrolled) {
      if (e.deltaY < 0 ) {
        this.scrolled = true;
        this.route.navigate(['portfolio']);
      }
    }
  }
}
