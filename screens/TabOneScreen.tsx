import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { MainTabs } from '../components/navigationButton/model';
import ActionButtons from '../components/navigationButton'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {


  return (
    <View style={styles.container}>
      <ActionButtons data={MainTabs} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
