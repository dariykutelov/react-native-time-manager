import { Text as DefaultText, View as DefaultView } from 'react-native';

import { useColorScheme } from './useColorScheme';

import { Colors } from '~/utils/theme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'textPrimary');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'primaryBackground'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function BackgroundView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'secondaryBackground'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function useColors() {
  const theme = useColorScheme() ?? 'light';

  return {
    textColor: Colors[theme].textPrimary,
    backgroundColor: Colors[theme].primaryBackground,
    secondaryBackgroundColor: Colors[theme].secondaryBackground,
    tintColor: Colors[theme].primary,
    labelColor: Colors[theme].labelPrimary,
    secondaryLabelColor: Colors[theme].labelTerciary,
  };
}
