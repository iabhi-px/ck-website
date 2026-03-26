/**
 * Scroll-triggered animation utilities (no GSAP — pure CSS + IntersectionObserver).
 *
 * Add the class "scroll-fade-up" to any element to get a fade-up-on-scroll effect.
 * For staggered children, add "scroll-stagger" to the parent.
 */

const OBSERVED = new WeakSet<Element>();

function createObserver(
  rootMargin: string,
  callback: (entry: IntersectionObserverEntry) => void,
): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) callback(e); }),
    { rootMargin },
  );
}

/** Fade-up a single element when it scrolls into view (starts at "top 80%"). */
export function scrollReveal(target: Element): void {
  if (OBSERVED.has(target)) return;
  OBSERVED.add(target);

  target.classList.add('scroll-fade-up');

  const obs = createObserver('0px 0px -20% 0px', (entry) => {
    entry.target.classList.add('scroll-fade-up--visible');
    obs.unobserve(entry.target);
  });
  obs.observe(target);
}

/** Fade-up with a fixed delay (no scroll trigger — fires immediately). */
export function fadeInUp(target: Element, delay: number = 0): void {
  const el = target as HTMLElement;
  el.classList.add('scroll-fade-up');
  el.style.animationDelay = `${delay}s`;

  requestAnimationFrame(() => {
    el.classList.add('scroll-fade-up--visible');
  });
}

/** Stagger-reveal children when parent scrolls into view. */
export function staggerReveal(
  parent: string | Element,
  childSelector: string,
  stagger: number = 0.15,
): void {
  const parentEl =
    typeof parent === 'string' ? document.querySelector(parent) : parent;
  if (!parentEl) return;

  const children = parentEl.querySelectorAll(childSelector);
  children.forEach((child, i) => {
    const el = child as HTMLElement;
    el.classList.add('scroll-fade-up');
    el.style.transitionDelay = `${i * stagger}s`;
  });

  if (OBSERVED.has(parentEl)) return;
  OBSERVED.add(parentEl);

  const obs = createObserver('0px 0px -20% 0px', (entry) => {
    entry.target.querySelectorAll('.scroll-fade-up').forEach((el) => {
      el.classList.add('scroll-fade-up--visible');
    });
    obs.unobserve(entry.target);
  });
  obs.observe(parentEl);
}
