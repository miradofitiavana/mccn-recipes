export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const minWidth = key => {
  return style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}

export const maxWidth = key => {
  return style => `@media(max-width: ${breakpoints[key] - 0.01}px) { ${style} }`
}

export const between = (keyMin, keyMax) => {
  return style =>
    `@media (min-width: ${breakpoints[keyMin]}px) and (max-width: ${
      breakpoints[keyMax] - 0.01
    }px) { ${style} }`
}

export const calcCol = num => {
  return `${(100 / 12) * num}%`
}
