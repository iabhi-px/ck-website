import { useDialKit, DialRoot } from 'dialkit';
import 'dialkit/styles.css';
import { useEffect } from 'react';

function InvestorControls() {
  const params = useDialKit('Investor Logos', {
    Accel: {
      height: [72, 10, 200, 1],
      width: [140, 40, 300, 1],
      paddingTop: [32, 0, 200, 1],
      paddingBottom: [40, 0, 200, 1],
    },
    Prosus: {
      height: [64, 10, 200, 1],
      width: [168, 40, 300, 1],
      paddingTop: [46, 0, 200, 1],
      paddingBottom: [36, 0, 200, 1],
    },
    'Xeed Ventures': {
      height: [136, 10, 200, 1],
      width: [140, 40, 300, 1],
      paddingTop: [0, 0, 200, 1],
      paddingBottom: [0, 0, 200, 1],
    },
    'SenseAI Ventures': {
      height: [44, 10, 200, 1],
      width: [152, 40, 300, 1],
      paddingTop: [16, 0, 200, 1],
      paddingBottom: [16, 0, 200, 1],
    },
    'Stargazer Ventures': {
      height: [36, 10, 200, 1],
      width: [140, 40, 300, 1],
      paddingTop: [16, 0, 200, 1],
      paddingBottom: [16, 0, 200, 1],
    },
  });

  useEffect(() => {
    const investors = ['Accel', 'Prosus', 'Xeed Ventures', 'SenseAI Ventures', 'Stargazer Ventures'] as const;

    for (const name of investors) {
      const folder = params[name] as { height: number; width: number; paddingTop: number; paddingBottom: number };
      const img = document.querySelector<HTMLElement>(`[data-investor="${name}"]`);
      if (img) {
        img.style.height = `${folder.height}px`;
        img.style.maxWidth = `${folder.width}px`;
      }

      const cell = document.querySelector<HTMLElement>(`[data-investor-cell="${name}"]`);
      if (cell) {
        cell.style.paddingTop = `${folder.paddingTop}px`;
        cell.style.paddingBottom = `${folder.paddingBottom}px`;
      }
    }

    // SenseAI and Stargazer share a cell — apply to their wrapper divs
    const senseaiFolder = params['SenseAI Ventures'] as { height: number; width: number; paddingTop: number; paddingBottom: number };
    const stargazerFolder = params['Stargazer Ventures'] as { height: number; width: number; paddingTop: number; paddingBottom: number };

    const senseaiWrapper = document.querySelector<HTMLElement>(`[data-investor="SenseAI Ventures"]`)?.closest('.investor-logo-wrapper') as HTMLElement | null;
    const stargazerWrapper = document.querySelector<HTMLElement>(`[data-investor="Stargazer Ventures"]`)?.closest('.investor-logo-wrapper') as HTMLElement | null;

    if (senseaiWrapper) {
      senseaiWrapper.style.paddingTop = `${senseaiFolder.paddingTop}px`;
      senseaiWrapper.style.paddingBottom = `${senseaiFolder.paddingBottom}px`;
    }
    if (stargazerWrapper) {
      stargazerWrapper.style.paddingTop = `${stargazerFolder.paddingTop}px`;
      stargazerWrapper.style.paddingBottom = `${stargazerFolder.paddingBottom}px`;
    }
  });

  return <DialRoot position="top-right" defaultOpen={true} mode="popover" />;
}

export default InvestorControls;
