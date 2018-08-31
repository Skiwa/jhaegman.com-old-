import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TweenMax, TimelineMax, Back, Expo, Power2} from 'gsap/TweenMax';
import {Portfolio} from '../models/portfolio';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit, OnDestroy {
  current;
  scrolled = false;
  rotation = true;
  interval;

  constructor(private router: Router) {
    this.current = new Portfolio();

    // interval
    this.interval = setInterval(() => {
        if (this.rotation) {
          this.next(true);
        }
      }, 5000);
  }

  ngOnInit() {
    this.scrolled = false;
    // show banner
    this.appearAll();
    // show elements
    this.fadeLoad();

    // show first img
    document.getElementById('img' + this.current.short).style.display = 'inherit';

    // event listener
    setTimeout(() => {
      document.getElementById('showcase').addEventListener('wheel', (e) => {
        this.scrollEvent(e);
      });
    }, 1000);

    // key listener
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 37) {
        this.previous();
      } else if (event.keyCode === 39) {
        this.next(false);
      }
    });

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  scrollEvent(e) {
    if (!this.scrolled) {
      if (e.deltaY < 0 ) {
        this.router.navigate(['skills']);
      } else {
        this.router.navigate(['about']);
      }
    }
  }

  // show banner
  appearAll() {
    const tl = new TimelineMax();
    tl.add('start');
    tl.fromTo('#showcaseFooterMainPoly', .5, {scaleX: 0}, {scaleX: 1}, 'start+=0.25');
    tl.fromTo('#showcaseFooterMainPoly path', .5, {opacity: 0}, {opacity: 0.9}, 'start+=0.75');
    tl.fromTo('#showcaseFooterOutsidePoly', .75, {scaleX: 0}, {scaleX: 1}, 'start+=0.5');
  }


  previous() {
    this.rotation = false;
    this.imageFadeOut();
    this.fade();
    this.current.previous();
    window.setTimeout(() => {
      this.imageFadeIn();
    }, 200);
  }

  next(automatisation) {
    // automatisation: difference between interval and user click
    if (!automatisation) {
      clearInterval(this.interval);
    }
    this.imageFadeOut();
    this.fade();
    this.current.next();
    window.setTimeout(() => {
      this.imageFadeIn();
    }, 200);
  }

  goto(id) {
    if (this.current.id !== id) {
      this.rotation = false;
      this.imageFadeOut();
      this.fade();
      this.current.goto(id);
      window.setTimeout(() => {
        this.imageFadeIn();
      }, 200);
    }
  }

  // used for angular fixes
  getNumber(num) {
    return new Array(num);
  }

  fade() {
    // show description
    TweenMax.fromTo('.showcaseDescription', 2, {opacity: 0, x: -100}, {opacity: 1, x: 0, ease: Expo.easeOut});
  }

  fadeLoad() {
    const tl = new TimelineMax;
    tl.add('start');
    tl.fromTo('.showcaseDescription', 1.5, {opacity: 0, x: -100}, {opacity: 1, x: 0, ease: Expo.easeOut}, '.5');
    tl.fromTo('.showcasePreview', 1, {opacity: 0, y: -100}, {opacity: 1, y: 0, ease: Back.easeOut}, '0.75');

    // navigation
    tl.fromTo('.previousBlock', 1.5, {opacity: 0}, {opacity: 1, ease: Expo.easeOut}, '.5');
    tl.fromTo('.nextBlock', 1.5, {opacity: 0}, {opacity: 1, ease: Expo.easeOut}, '.5');
    }

  imageFadeOut() {
    TweenMax.to('.showcasePreview #img' + this.current.short, .25, {opacity: 0, ease: Expo.easeIn});
    window.setTimeout(() => {
      document.getElementById('img' + this.current.short).style.display = 'none';
    }, 25);
  }

  imageFadeIn() {
      document.getElementById('img' + this.current.short).style.display = 'inherit';
      TweenMax.fromTo('.showcasePreview #img' + this.current.short, .5, {opacity: 0}, {opacity: 1, ease: Power2.easeOut}, '');
  }
}
