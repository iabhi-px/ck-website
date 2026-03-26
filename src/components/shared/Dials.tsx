import { DialRoot, useDialKit } from 'dialkit';
import { useEffect } from 'react';
import 'dialkit/styles.css';

function HeroDials() {
  const values = useDialKit('Hero Section', {
    'Heading': {
      'Font Size (px)': [64, 32, 120, 1],
      'Line Height': [1.2, 0.8, 1.5, 0.01],
      'Letter Spacing (em)': [-0.005, -0.1, 0.1, 0.005],
    },
    'Body Text': {
      'Font Size (px)': [18, 12, 32, 1],
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
      'Value Font Size (px)': [40, 20, 60, 1],
      'Label Font Size (px)': [16, 12, 24, 1],
      'Label Top Margin (px)': [11, 0, 24, 1],
      'Cell Padding X (px)': [40, 12, 64, 2],
      'Cell Padding Y (px)': [48, 12, 80, 2],
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

function ProductsDials() {
  const values = useDialKit('Products Section', {
    'Section Label': {
      'Font Size (px)': [16, 8, 24, 1],
      'Letter Spacing (em)': [0.25, 0, 0.6, 0.01],
    },
    'Section Heading': {
      'Font Size (px)': [48, 24, 80, 1],
      'Line Height': [1.1, 0.8, 2, 0.05],
      'Letter Spacing (em)': [-0.02, -0.1, 0.1, 0.005],
    },
    'Section Subtext': {
      'Font Size (px)': [18, 12, 28, 1],
      'Line Height': [1.6, 1, 2.5, 0.05],
    },
    'Tabs': {
      'Font Size (px)': [16, 10, 20, 1],
      'Width (px)': [260, 100, 400, 4],
      'Height (px)': [44, 30, 80, 2],
      'Overlap (px)': [88, 0, 120, 2],
    },
    'Content': {
      'Title Font Size (px)': [36, 16, 40, 1],
      'Desc Font Size (px)': [16, 12, 24, 1],
      'Padding (px)': [40, 16, 80, 4],
    },
    'Spacing': {
      'Section Padding Y (px)': [96, 32, 200, 4],
      'Header Bottom Margin (px)': [64, 16, 120, 4],
    },
  });

  useEffect(() => {
    const section = document.getElementById('products-section');
    const label = document.getElementById('products-label');
    const heading = document.getElementById('products-heading');
    const subtext = document.getElementById('products-subtext');
    const tabs = document.querySelectorAll<HTMLElement>('.product-tab');
    const titles = document.querySelectorAll<HTMLElement>('.product-title');
    const descs = document.querySelectorAll<HTMLElement>('.product-desc');
    const headerWrap = heading?.parentElement;

    if (label) {
      label.style.fontSize = `${values['Section Label']['Font Size (px)']}px`;
      label.style.letterSpacing = `${values['Section Label']['Letter Spacing (em)']}em`;
    }
    if (heading) {
      heading.style.fontSize = `${values['Section Heading']['Font Size (px)']}px`;
      heading.style.lineHeight = `${values['Section Heading']['Line Height']}`;
      heading.style.letterSpacing = `${values['Section Heading']['Letter Spacing (em)']}em`;
    }
    if (subtext) {
      subtext.style.fontSize = `${values['Section Subtext']['Font Size (px)']}px`;
      subtext.style.lineHeight = `${values['Section Subtext']['Line Height']}`;
    }
    tabs.forEach((tab) => {
      tab.style.width = `${values['Tabs']['Width (px)']}px`;
      tab.style.height = `${values['Tabs']['Height (px)']}px`;
      tab.style.marginRight = `-${values['Tabs']['Overlap (px)']}px`;
      const tabLabel = tab.querySelector('.product-tab-label') as HTMLElement;
      if (tabLabel) {
        tabLabel.style.fontSize = `${values['Tabs']['Font Size (px)']}px`;
      }
    });
    titles.forEach((el) => {
      el.style.fontSize = `${values['Content']['Title Font Size (px)']}px`;
    });
    descs.forEach((el) => {
      el.style.fontSize = `${values['Content']['Desc Font Size (px)']}px`;
    });
    const contentAreas = document.querySelectorAll<HTMLElement>('.product-panel > div > div:first-child');
    contentAreas.forEach((el) => {
      el.style.padding = `${values['Content']['Padding (px)']}px`;
    });
    if (section) {
      section.style.paddingTop = `${values['Spacing']['Section Padding Y (px)']}px`;
      section.style.paddingBottom = `${values['Spacing']['Section Padding Y (px)']}px`;
    }
    if (headerWrap) {
      headerWrap.style.marginBottom = `${values['Spacing']['Header Bottom Margin (px)']}px`;
    }
  }, [values]);

  return null;
}

function SecurityDials() {
  const values = useDialKit('Security Section', {
    'Section Heading': {
      'Font Size (px)': [48, 24, 80, 1],
      'Line Height': [1.1, 0.8, 2, 0.05],
    },
    'Card Title': {
      'Font Size (px)': [18, 12, 28, 1],
    },
    'Card Description': {
      'Font Size (px)': [16, 12, 24, 1],
      'Line Height': [1.6, 1, 2.5, 0.05],
    },
    'Icon': {
      'Size (px)': [48, 32, 80, 2],
      'Icon Size (px)': [24, 16, 40, 1],
    },
    'SOC 2 Badge': {
      'Width (px)': [48, 24, 120, 2],
      'Height (px)': [48, 24, 120, 2],
      'Margin Bottom (px)': [24, 0, 48, 1],
    },
    'Spacing': {
      'Section Padding Top (px)': [80, 32, 200, 4],
      'Section Padding Bottom (px)': [160, 32, 300, 4],
      'Cell Padding (px)': [32, 12, 64, 2],
    },
  });

  useEffect(() => {
    const section = document.getElementById('security-section');
    const heading = section?.querySelector('h2') as HTMLElement;
    const titles = section?.querySelectorAll<HTMLElement>('.security-cell h3') || [];
    const descs = section?.querySelectorAll<HTMLElement>('.security-cell p:last-child') || [];
    const icons = section?.querySelectorAll<HTMLElement>('.security-cell > div:first-child') || [];
    const cells = section?.querySelectorAll<HTMLElement>('.security-cell') || [];

    if (heading) {
      heading.style.fontSize = `${values['Section Heading']['Font Size (px)']}px`;
      heading.style.lineHeight = `${values['Section Heading']['Line Height']}`;
    }
    titles.forEach((el) => {
      el.style.fontSize = `${values['Card Title']['Font Size (px)']}px`;
    });
    descs.forEach((el) => {
      el.style.fontSize = `${values['Card Description']['Font Size (px)']}px`;
      el.style.lineHeight = `${values['Card Description']['Line Height']}`;
    });
    icons.forEach((el) => {
      el.style.width = `${values['Icon']['Size (px)']}px`;
      el.style.height = `${values['Icon']['Size (px)']}px`;
      const iconEl = el.querySelector('i, svg') as HTMLElement;
      if (iconEl) {
        iconEl.style.fontSize = `${values['Icon']['Icon Size (px)']}px`;
        iconEl.style.width = `${values['Icon']['Icon Size (px)']}px`;
        iconEl.style.height = `${values['Icon']['Icon Size (px)']}px`;
      }
    });

    cells.forEach((el) => {
      el.style.padding = `${values['Spacing']['Cell Padding (px)']}px`;
    });
    if (section) {
      section.style.paddingTop = `${values['Spacing']['Section Padding Top (px)']}px`;
      section.style.paddingBottom = `${values['Spacing']['Section Padding Bottom (px)']}px`;
    }

    // SOC 2 badge
    const soc2Container = section?.querySelector('.flex-1.flex.items-center') as HTMLElement;
    const soc2Svg = soc2Container?.querySelector('svg') as SVGElement;
    if (soc2Svg) {
      soc2Svg.style.width = `${values['SOC 2 Badge']['Width (px)']}px`;
      soc2Svg.style.height = `${values['SOC 2 Badge']['Height (px)']}px`;
    }
    if (soc2Container) {
      soc2Container.style.marginBottom = `${values['SOC 2 Badge']['Margin Bottom (px)']}px`;
    }
  }, [values]);

  return null;
}

function IntegrationIconDials() {
  const icons = [
    'java', 'go', 'python', 'dotnet',
    'aws', 'gcp', 'azure',
    'mysql', 'postgres', 'mongodb', 'dynamodb', 'redis', 'cosmos', 'mariadb', 'hbase', 'elastic',
    'kafka', 'pulsar', 'rabbitmq', 'sqs', 'sns',
    'kubernetes', 'https', 'grpc',
    'jetbrains', 'vscode', 'cursor', 'windsurf', 'copilot', 'claude',
  ] as const;

  const config: Record<string, Record<string, [number, number, number, number]>> = {};
  const defaults: Record<string, number> = {
    go: 1.3, dotnet: 1.1, aws: 1.15, gcp: 1.05,
    mysql: 1.4, mongodb: 1.1, dynamodb: 1.05, redis: 0.95, cosmos: 1.65, mariadb: 1.3, hbase: 1.3, elastic: 0.9,
    pulsar: 1.2, rabbitmq: 0.9, sqs: 1.15, sns: 1.4,
    kubernetes: 1.1, https: 1.05, grpc: 1.4,
  };

  icons.forEach((id) => {
    config[id] = { 'Scale': [defaults[id] || 1, 0.5, 3, 0.05] };
  });

  const values = useDialKit('Integration Icons', config);

  useEffect(() => {
    icons.forEach((id) => {
      const swatch = document.querySelector<HTMLElement>(`[data-icon-id="${id}"]`);
      if (swatch) {
        swatch.style.setProperty('--icon-scale', `${values[id]['Scale']}`);
      }
    });
  }, [values]);

  return null;
}

function InvestorsDials() {
  const investors = ['Accel', 'Prosus', 'Xeed Ventures', 'SenseAI Ventures', 'Stargazer Ventures'] as const;

  const heightDefaults: Record<string, number> = {
    'Accel': 56, 'Prosus': 63, 'Xeed Ventures': 124, 'SenseAI Ventures': 40, 'Stargazer Ventures': 30,
  };
  const maxWidthDefaults: Record<string, number> = {
    'Accel': 140, 'Prosus': 164, 'Xeed Ventures': 140, 'SenseAI Ventures': 152, 'Stargazer Ventures': 140,
  };
  const bottomPadDefaults: Record<string, number> = {
    'SenseAI Ventures': 12,
  };
  const topPadDefaults: Record<string, number> = {
    'Stargazer Ventures': 13,
  };
  const config: Record<string, Record<string, [number, number, number, number]>> = {
    'Grid': {
      'Cell Padding (px)': [16, 12, 80, 2],
    },
  };
  investors.forEach((name) => {
    const entry: Record<string, [number, number, number, number]> = { 'Height (px)': [heightDefaults[name] || 32, 12, 160, 1] };
    if (name === 'Prosus') {
      entry['Top Padding (px)'] = [24, 0, 40, 1];
    }
    if (name === 'SenseAI Ventures') {
      entry['Bottom Padding (px)'] = [bottomPadDefaults[name] || 0, 0, 40, 1];
    }
    if (name === 'Stargazer Ventures') {
      entry['Top Padding (px)'] = [topPadDefaults[name] || 0, 0, 40, 1];
    }
    entry['Max Width (px)'] = [maxWidthDefaults[name] || 140, 60, 400, 4];
    config[name] = entry;
  });

  const values = useDialKit('Investors', config);

  useEffect(() => {
    const cellPad = values['Grid']['Cell Padding (px)'];
    const cells = document.querySelectorAll<HTMLElement>('.investor-cell');
    cells.forEach((el) => {
      el.style.padding = `${cellPad}px`;
    });

    investors.forEach((name) => {
      const el = document.querySelector<HTMLElement>(`.investor-logo[data-investor="${name}"]`);
      if (el) {
        el.style.height = `${values[name]['Height (px)']}px`;
        el.style.maxWidth = `${values[name]['Max Width (px)']}px`;
        if (name === 'Prosus') {
          const cell = el.closest('.investor-cell') as HTMLElement;
          if (cell) {
            cell.style.paddingTop = `${values[name]['Top Padding (px)']}px`;
          }
        }
        if (name === 'SenseAI Ventures') {
          const wrapper = el.closest('.investor-logo-wrapper') as HTMLElement;
          if (wrapper) {
            wrapper.style.paddingBottom = `${values[name]['Bottom Padding (px)']}px`;
          }
        }
        if (name === 'Stargazer Ventures') {
          const wrapper = el.closest('.investor-logo-wrapper') as HTMLElement;
          if (wrapper) {
            wrapper.style.paddingTop = `${values[name]['Top Padding (px)']}px`;
          }
        }
      }
    });
  }, [values]);

  return null;
}

function FooterDials() {
  const values = useDialKit('Footer', {
    'Logo Glyph': {
      'Scale': [1.1, 0.5, 3, 0.1],
      'Bottom (px)': [-160, -600, 100, 10],
      'Right (px)': [-170, -600, 100, 10],
      'Rect Stroke': [1.25, 0.5, 5, 0.25],
      'Chevron Stroke': [1.25, 0.5, 8, 0.25],
    },
  });

  useEffect(() => {
    const logoContainer = document.getElementById('footer-logo-glyph');
    if (logoContainer) {
      logoContainer.style.setProperty('--logo-scale', `${values['Logo Glyph']['Scale']}`);
      logoContainer.style.setProperty('--logo-bottom', `${values['Logo Glyph']['Bottom (px)']}px`);
      logoContainer.style.setProperty('--logo-right', `${values['Logo Glyph']['Right (px)']}px`);

      const rectStroke = values['Logo Glyph']['Rect Stroke'];
      const chevronStroke = values['Logo Glyph']['Chevron Stroke'];

      // Update base SVG strokes
      logoContainer.querySelectorAll<SVGRectElement>('.glyph-base rect').forEach((r) => {
        r.setAttribute('stroke-width', `${rectStroke}`);
      });
      logoContainer.querySelectorAll<SVGPathElement>('.glyph-base path').forEach((p) => {
        p.setAttribute('stroke-width', `${chevronStroke}`);
      });

      // Update mask SVG inline (rebuild data URI)
      const maskSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 256 256' fill='none'%3E%3Crect x='36' y='36' width='184' height='184' rx='32' stroke='white' stroke-width='${rectStroke}' fill='none'/%3E%3Crect x='68' y='52' width='136' height='120' rx='20' stroke='white' stroke-width='${rectStroke}' fill='none'/%3E%3Cpath d='M160 80L176 100.513L160 120' stroke='white' stroke-width='${chevronStroke}' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M128 80L112 100.513L128 120' stroke='white' stroke-width='${chevronStroke}' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`;
      const light = logoContainer.querySelector<HTMLElement>('.glyph-light');
      if (light) {
        light.style.webkitMaskImage = maskSvg;
        light.style.maskImage = maskSvg;
      }
    }
  }, [values]);

  return null;
}

export default function Dials() {
  return (
    <>
      <HeroDials />
      <WhyCodeKarmaDials />
      <ProductsDials />
      <SecurityDials />
      <IntegrationIconDials />
      <InvestorsDials />
      <FooterDials />
      <DialRoot position="top-right" defaultOpen={false} />
    </>
  );
}
