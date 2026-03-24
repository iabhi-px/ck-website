import { DialRoot, useDialKit } from 'dialkit';
import { useEffect } from 'react';
import 'dialkit/styles.css';

function HeroDials() {
  const values = useDialKit('Hero Section', {
    'Heading': {
      'Font Size (px)': [64, 32, 120, 1],
      'Line Height': [1.15, 0.8, 1.5, 0.01],
      'Letter Spacing (em)': [-0.005, -0.1, 0.1, 0.005],
    },
    'Body Text': {
      'Font Size (px)': [20, 12, 32, 1],
      'Line Height': [1.5, 1.2, 2.5, 0.05],
    },
    'Spacing': {
      'Section Padding X (px)': [106, 16, 140, 2],
      'Section Top Padding (px)': [220, 64, 300, 4],
      'CTA Top Margin (px)': [24, 8, 80, 4],
    },
    'Right Column': {
      'Padding Top (px)': [16, 0, 64, 2],
      'Padding Bottom (px)': [16, 0, 64, 2],
      'Gap (px)': [0, 0, 64, 2],
    },
    'CTA Button': {
      'Padding X (px)': [32, 16, 80, 2],
      'Padding Y (px)': [12, 8, 32, 2],
      'Font Size (px)': [18, 12, 28, 1],
    },
    'Screenshot': {
      'Top Margin (px)': [100, 16, 160, 4],
      'Border Radius (px)': [8, 0, 32, 1],
    },
    'Metrics Grid': {
      'Value Font Size (px)': [28, 20, 60, 1],
      'Label Font Size (px)': [16, 12, 24, 1],
      'Label Top Margin (px)': [2, 0, 24, 1],
      'Cell Padding X (px)': [32, 12, 64, 2],
      'Cell Padding Y (px)': [16, 12, 64, 2],
      'Grid Top Margin (px)': [120, 0, 200, 4],
    },
  });

  useEffect(() => {
    const section = document.getElementById('hero-section');
    const heading = document.getElementById('hero-heading');
    const body = document.getElementById('hero-body');
    const cta = document.getElementById('hero-cta');
    const screenshot = document.getElementById('hero-screenshot-wrapper');
    const btnPrimary = document.getElementById('hero-btn-primary');

    if (heading) {
      heading.style.fontSize = `${values['Heading']['Font Size (px)']}px`;
      heading.style.lineHeight = `${values['Heading']['Line Height']}`;
      heading.style.letterSpacing = `${values['Heading']['Letter Spacing (em)']}em`;
    }
    if (body) {
      body.style.fontSize = `${values['Body Text']['Font Size (px)']}px`;
      body.style.lineHeight = `${values['Body Text']['Line Height']}`;
    }
    const rightCol = document.getElementById('hero-right');
    if (rightCol) {
      rightCol.style.paddingTop = `${values['Right Column']['Padding Top (px)']}px`;
      rightCol.style.paddingBottom = `${values['Right Column']['Padding Bottom (px)']}px`;
      rightCol.style.gap = `${values['Right Column']['Gap (px)']}px`;
    }
    if (section) {
      section.style.paddingTop = `${values['Spacing']['Section Top Padding (px)']}px`;
    }
    const contentContainer = document.getElementById('hero-content-container');
    const gridlinesContainer = document.getElementById('hero-gridlines-container');
    const sectionPadX = `${values['Spacing']['Section Padding X (px)']}px`;
    if (contentContainer) {
      contentContainer.style.paddingLeft = sectionPadX;
      contentContainer.style.paddingRight = sectionPadX;
    }
    if (gridlinesContainer) {
      gridlinesContainer.style.paddingLeft = sectionPadX;
      gridlinesContainer.style.paddingRight = sectionPadX;
    }
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
      navbarContainer.style.paddingLeft = sectionPadX;
      navbarContainer.style.paddingRight = sectionPadX;
    }
    if (cta) {
      cta.style.marginTop = `${values['Spacing']['CTA Top Margin (px)']}px`;
    }
    if (screenshot) {
      screenshot.style.marginTop = `${values['Screenshot']['Top Margin (px)']}px`;
      const screenshotInner = screenshot.querySelector(':scope > div > div') as HTMLElement;
      if (screenshotInner) {
        screenshotInner.style.borderRadius = `${values['Screenshot']['Border Radius (px)']}px`;
      }
    }
    if (btnPrimary) {
      btnPrimary.style.paddingLeft = `${values['CTA Button']['Padding X (px)']}px`;
      btnPrimary.style.paddingRight = `${values['CTA Button']['Padding X (px)']}px`;
      btnPrimary.style.paddingTop = `${values['CTA Button']['Padding Y (px)']}px`;
      btnPrimary.style.paddingBottom = `${values['CTA Button']['Padding Y (px)']}px`;
      btnPrimary.style.fontSize = `${values['CTA Button']['Font Size (px)']}px`;
    }

    const metricsGrid = document.getElementById('metrics-grid');
    if (metricsGrid) {
      metricsGrid.style.marginTop = `${values['Metrics Grid']['Grid Top Margin (px)']}px`;

      const metricValues = metricsGrid.querySelectorAll<HTMLElement>('.metric-value');
      const metricLabels = metricsGrid.querySelectorAll<HTMLElement>('.metric-label');
      const metricCells = metricsGrid.querySelectorAll<HTMLElement>('.metrics-cell');

      metricValues.forEach((el) => {
        el.style.fontSize = `${values['Metrics Grid']['Value Font Size (px)']}px`;
      });
      metricLabels.forEach((el) => {
        el.style.fontSize = `${values['Metrics Grid']['Label Font Size (px)']}px`;
        el.style.marginTop = `${values['Metrics Grid']['Label Top Margin (px)']}px`;
      });
      metricCells.forEach((el) => {
        el.style.paddingLeft = `${values['Metrics Grid']['Cell Padding X (px)']}px`;
        el.style.paddingRight = `${values['Metrics Grid']['Cell Padding X (px)']}px`;
        el.style.paddingTop = `${values['Metrics Grid']['Cell Padding Y (px)']}px`;
        el.style.paddingBottom = `${values['Metrics Grid']['Cell Padding Y (px)']}px`;
      });
    }
  }, [values]);

  return null;
}

