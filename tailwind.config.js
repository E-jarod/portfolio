const defaultTheme = require('tailwindcss/defaultTheme');

const vwSpacingFunction = (eachTwSpacing) => {
  const unwantedKeys = ([key]) => !['0', 'px'].includes(key);
  const remValuesToVw = ([key, value]) => {
    const newKey = `${key}vw`;

    const valueWithoutSuffix = value.split('rem')[0];
    const remToVwCoefficient = 1.1;
    const convertedNumber =
      parseFloat(valueWithoutSuffix) / remToVwCoefficient;
    const newValue = `${convertedNumber}vw`;
    return [newKey, newValue];
  };

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
// console.log(vwFontSize);

module.exports = {
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
};
