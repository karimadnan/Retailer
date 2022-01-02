/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { 
    Text as DefaultText, 
    View as DefaultView, 
    Pressable as DefaultPressable,
    TextInput as DefaultTextInput,
  } from 'react-native';
import { PressableProps as DefaultPressableProps } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';


export function usePrimaryColor() {
  const colorScheme = useColorScheme();
  const primaryColor = colorScheme === 'light' ? Colors.light.primary : Colors.dark.primary;
  return primaryColor
}

export function usePrimaryColors() {
    const primaryColors = { lightColor: Colors.light.primary, darkColor: Colors.dark.primary };
    return primaryColors
}

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type PressableProps = ThemeProps & DefaultPressableProps;
export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Pressable(props: PressableProps) {
  const { disabled } = props;

  return <DefaultPressable 
          style={({ pressed }) => ({
            transform: [{ scale: !disabled ? pressed ? 0.9 : 1 : 1}]
          })} {...props} 
        />
}

export function TextInput(props: TextInputProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;

    const theme = useColorScheme();
    const color = theme === 'dark' ? darkColor : lightColor;

    return <DefaultTextInput style={[{ borderColor: color }, style]} {...otherProps} />
}