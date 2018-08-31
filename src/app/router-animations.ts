import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('hero => skills', [
    /* order */
    /* 1 */
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    /* 2 */
    group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))]
        , { optional: true }),
    ])
  ]),
  transition('skills => portfolio', [
    /* order */
    /* 1 */
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    /* 2 */
    group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))]
        , { optional: true }),
    ])
  ]),
  transition('portfolio => about', [
    /* order */
    /* 1 */
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    /* 2 */
    group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))]
        , { optional: true }),
    ])
  ]),
  transition('skills => hero', [
    /* order */
    /* 1 */
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    /* 2 */
    group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))]
        , { optional: true }),
    ])
  ]),
  transition('portfolio => skills', [
    /* order */
    /* 1 */
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    /* 2 */
    group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))]
        , { optional: true }),
    ])
  ]),
  transition('about => portfolio', [
    /* order */
    /* 1 */
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    /* 2 */
    group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))]
        , { optional: true }),
    ])
  ]),
]);