function WhyCodeKarmaDials() {
  const values = useDialKit('Why CodeKarma', {
    'Section Label': {
      'Font Size (px)': [16, 8, 24, 1],
      'Letter Spacing (em)': [0.25, 0, 0.6, 0.01],
      'Line Height': [1.2, 1, 2.5, 0.05],
    },
    'Section Heading': {
      'Font Size (px)': [48, 24, 80, 1],
      'Line Height': [1.1, 0.8, 2, 0.05],
      'Letter Spacing (em)': [-0.02, -0.1, 0.1, 0.005],
    },
    'Card Titles': {
      'Font Size (px)': [20, 10, 28, 1],
      'Line Height': [1.2, 1, 2.5, 0.05],
      'Letter Spacing (em)': [0, -0.05, 0.2, 0.005],
    },
    'Card Descriptions': {
      'Font Size (px)': [16, 10, 24, 1],
      'Line Height': [1.6, 1, 2.5, 0.05],
      'Letter Spacing (em)': [0, -0.05, 0.2, 0.005],
    },
    'Spacing': {
      'Section Padding Y (px)': [96, 32, 200, 4],
      'Header Bottom Margin (px)': [64, 16, 120, 4],
      'Card Padding (px)': [24, 8, 48, 2],
    },
  });

  useEffect(() => {
    const label = document.getElementById('why-label');
    const heading = document.getElementById('why-heading');
    const section = document.getElementById('why-codekarma');
    const headerWrap = heading?.parentElement;
    const cardTitles = document.querySelectorAll<HTMLElement>('.why-card-title');
    const cardDescs = document.querySelectorAll<HTMLElement>('.why-card-desc');
    const cells = document.querySelectorAll<HTMLElement>('.why-cell');

    if (label) {
      label.style.fontSize = `${values['Section Label']['Font Size (px)']}px`;
      label.style.letterSpacing = `${values['Section Label']['Letter Spacing (em)']}em`;
      label.style.lineHeight = `${values['Section Label']['Line Height']}`;
    }
    if (heading) {
      heading.style.fontSize = `${values['Section Heading']['Font Size (px)']}px`;
      heading.style.lineHeight = `${values['Section Heading']['Line Height']}`;
      heading.style.letterSpacing = `${values['Section Heading']['Letter Spacing (em)']}em`;
    }
    cardTitles.forEach((el) => {
      el.style.fontSize = `${values['Card Titles']['Font Size (px)']}px`;
      el.style.lineHeight = `${values['Card Titles']['Line Height']}`;
      el.style.letterSpacing = `${values['Card Titles']['Letter Spacing (em)']}em`;
    });
    cardDescs.forEach((el) => {
      el.style.fontSize = `${values['Card Descriptions']['Font Size (px)']}px`;
      el.style.lineHeight = `${values['Card Descriptions']['Line Height']}`;
      el.style.letterSpacing = `${values['Card Descriptions']['Letter Spacing (em)']}em`;
    });
    if (section) {
      section.style.paddingTop = `${values['Spacing']['Section Padding Y (px)']}px`;
      section.style.paddingBottom = `${values['Spacing']['Section Padding Y (px)']}px`;
    }
    if (headerWrap) {
      headerWrap.style.marginBottom = `${values['Spacing']['Header Bottom Margin (px)']}px`;
    }
    cells.forEach((el) => {
      el.style.padding = `${values['Spacing']['Card Padding (px)']}px`;
    });
  }, [values]);

  return null;
}

export default function Dials() {
  return (
    <>
      <HeroDials />
      <WhyCodeKarmaDials />
      <DialRoot position="top-right" defaultOpen={true} />
    </>
  );
}
