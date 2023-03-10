/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const breakpoints = ["1em", "30em", "45em", "64em", "80em", "86em", "100em"];

const [xs, sm, md, xm, lg, ml, xl] = breakpoints;
breakpoints.xs = xs; // Mobile - 16px
breakpoints.sm = sm; // Mobile - 480px
breakpoints.md = md; // Tab Portrait - 720px
breakpoints.xm = xm; // Tab Landscape - 1024px
breakpoints.lg = lg; // Desktop - 1280px
breakpoints.ml = ml; // Monitor / Large Desktop - 1360px
breakpoints.xl = xl; // large monitor / 4k - 1600px

// #endregion
// #region typography

const fonts = {
  // primaryRegular: "",
  primaryBook: "consola",
  primaryBlack: "consolab",
};
// #endregion
// #region colors
const colorSets = [
  {
    name: "primary",
    colors: [
      { name: 100, hex: "#F5F5F5" },
      { name: 200, hex: "#000000" },
      { name: 300, hex: "#50A5F1" },
      { name: 400, hex: "#DEE9EF" },
      { name: 500, hex: "#FFD6D8" },
      { name: 600, hex: "#929C9D29" },
      { name: 700, hex: "#12100E" },
      { name: 800, hex: "#d9d9d9" },
      { name: 900, hex: "#BABABA" },
      { name: 1000, hex: "#FACB27" },
      { name: 1100, hex: "#707070" },
      { name: 1200, hex: "#C07BFF" },
      { name: 1300, hex: "#7DCDB6" },
      { name: 1400, hex: "#C47FDD" },
      { name: 1500, hex: "#E5C7F0" },
      { name: 1600, hex: "#FF0000" },
      { name: 1700, hex: "#646464" },
      { name: 1800, hex: "#25215C" },

      { name: 1900, hex: "#FFFFFF" },
      { name: 2000, hex: "#2D5ABA" },
      { name: 2100, hex: "#E9B544" },
      { name: 2200, hex: "#C5CDE1" },
      { name: 2300, hex: "#DFE1E8" },
      { name: 2400, hex: "#F2EDFF" },
    ],
  },

  {
    name: "secondary",
    colors: [
      { name: 100, hex: "#F2EDFF" },
      { name: 200, hex: "#D9D4FF" },
      { name: 300, hex: "#BFBAFA" },
      { name: 400, hex: "#A5A0E0" },
      { name: 500, hex: "#8C87C7" },
      { name: 600, hex: "#736EAE" },
      { name: 700, hex: "#595491" },
      { name: 800, hex: "#403B7B" },
    ],
  },
];

export const colors = colorSets.reduce(
  (colorMap, { name, alias = name, colors: colorSet }) => {
    const color = {};
    const cm = colorMap;
    for (let colorIndex = 0; colorIndex < colorSet.length; colorIndex++) {
      const { name: colorName, hex } = colorSet[colorIndex];
      color[colorIndex] = hex;
      color[colorName] = hex;
    }
    cm[name] = color;
    cm[alias] = color;
    return cm;
  },
  {
    // ...defaultTheme.colors,
    white: "#FFFFFF",
    "white.0": "#FFFFFF",
    black: "#000000",
    "black.0": "#000000",
  }
);

// #endregion
const radii = {
  small: "0.125rem",
  normal: "0.1875rem",
  large: "0.375rem",
  full: "10rem",
  square: 0,
};
const zIndices = {
  modal: 2000,
  tooltip: 5000,
  toast: 7000,
};

const shadows = [
  { name: "none", shadow: undefined },
  { name: "sm", shadow: "0px 4px 100px rgba(0, 0, 0, 0.08)" },
  { name: "m", shadow: "0px 10px 40px 0px rgba(0, 0, 0, 0.08)" },
  { name: "xl", shadow: "0px 4px 30px rgba(0, 0, 0, 0.1)" },
].reduce((shadowSet, { name, shadow }, index) => {
  const s = shadowSet;
  s[name] = shadow;
  s[index] = shadow;
  return s;
});

export const theme = {
  breakpoints,
  radii,
  colors,
  zIndices,
  shadows,
  fonts,
};
