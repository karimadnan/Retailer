import React, { FC } from 'react'
import { Text, View } from '../Themed';
import { StyleSheet } from 'react-native';
import { ActionButtonProps } from './types';
import { FontAwesome } from '@expo/vector-icons';
import { usePrimaryColors } from '../Themed';
import useColorScheme from '../../hooks/useColorScheme';

const ActionButton: FC<ActionButtonProps> = ({ 
    title,
    iconColor, 
    textColor, 
    icon, 
    iconSize,
    textSize,
    disabled
  }) => {
    const primaryColors = usePrimaryColors(); 
    const colorScheme = useColorScheme();
    const iconPrimary = colorScheme === 'light' ? primaryColors.lightColor : primaryColors.darkColor;
    const dynamicIconColor = iconColor ? colorScheme === 'light' ? iconColor.lightColor : iconColor.darkColor : iconPrimary;

    return (
        <View style={{ ...(disabled ? {...styles.button, ...styles.disabledButton} : styles.button) }}>
            {icon && <FontAwesome size={iconSize || 30} color={dynamicIconColor} name={icon} />}
            <Text style={{ ...styles.title, fontSize: textSize || 25 }} {...(textColor || primaryColors)} >{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   button: {
    flexDirection: 'row-reverse',
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginVertical: 10,
    elevation: 4,
    minWidth: '80%',
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  disabledButton: {
    elevation: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  title: {
    fontWeight: 'bold',
  }
})

export default ActionButton;