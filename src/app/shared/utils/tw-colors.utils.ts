type TwDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type TwNumber = '50' | `${TwDigit}00`;
type TwColorsName =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'rose';

type TwColorsWithoutVariants =
  | 'inherit'
  | 'current'
  | 'transparent'
  | 'black'
  | 'white';

export type TwColors =
  | TwColorsWithoutVariants
  | `${TwColorsName}-${TwNumber}`;

export type TwBgColors = `bg-${TwColors}`;
export type TwTextColors = `text-${TwColors}`;
export type TwFillColors = `fill-${TwColors}`;
