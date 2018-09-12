import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TweenMax, TimelineMax, Linear, Power2, Power4 } from 'gsap/TweenMax';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {
  scrolled = false;
  keyEventStorage;
  constructor(private router: Router) {}

  ngOnInit() {
    this.scrolled = false;

    // background ring
    TweenMax.to('.wireCircle img', 2, {opacity: 0.1, ease: Power2.easeIn});
    TweenMax.to('.wireCircle img', 60, {rotation: 360, ease: Linear.easeNone, repeat: -1});

    // polys sides animation
    const tl = new TimelineMax();
    tl.add('position');
    tl.fromTo('.polyLeft', 3, {top: '0%' }, {top: '25%', ease: Power4.easeOut}, 'position');
    tl.fromTo('.polyRight', 3, {top: '0%' }, {top: '25%', ease: Power4.easeOut}, 'position');

    // Scroll event listener
    document.getElementById('hero').addEventListener('wheel', (e) => {
      this.scrollEvent(e);
    });

    // Key event listener
    this.keyEventStorage = this.keyUpHandler.bind(this);
    document.addEventListener('keyup', this.keyEventStorage);
  }

  transfoCTA() {
    document.removeEventListener('keyup', this.keyEventStorage);
    const length = document.getElementById('ctaSpan').offsetWidth;
    const height = window.innerHeight;
    const tl2 = new TimelineMax();
    tl2.add('start');
    tl2.to('.cta span', .1, {color: '#9ddcf9'} , 'start');
    tl2.to('.cta span', .5, {scaleX: 0,  ease: Power2.easeIn});
    tl2.add('fade'),
    tl2.to('.CTALeft', .5, {x: length / 2 + 1, ease: Power2.easeIn}, 'fade -= 0.5 ');
    tl2.to('.CTARight', .5, {x: -length / 2 - 1, ease: Power2.easeIn}, 'fade -= 0.5');
    tl2.add('scale');
    tl2.to('.cta', .5, {y: height / 3, rotation: 90}, 'scale += 0.1');
    tl2.to('.cta', .5, {opacity: 0, display: 'none'}, 'scale+=0.1' );

    // change route after all animations
    setTimeout(() => {
      this.changeRoute();
      }, 1000);
  }

  changeRoute() {
    this.router.navigate(['skills']);
  }

  getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  // What do after scroll
  scrollEvent(e) {
    if (!this.scrolled) {
      if (e.deltaY > 0 ) {
        this.scrolled = true;
        this.transfoCTA();
      }
    }
  }

  // What do after keyup
  keyUpHandler(event) {
    if (event.keyCode === 40) {
      this.transfoCTA();
    }
  }
}
