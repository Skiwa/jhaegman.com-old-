import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TweenMax} from 'gsap/tweenmax';

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


    // navigation
    TweenMax.to(' .navigationFooter', 1, {opacity: 1});
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
    TweenMax.to(' .navigationFooter', 1, {opacity: 0});
    document.removeEventListener('keyup', this.keyEventStorage);
    this.route.navigate(['portfolio']);
  }


}
