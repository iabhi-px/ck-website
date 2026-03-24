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
      'Section Top Padding (px)': [220, 64, 300, 4],
      'CTA Top Margin (px)': [24, 8, 80, 4],
      'Screenshot Top Margin (px)': [100, 16, 160, 4],
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
  });

  useEffect(() => {
    const section = document.getElementById('hero-section');
    const heading = document.getElementById('hero-heading');
    const body = document.getElementById('hero-body');
    const cta = document.getElementById('hero-cta');
    const screenshot = document.getElementById('hero-screenshot');
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
    if (cta) {
      cta.style.marginTop = `${values['Spacing']['CTA Top Margin (px)']}px`;
    }
    if (screenshot) {
      screenshot.style.marginTop = `${values['Spacing']['Screenshot Top Margin (px)']}px`;
    }
    if (btnPrimary) {
      btnPrimary.style.paddingLeft = `${values['CTA Button']['Padding X (px)']}px`;
      btnPrimary.style.paddingRight = `${values['CTA Button']['Padding X (px)']}px`;
      btnPrimary.style.paddingTop = `${values['CTA Button']['Padding Y (px)']}px`;
      btnPrimary.style.paddingBottom = `${values['CTA Button']['Padding Y (px)']}px`;
      btnPrimary.style.fontSize = `${values['CTA Button']['Font Size (px)']}px`;
    }
  }, [values]);

  return null;
}

export default function Dials() {
  return (
    <>
      <HeroDials />
      <DialRoot position="top-right" defaultOpen={true} />
    </>
  );
}
