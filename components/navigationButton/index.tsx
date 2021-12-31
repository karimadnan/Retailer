import React, { FC } from 'react'
import { Text, View, Pressable } from '../Themed';
import { StyleSheet } from 'react-native';
import { NavigationButton } from './types';
import { FontAwesome } from '@expo/vector-icons';
import { usePrimaryColors, usePrimaryColor } from '../Themed';

const Buttons = ({ data, navigation}: NavigationButton): JSX.Element  => {
  const primaryColors = usePrimaryColors();
  const primaryColor = usePrimaryColor();

  return (
    <>
    {data.map((b, i) => (
      <Pressable
          key={i} 
          onPress={() => navigation.navigate(b.component)}
          >
          <View style={styles.button}>
            {b.icon && <FontAwesome size={30} color={primaryColor} name={b.icon} />}
            <Text style={styles.title} {...primaryColors} >{b.title}</Text>
          </View>
      </Pressable>
    ))}
    </>
  )
}

const ActionButtons: FC<NavigationButton> = ({ data, navigation }) => {
  return (
    <Buttons data={data} navigation={navigation} />
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row-reverse',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 20,
    elevation: 4,
    minWidth: '80%',
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default ActionButtons;