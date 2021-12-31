import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { StorageTabs } from '../components/navigationButton/model';
import ActionButtons from '../components/navigationButton'
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <ActionButtons data={StorageTabs} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
