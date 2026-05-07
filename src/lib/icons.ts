/**
 * Brand-palette SVG illustrations.
 * Each value is a complete <svg> element with class="card-icon".
 * Render via Astro <Fragment set:html={ICONS[name]} /> or innerHTML in client JS.
 */
export const ICONS: Record<string, string> = {
  dna: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M26 14C26 26 54 26 54 40S26 54 26 66" stroke="#7B4F2E" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <path d="M54 14C54 26 26 26 26 40S54 54 54 66" stroke="#7B4F2E" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <line x1="30" y1="22" x2="50" y2="22" stroke="#B8892A" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="30" y1="40" x2="50" y2="40" stroke="#B8892A" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="30" y1="58" x2="50" y2="58" stroke="#B8892A" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="14" cy="20" r="2" fill="#D4A843"/>
    <circle cx="66" cy="60" r="2" fill="#D4A843"/>
  </svg>`,

  cat: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M22 18L32 32L40 28L48 32L58 18L54 36C58 40 60 44 60 50C60 60 52 64 40 64S20 60 20 50C20 44 22 40 26 36L22 18Z" fill="#9A6B45" stroke="#7B4F2E" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M22 18L32 32L26 36L22 18Z" fill="#C4694F" opacity="0.6"/>
    <path d="M58 18L48 32L54 36L58 18Z" fill="#C4694F" opacity="0.6"/>
    <circle cx="33" cy="42" r="2.2" fill="#2D1F15"/>
    <circle cx="47" cy="42" r="2.2" fill="#2D1F15"/>
    <ellipse cx="40" cy="50" rx="2.2" ry="1.5" fill="#C4694F"/>
    <path d="M40 51.5L37 55M40 51.5L43 55" stroke="#2D1F15" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="30" y1="50" x2="22" y2="50" stroke="#7B4F2E" stroke-width="1" stroke-linecap="round"/>
    <line x1="30" y1="54" x2="22" y2="56" stroke="#7B4F2E" stroke-width="1" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="58" y2="50" stroke="#7B4F2E" stroke-width="1" stroke-linecap="round"/>
    <line x1="50" y1="54" x2="58" y2="56" stroke="#7B4F2E" stroke-width="1" stroke-linecap="round"/>
  </svg>`,

  home: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <rect x="20" y="38" width="40" height="26" fill="#F5EDD6" stroke="#7B4F2E" stroke-width="1.8"/>
    <path d="M14 40L40 18L66 40" fill="#A5553E" stroke="#7B4F2E" stroke-width="1.8" stroke-linejoin="round"/>
    <rect x="48" y="22" width="6" height="10" fill="#7B4F2E"/>
    <rect x="34" y="46" width="12" height="18" rx="1" fill="#7B4F2E"/>
    <circle cx="44" cy="55" r="0.9" fill="#FBF6E6"/>
    <rect x="24" y="46" width="6" height="6" fill="#8BA888"/>
    <rect x="50" y="46" width="6" height="6" fill="#8BA888"/>
  </svg>`,

  microscope: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M30 14H50" stroke="#7B4F2E" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M34 14V32C34 38 28 42 28 50V60C28 62 30 64 32 64H48C50 64 52 62 52 60V50C52 42 46 38 46 32V14" fill="#FBF6E6" stroke="#7B4F2E" stroke-width="2" stroke-linejoin="round"/>
    <path d="M30 44C30 42 32 40 36 40H44C48 40 50 42 50 44V60C50 62 48 64 46 64H34C32 64 30 62 30 60Z" fill="#8BA888"/>
    <circle cx="36" cy="50" r="1.6" fill="#FBF6E6" opacity="0.7"/>
    <circle cx="44" cy="56" r="1.2" fill="#FBF6E6" opacity="0.7"/>
    <circle cx="40" cy="46" r="1" fill="#FBF6E6" opacity="0.6"/>
    <line x1="32" y1="22" x2="48" y2="22" stroke="#B8892A" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="32" y1="28" x2="48" y2="28" stroke="#B8892A" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`,

  pill: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <g transform="rotate(-25 40 40)">
      <rect x="14" y="32" width="52" height="16" rx="8" fill="#F5EDD6" stroke="#7B4F2E" stroke-width="1.8"/>
      <path d="M22 32H40V48H22C17.6 48 14 44.4 14 40S17.6 32 22 32Z" fill="#C4694F"/>
      <ellipse cx="20" cy="38" rx="2" ry="1.2" fill="#FBF6E6" opacity="0.6"/>
      <line x1="40" y1="32" x2="40" y2="48" stroke="#7B4F2E" stroke-width="1.6"/>
    </g>
  </svg>`,

  male: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <circle cx="32" cy="48" r="14" fill="#D4A843" stroke="#7B4F2E" stroke-width="2"/>
    <circle cx="32" cy="48" r="9" fill="#FBF6E6" opacity="0.35"/>
    <path d="M44 36L60 20" stroke="#7B4F2E" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M50 18H62V30" stroke="#7B4F2E" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="14" cy="14" r="1.6" fill="#B8892A"/>
    <circle cx="68" cy="58" r="1.6" fill="#B8892A"/>
    <circle cx="20" cy="64" r="1.4" fill="#B8892A"/>
    <circle cx="64" cy="14" r="1.2" fill="#D4A843"/>
  </svg>`,

  heart: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M40 64C36 60 16 48 16 32C16 24 22 18 30 18C34 18 38 21 40 25C42 21 46 18 50 18C58 18 64 24 64 32C64 48 44 60 40 64Z" fill="#C4694F" stroke="#7B4F2E" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="34" cy="34" r="2.4" fill="#FBF6E6"/>
    <circle cx="46" cy="34" r="2.4" fill="#FBF6E6"/>
    <circle cx="40" cy="38" r="2.4" fill="#FBF6E6"/>
    <ellipse cx="40" cy="46" rx="6" ry="4.5" fill="#FBF6E6"/>
  </svg>`,

  droplet: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M40 14C40 14 22 32 22 48A18 18 0 0 0 58 48C58 32 40 14 40 14Z" fill="#8BA888" stroke="#7B4F2E" stroke-width="1.8"/>
    <ellipse cx="34" cy="42" rx="3" ry="6.5" fill="#FBF6E6" opacity="0.55" transform="rotate(-22 34 42)"/>
    <path d="M48 50A8 8 0 0 1 40 58" stroke="#FBF6E6" stroke-width="1.6" stroke-linecap="round" opacity="0.5" fill="none"/>
  </svg>`,

  sparkle: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M14 38C20 34 30 34 36 38C42 42 50 42 56 38" stroke="#9A6B45" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <path d="M16 50C22 46 32 46 38 50C44 54 52 54 58 50" stroke="#9A6B45" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <path d="M22 26C28 22 38 22 44 26C50 30 58 30 64 26" stroke="#9A6B45" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.55"/>
    <circle cx="22" cy="20" r="2.6" fill="#D4A843"/>
    <circle cx="50" cy="18" r="2" fill="#C4694F"/>
    <circle cx="62" cy="32" r="2" fill="#D4A843"/>
    <circle cx="32" cy="62" r="2" fill="#C4694F"/>
    <circle cx="58" cy="62" r="2" fill="#D4A843"/>
  </svg>`,

  chartDown: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M14 18V62H66" stroke="#7B4F2E" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    <path d="M20 28L30 36L42 32L52 44L62 52L62 62L20 62Z" fill="#C4694F" opacity="0.25"/>
    <path d="M20 28L30 36L42 32L52 44L62 52" stroke="#A5553E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="20" cy="28" r="2.6" fill="#D4A843" stroke="#7B4F2E" stroke-width="1"/>
    <circle cx="30" cy="36" r="2.4" fill="#D4A843" stroke="#7B4F2E" stroke-width="1"/>
    <circle cx="42" cy="32" r="2.4" fill="#D4A843" stroke="#7B4F2E" stroke-width="1"/>
    <circle cx="52" cy="44" r="2.4" fill="#D4A843" stroke="#7B4F2E" stroke-width="1"/>
    <circle cx="62" cy="52" r="3.4" fill="#A5553E" stroke="#7B4F2E" stroke-width="1.2"/>
  </svg>`,

  syringe: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M40 8V16" stroke="#7B4F2E" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="32" y1="14" x2="48" y2="14" stroke="#7B4F2E" stroke-width="2.4" stroke-linecap="round"/>
    <rect x="32" y="16" width="16" height="8" fill="#7B4F2E"/>
    <rect x="34" y="24" width="12" height="26" fill="#FBF6E6" stroke="#7B4F2E" stroke-width="1.8"/>
    <rect x="34" y="36" width="12" height="14" fill="#C4694F"/>
    <line x1="34" y1="30" x2="40" y2="30" stroke="#7B4F2E" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="34" y1="38" x2="40" y2="38" stroke="#7B4F2E" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="34" y1="46" x2="40" y2="46" stroke="#7B4F2E" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M36 50H44V54H36Z" fill="#7B4F2E"/>
    <line x1="40" y1="54" x2="40" y2="70" stroke="#7B4F2E" stroke-width="1.6" stroke-linecap="round"/>
    <ellipse cx="40" cy="74" rx="2" ry="2.5" fill="#C4694F"/>
  </svg>`,

  leaf: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M16 64C16 36 36 16 64 16C64 44 44 64 16 64Z" fill="#8BA888" stroke="#7B4F2E" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M22 58L52 28" stroke="#FBF6E6" stroke-width="1.4" stroke-linecap="round" opacity="0.55"/>
    <path d="M30 50L36 44M40 40L46 34" stroke="#FBF6E6" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
    <circle cx="56" cy="58" r="11" fill="#6B8A68" stroke="#7B4F2E" stroke-width="1.6"/>
    <path d="M51 58L55 62L62 54" stroke="#FBF6E6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  spoon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <ellipse cx="40" cy="26" rx="14" ry="11" fill="#EFE3C0" stroke="#7B4F2E" stroke-width="1.8"/>
    <ellipse cx="40" cy="22" rx="9" ry="6" fill="#D4A843"/>
    <ellipse cx="36" cy="20" rx="2.4" ry="1.4" fill="#FBF6E6" opacity="0.5"/>
    <path d="M40 37V64" stroke="#7B4F2E" stroke-width="3.6" stroke-linecap="round"/>
    <circle cx="20" cy="20" r="1.6" fill="#B8892A"/>
    <circle cx="62" cy="22" r="1.6" fill="#B8892A"/>
    <circle cx="14" cy="32" r="1.2" fill="#B8892A"/>
    <circle cx="66" cy="34" r="1.2" fill="#B8892A"/>
  </svg>`,

  bolt: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M44 8L18 44H36L32 72L62 32H44L46 8Z" fill="#D4A843" stroke="#7B4F2E" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M44 8L34 32H44L42 50" stroke="#FBF6E6" stroke-width="1.4" stroke-linejoin="round" fill="none" opacity="0.5"/>
  </svg>`,

  smile: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <circle cx="40" cy="40" r="22" fill="#D4A843" stroke="#7B4F2E" stroke-width="2"/>
    <ellipse cx="32" cy="32" rx="6" ry="3" fill="#FBF6E6" opacity="0.4"/>
    <circle cx="32" cy="36" r="2.4" fill="#7B4F2E"/>
    <circle cx="48" cy="36" r="2.4" fill="#7B4F2E"/>
    <path d="M28 46Q40 58 52 46" stroke="#7B4F2E" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <ellipse cx="26" cy="42" rx="2.6" ry="1.6" fill="#C4694F" opacity="0.55"/>
    <ellipse cx="54" cy="42" rx="2.6" ry="1.6" fill="#C4694F" opacity="0.55"/>
  </svg>`,

  infinity: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" aria-hidden="true">
    <circle cx="40" cy="40" r="30" fill="#FBF6E6" opacity="0.55"/>
    <path d="M40 40C36 30 26 26 20 30C12 36 12 46 20 50C26 54 36 50 40 40C44 30 54 26 60 30C68 36 68 46 60 50C54 54 44 50 40 40Z" fill="#8BA888" stroke="#7B4F2E" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 36C26 32 32 32 36 36" stroke="#FBF6E6" stroke-width="1.4" stroke-linecap="round" opacity="0.5" fill="none"/>
    <path d="M44 44C48 48 54 48 58 44" stroke="#FBF6E6" stroke-width="1.4" stroke-linecap="round" opacity="0.5" fill="none"/>
  </svg>`,
};

export type IconName = keyof typeof ICONS;
