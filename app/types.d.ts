import { TweenMax, TimelineMax, Power2, Expo, Elastic } from 'gsap';

declare global {
  interface Window {
    $: JQueryStatic;
    TweenMax: typeof TweenMax;
    TimelineMax: typeof TimelineMax;
    Power2: typeof Power2;
    Expo: typeof Expo;
    Elastic: typeof Elastic;
  }
}

declare module 'jquery' {
  export = $;
} 