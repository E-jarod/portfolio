type TwSpacingPrefix = 'p' | 'm' | 'w' | 'h';
type TwEdgeSpacingPrefix = 't' | 'b' | 'l' | 'r';
type TwAllSpacingPrefix =
  | `${TwSpacingPrefix}${TwEdgeSpacingPrefix}`
  | TwSpacingPrefix;

type TwSpacingDigit =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | 'px'
  | 0.5
  | 1.5
  | 2.5
  | 3.5;

export type TwSpacings = `${TwAllSpacingPrefix}-${TwSpacingDigit}`;

export type TwSpacingsForCv = Exclude<
  `${TwAllSpacingPrefix}-${TwSpacingDigit}vw` | `${TwAllSpacingPrefix}-0`,
  `${TwAllSpacingPrefix}-pxvw` | `${TwAllSpacingPrefix}-0vw`
>;

type Decrement = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export type RepeatString<S extends string, N extends number> = N extends 1
  ? S
  : `${S} ${RepeatString<S, Decrement[N]>}`;

export type TwPaddingsForCv = Exclude<
  | `p-${TwSpacingDigit}vw`
  | `p${TwEdgeSpacingPrefix}-${TwSpacingDigit}vw`
  | 'p-0'
  | `p${TwEdgeSpacingPrefix}-0`,
  `p${TwEdgeSpacingPrefix}-0vw` | 'p-0vw'
>;
