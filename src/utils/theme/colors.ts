export type ColorMode = 'light' | 'dark';

export const colors: Record<
  ColorMode,
  {
    primary: string;
    lightPrimary: string;
    secondary: string;
    textPrimary: string;
    colorPrimaryBackground: string;
    colorSecondaryBackground: string;
    primaryBackground: string;
    secondaryBackground: string;
    labelPrimary: string;
    labelTerciary: string;
    error: string;
    separator: string;
  }
> = {
  light: {
    primary: '#3f52e3',
    lightPrimary: '#3A87FF',
    secondary: '#ff54a6',
    textPrimary: '#OC1D36',
    colorPrimaryBackground: '#ebf3ff',
    colorSecondaryBackground: '#ffeef6',
    primaryBackground: '#fff',
    secondaryBackground: '#F2F2F2',
    labelPrimary: '#000',
    labelTerciary: '#3C3C4399',
    error: 'crimson',
    separator: '#54545656',
  },
  dark: {
    primary: '#3f52e3',
    lightPrimary: '#3A87FF',
    secondary: '#ff54a6',
    textPrimary: '#fff',
    colorPrimaryBackground: '#ebf3ff',
    colorSecondaryBackground: '#ffeef6',
    primaryBackground: '#2C2C2E',
    secondaryBackground: '#1C1C1E',
    labelPrimary: '#fff',
    labelTerciary: '#EBEBF599',
    error: '#FF0000',
    separator: '#54545656',
  },
};

export const getTheme = (mode: ColorMode) => {
  return colors[mode];
};
