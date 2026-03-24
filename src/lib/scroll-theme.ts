import { gsap, ScrollTrigger } from './gsap';

interface ThemeConfig {
  defaultBg: string;
  defaultText: string;
  scrollBg: string;
  scrollText: string;
  triggerHook: number;
  offset: number;
}

const themes: Record<string, { bg: string; text: string }> = {
  'bg-white': { bg: '#ffffff', text: '#0f0f0f' },
  'bg-dark-1': { bg: '#0a0a0a', text: '#ffffff' },
  'bg-dark-2': { bg: '#111111', text: '#ffffff' },
};

const textThemes: Record<string, Record<string, string>> = {
  dark: {
    heading: '#0f0f0f',
    label: 'rgba(15,15,15,0.4)',
    body: '#6b7280',
    gridline: '#e5e7eb',
  },
  light: {
    heading: '#ffffff',
    label: 'rgba(255,255,255,0.4)',
    body: '#9ca3af',
    gridline: '#2a2a2a',
  },
};

export function initScrollThemes() {
  const sections = document.querySelectorAll<HTMLElement>('[data-arts-scroll-theme]');

  sections.forEach((section) => {
    const config: ThemeConfig = {
      defaultBg: section.dataset.artsDefaultTheme || 'bg-white',
      defaultText: section.dataset.artsThemeText || 'dark',
      scrollBg: section.dataset.artsScrollTheme || 'bg-dark-1',
      scrollText: section.dataset.artsScrollThemeText || 'light',
      triggerHook: parseFloat(section.dataset.artsScrollTriggerHook || '0'),
      offset: parseInt(section.dataset.artsScrollOffset || '0', 10),
    };

    const defaultTheme = themes[config.defaultBg] || themes['bg-white'];
    const scrollTheme = themes[config.scrollBg] || themes['bg-dark-1'];
    const defaultTextColors = textThemes[config.defaultText] || textThemes['dark'];
    const scrollTextColors = textThemes[config.scrollText] || textThemes['light'];

    // Apply default theme
    section.style.transition = 'background-color 0.4s ease';
    section.style.backgroundColor = defaultTheme.bg;

    // Collect themed elements
    const themedEls = {
      labels: section.querySelectorAll<HTMLElement>('[id$="-label"]'),
      headings: section.querySelectorAll<HTMLElement>('[id$="-heading"]'),
      subtexts: section.querySelectorAll<HTMLElement>('[id$="-subtext"]'),
      gridlines: section.querySelectorAll<HTMLElement>('.absolute.left-0.top-0.bottom-0, .absolute.right-0.top-0.bottom-0'),
    };

    // Add transitions to themed elements
    [...themedEls.labels, ...themedEls.headings, ...themedEls.subtexts, ...themedEls.gridlines].forEach((el) => {
      el.style.transition = 'color 0.4s ease, background-color 0.4s ease';
    });

    function applyTheme(isDark: boolean) {
      const bg = isDark ? scrollTheme : defaultTheme;
      const text = isDark ? scrollTextColors : defaultTextColors;

      section.style.backgroundColor = bg.bg;
      section.dataset.activeTheme = isDark ? 'dark' : 'light';

      themedEls.labels.forEach((el) => (el.style.color = text.label));
      themedEls.headings.forEach((el) => (el.style.color = text.heading));
      themedEls.subtexts.forEach((el) => (el.style.color = text.body));
      themedEls.gridlines.forEach((el) => (el.style.backgroundColor = text.gridline));

      // Update tab styles if present
      const inactivePaths = section.querySelectorAll<SVGPathElement>('.product-tab:not(.active) .product-tab-path');
      inactivePaths.forEach((path) => {
        path.style.fill = isDark ? '#1a1a1a' : '#ffffff';
        path.style.stroke = isDark ? '#333333' : '#e5e5e5';
        path.style.transition = 'fill 0.4s ease, stroke 0.4s ease';
      });

      const inactiveLabels = section.querySelectorAll<HTMLElement>('.product-tab:not(.active) .product-tab-label');
      inactiveLabels.forEach((el) => {
        el.style.color = isDark ? '#9ca3af' : '#6b7280';
        el.style.transition = 'color 0.4s ease';
      });
    }

    // ScrollTrigger: entering section — switch to scroll theme
    ScrollTrigger.create({
      trigger: section,
      start: () => `top+=${config.offset} ${config.triggerHook * 100}%`,
      end: () => `bottom-=${Math.abs(config.offset)} ${config.triggerHook * 100}%`,
      onEnter: () => applyTheme(true),
      onLeave: () => applyTheme(false),
      onEnterBack: () => applyTheme(true),
      onLeaveBack: () => applyTheme(false),
    });
  });
}
