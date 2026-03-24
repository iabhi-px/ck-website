import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function fadeInUp(
  targets: gsap.TweenTarget,
  delay: number = 0
): gsap.core.Tween {
  return gsap.from(targets, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay,
    ease: 'power2.out',
  });
}

export function staggerReveal(
  parent: string | Element,
  childSelector: string,
  stagger: number = 0.15
): gsap.core.Tween {
  return gsap.from(`${parent} ${childSelector}`, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: parent as gsap.DOMTarget,
      start: 'top 80%',
    },
  });
}

export function scrollReveal(targets: gsap.TweenTarget): gsap.core.Tween {
  return gsap.from(targets, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: targets as gsap.DOMTarget,
      start: 'top 80%',
    },
  });
}

export { gsap, ScrollTrigger };
