import { Colors } from './types'

export const baseColors = {
  failure: '#ED4B9E',
  primary: '#FFA91C',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  secondary: '#A85F16',
  success: '#31D0AA',
  warning: '#ff4d4f',
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: '#10183D',
  backgroundDisabled: '#CDECF8',
  contrast: '#191326',
  invertedContrast: '#FFFFFF',
  input: '#CDECF8',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  text: '#FFA91C',
  textGradient: 'linear-gradient(190deg,#50E3C2 0%,#17B4EB 100%)',
  textDisabled: '#BDC2C4',
  textSubtle: '#B1AFCD',
  borderColor: '#E9EAEB',
  card: '#b3c7ff', // bg sidebar, header-bar
  gradient: 'linear-gradient(90deg,#384cff 0%,#2486f9 0.01%,#3ddcec 100%)',
  gradients: {
    common: '#ffffff',
    bubblegum: 'linear-gradient(139.73deg,#9df978 0%,#d5e8cd 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#9A6AFF',
  background: '#10183D',
  backgroundDisabled: '#3c3742',
  contrast: '#FFFFFF',
  invertedContrast: '#191326',
  input: '#483f5a',
  inputSecondary: '#66578D',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#EAE2FC',
  textGradient: 'linear-gradient(190deg,#16B4EB 0%,#23E73C 100%)',
  textDisabled: '#666171',
  textSubtle: '#B1AFCD',
  borderColor: '#524B63',
  card: '#27262c',
  gradient: 'linear-gradient(90deg,#384cff 0%,#2486f9 0.01%,#3ddcec 100%)',
  gradients: {
    common: 'linear-gradient(90deg,#384cff 0%,#2486f9 0.01%,#3ddcec 100%)',
    bubblegum: 'linear-gradient(90deg,#384cff 0%,#2486f9 0.01%,#3ddcec 100%)',
  },
}
