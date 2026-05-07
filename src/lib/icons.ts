export const ICONS: Record<string, string> = {
  dna: `<path d="M22 14C22 26 58 26 58 40S22 54 22 66"/><path d="M58 14C58 26 22 26 22 40S58 54 58 66"/><path d="M28 22H52"/><path d="M28 38H52"/><path d="M28 58H52"/>`,
  cat: `<path d="M16 18L26 34"/><path d="M64 18L54 34"/><path d="M40 62C27 62 18 53 18 42C18 30 28 20 40 20C52 20 62 30 62 42C62 53 53 62 40 62Z"/><circle cx="32" cy="40" r="2" fill="currentColor" stroke="none"/><circle cx="48" cy="40" r="2" fill="currentColor" stroke="none"/><path d="M37 50L40 52L43 50"/><path d="M40 47V50"/><path d="M30 53L22 56"/><path d="M30 49L22 48"/><path d="M50 53L58 56"/><path d="M50 49L58 48"/>`,
  home: `<path d="M14 38L40 16L66 38"/><path d="M20 36V62H60V36"/><path d="M34 62V46H46V62"/>`,
  microscope: `<path d="M30 14H50"/><path d="M34 14V32C34 38 28 42 28 50V60H52V50C52 42 46 38 46 32V14"/><circle cx="40" cy="48" r="3" fill="currentColor" stroke="none"/><path d="M32 22H48"/>`,
  pill: `<rect x="14" y="32" width="52" height="16" rx="8"/><path d="M40 32V48"/>`,
  male: `<circle cx="32" cy="48" r="14"/><path d="M44 36L62 18"/><path d="M50 18H62V30"/>`,
  heart: `<path d="M40 60C38 60 18 47 18 32C18 25 23 20 30 20C34 20 38 22 40 26C42 22 46 20 50 20C57 20 62 25 62 32C62 47 42 60 40 60Z"/>`,
  droplet: `<path d="M40 14C40 14 22 32 22 46A18 18 0 0 0 58 46C58 32 40 14 40 14Z"/><path d="M50 46A10 10 0 0 1 40 56" stroke-opacity="0.5"/>`,
  sparkle: `<path d="M40 14V26"/><path d="M40 54V66"/><path d="M14 40H26"/><path d="M54 40H66"/><path d="M22 22L30 30"/><path d="M50 50L58 58"/><path d="M58 22L50 30"/><path d="M30 50L22 58"/><circle cx="40" cy="40" r="4"/>`,
  chartDown: `<path d="M14 18V62H66"/><path d="M22 28L32 36L42 32L52 44L62 52"/><path d="M62 44V52H54"/>`,
  syringe: `<path d="M40 10V20"/><path d="M32 10H48"/><rect x="32" y="20" width="16" height="30" rx="1"/><path d="M36 28H42"/><path d="M36 36H42"/><path d="M36 44H42"/><path d="M36 50V54H44V50"/><path d="M40 54V72"/>`,
  leaf: `<path d="M20 60C20 36 36 20 60 20C60 44 44 60 20 60Z"/><path d="M20 60L48 32"/>`,
  spoon: `<ellipse cx="40" cy="26" rx="14" ry="11"/><path d="M40 37V64"/><path d="M36 66H44"/>`,
  bolt: `<path d="M44 10L22 44H38L34 70L58 36H42L44 10Z"/>`,
  smile: `<circle cx="40" cy="40" r="22"/><circle cx="32" cy="36" r="2" fill="currentColor" stroke="none"/><circle cx="48" cy="36" r="2" fill="currentColor" stroke="none"/><path d="M30 46Q40 56 50 46"/>`,
  infinity: `<path d="M40 40C36 32 28 28 22 32C16 36 16 44 22 48C28 52 36 48 40 40C44 32 52 28 58 32C64 36 64 44 58 48C52 52 44 48 40 40Z"/>`,
};

export type IconName = keyof typeof ICONS;
