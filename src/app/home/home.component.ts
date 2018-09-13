import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TweenMax, TimelineMax} from 'gsap/TweenMax';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  revealed;
  scrolled = false;
  keyEventStorage;
  constructor(private router: Router) {}

  ngOnInit() {
    this.scrolled = false;
    this.appearAll();

    // scroll listener
    setTimeout(() => {
      document.getElementById('home').addEventListener('wheel', (e) => {
        this.scrollEvent(e);
      });

      // Key event listener
      this.keyEventStorage = this.keyUpHandler.bind(this);
      document.addEventListener('keyup', this.keyEventStorage);
    }, 750);


  }

  appearAll() {
    // banner
    const tl = new TimelineMax();
    tl.add('start');
    tl.to('#homeBannerMainPoly', .5, {scaleX: 1}, 'start+=0.25');
    tl.to('#homeBannerBackgroundPoly', .75, {scaleX: 1}, '-=0.25');

    // skills
    const tl2 = new TimelineMax();
    tl2.add('start');
    tl2.fromTo('.front-end div:nth-child(odd)', .5, {opacity: 0, y: '-50%'}, {opacity: 1, y: '0%'}, 'start+=.5');
    tl2.to('.html', .5, {scaleX: 1}, 'start+=.5');
    tl2.to('.css', .5, {scaleX: 1}, '-=0.25');
    tl2.to('.js', .5, {scaleX: 1}, '-=0.25');
    tl2.to('.ui', .5, {scaleX: 1}, '-=0.25');
    tl2.to('.ux', .5, {scaleX: 1}, '-=0.25');

    tl2.add('part2');
    tl2.fromTo('.back-end div:nth-child(odd)', .5, {opacity: 0, y: '-50%'}, {opacity: 1, y: '0%'}, 'start+=1.25');
    tl2.to('.php', .5, {scaleX: 1}, '-=0.25');
    tl2.to('.api', .5, {scaleX: 1}, '-=0.25');
    tl2.to('.bdd', .5, {scaleX: 1}, '-=0.25');
    tl2.to('.node', .5, {scaleX: 1}, '-=0.25');

    tl2.add('side');
    tl2.from(' .social', .5, {xPercent: -75}, 'start+=1.25');
    tl2.from(' .presentation .avatar', .5, {xPercent: -200}, 'start+=1.25');
    tl2.from(' .polySocialCenter', .25, {margin: 0}, 'start+=1.75');
    tl2.from(' .presentation p, .presentation h1', .5, {xPercent: -200}, 'start+=1.25');

    // navigation
    tl2.to(' .navigation', 1, {opacity: 1}, 'start+=.5');
  }

  reveal(bloc) {
    if (this.revealed) {
      if (this.revealed === bloc) {
        TweenMax.to('#subskill' + this.revealed, .5, {opacity: 0});
        document.getElementById('subskill' + this.revealed).style.display = 'none';
        this.revealed = undefined;
      } else {
        TweenMax.to('#subskill' + this.revealed, .5, {opacity: 0});
        document.getElementById('subskill' + this.revealed).style.display = 'none';
        document.getElementById('subskill' + bloc).style.display = 'table-footer-group';
        TweenMax.to('#subskill' + bloc, .5, {opacity: 1});
        this.revealed = bloc;
      }
    } else {
      document.getElementById('subskill' + bloc).style.display = 'table-footer-group';
      TweenMax.to('#subskill' + bloc, .5, {opacity: 1});
      this.revealed = bloc;
    }
  }

  navigateUp() {
    this.hideNavigation();
    document.removeEventListener('keyup', this.keyEventStorage);
    this.router.navigate(['skillsAscending']);
  }

  navigateDown() {
    this.hideNavigation();
    document.removeEventListener('keyup', this.keyEventStorage);
    this.router.navigate(['portfolio']);

  }

  hideNavigation() {
    TweenMax.to(' .navigation', .5, {opacity: 0});
  }

  scrollEvent(e) {
    if (!this.scrolled) {
      this.scrolled = true;
      if (e.deltaY < 0 ) {
        this.router.navigate(['skillsAscending']);
      } else {
        this.router.navigate(['portfolio']);
      }
    }
  }

  // What do after keyup
  keyUpHandler(event) {
    if (event.keyCode === 40) {
      this.navigateDown();
    } else if (event.keyCode === 38) {
      this.navigateUp();
    }
  }
}
