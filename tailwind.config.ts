import type { Config } from 'tailwindcss';
import { default as defaultTheme } from 'tailwindcss/defaultTheme';

// const defaultTheme = require('tailwindcss/defaultTheme');

type Tuple = [string, string];

const unwantedKeys = ([key]: Tuple) => !['0', 'px'].includes(key);
const remValuesToVw = ([key, value]: Tuple) => {
  const newKey = `${key}vw`;

  const valueWithoutSuffix = value.split('rem')[0];
  const remToVwCoefficient = 1.1;
  const convertedNumber =
    parseFloat(valueWithoutSuffix) / remToVwCoefficient;
  const newValue = `${convertedNumber}vw`;
  return [newKey, newValue];
};

const vwSpacingFunction = (eachTwSpacing: Tuple[]) => {
  const vwSpacingsEntries = eachTwSpacing
    .filter(unwantedKeys)
    .map(remValuesToVw);
  const vwSpacings = Object.fromEntries(vwSpacingsEntries);

  return vwSpacings;
};

const vwSpacing = vwSpacingFunction(Object.entries(defaultTheme.spacing));
const vwFontSize = vwSpacingFunction(
  Object.entries(defaultTheme.fontSize).map(([k, v]) => [k, v[0]]),
);

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        ...vwSpacing,
      },
      fontSize: {
        ...vwFontSize,
      },
    },
  },
  plugins: [],
} satisfies Config;
