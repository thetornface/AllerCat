export const ICONS: Record<string, string> = {
  dna: `<path d="M22 14C22 26 58 26 58 40S22 54 22 66"/><path d="M58 14C58 26 22 26 22 40S58 54 58 66"/><path d="M28 22H52"/><path d="M28 38H52"/><path d="M28 58H52"/>`,
  cat: `<path d="M16 18L26 34"/><path d="M64 18L54 34"/><path d="M40 62C27 62 18 53 18 42C18 30 28 20 40 20C52 20 62 30 62 42C62 53 53 62 40 62Z"/><circle cx="32" cy="40" r="2" fill="currentColor" stroke="none"/><circle cx="48" cy="40" r="2" fill="currentColor" stroke="none"/><path d="M37 50L40 52L43 50"/><path d="M40 47V50"/><path d="M30 53L22 56"/><path d="M30 49L22 48"/><path d="M50 53L58 56"/><path d="M50 49L58 48"/>`,
  home: `<path d="M14 38L40 16L66 38"/><path d="M20 36V62H60V36"/><path d="M34 62V46H46V62"/>`,
  microscope: `<path d="M28 60H52"/><path d="M32 60V66H48V60"/><path d="M40 60V44"/><path d="M30 50A10 10 0 0 0 50 50"/><rect x="36" y="20" width="8" height="20" rx="2"/><path d="M40 16V20"/><path d="M44 28L52 28L52 36"/>`,
  pill: `<rect x="14" y="32" width="52" height="16" rx="8"/><path d="M40 32V48"/>`,
  male: `<circle cx="32" cy="48" r="14"/><path d="M44 36L62 18"/><path d="M50 18H62V30"/>`,
  heart: `<path d="M40 60C38 60 18 47 18 32C18 25 23 20 30 20C34 20 38 22 40 26C42 22 46 20 50 20C57 20 62 25 62 32C62 47 42 60 40 60Z"/>`,
  droplet: `<path d="M40 14C40 14 22 32 22 46A18 18 0 0 0 58 46C58 32 40 14 40 14Z"/><path d="M50 46A10 10 0 0 1 40 56" stroke-opacity="0.5"/>`,
  sparkle: `<path d="M40 14V26"/><path d="M40 54V66"/><path d="M14 40H26"/><path d="M54 40H66"/><path d="M22 22L30 30"/><path d="M50 50L58 58"/><path d="M58 22L50 30"/><path d="M30 50L22 58"/><circle cx="40" cy="40" r="4"/>`,
  chartDown: `<path d="M14 18V62H66"/><path d="M22 28L32 36L42 32L52 44L62 52"/><path d="M62 44V52H54"/>`,
  syringe: `<path d="M48 12L66 30"/><path d="M44 16L60 32"/><path d="M40 20L48 28"/><path d="M56 28L24 60"/><path d="M16 56L20 60L24 56"/><path d="M52 24L60 32"/>`,
  leaf: `<path d="M20 60C20 36 36 20 60 20C60 44 44 60 20 60Z"/><path d="M20 60L48 32"/>`,
  spoon: `<ellipse cx="40" cy="22" rx="12" ry="9"/><path d="M40 31V64"/><path d="M36 64H44"/>`,
  bolt: `<path d="M44 10L22 44H38L34 70L58 36H42L44 10Z"/>`,
  smile: `<circle cx="40" cy="40" r="22"/><circle cx="32" cy="36" r="2" fill="currentColor" stroke="none"/><circle cx="48" cy="36" r="2" fill="currentColor" stroke="none"/><path d="M30 46Q40 56 50 46"/>`,
  infinity: `<path d="M40 40C36 32 28 28 22 32C16 36 16 44 22 48C28 52 36 48 40 40C44 32 52 28 58 32C64 36 64 44 58 48C52 52 44 48 40 40Z"/>`,
};

export type IconName = keyof typeof ICONS;
