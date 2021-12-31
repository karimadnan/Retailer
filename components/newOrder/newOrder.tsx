import React, { FC } from 'react'
import { Text, View, Pressable } from '../Themed';
import { StyleSheet} from 'react-native';
import local from '../../local.json';
import useStore from '../../store/useStore';
import Cart from '../cart/cart';
import { usePrimaryColors } from '../Themed';

const NewOrder: FC<{ navigation: any }> = ({ navigation }) => {
    const [cleanCart] = useStore(state => [state.cleanCart])
    const primaryColors = usePrimaryColors();

    const handleEndOrder = () => {
        cleanCart();
        navigation.goBack()
    }


    return (
        <View style={{flex: 1}}>
            <Cart />
            <View style={styles.container}>
                <Pressable onPress={handleEndOrder} >
                <View style={styles.button}>
                    <Text 
                        style={styles.title} 
                        lightColor= '#FF5959'
                        darkColor='#fff'>
                            {local.endOrder}
                    </Text>
                </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('ScanProduct')} >
                <View style={styles.button}>
                    <Text 
                        style={styles.title} 
                        {...primaryColors}>
                            {local.addCartProduct}
                    </Text>
                </View>
                </Pressable>
            </View>
            <View style={styles.bigButtonContainer}>
            <Pressable onPress={() => navigation.navigate('ScanProduct')} >
                <View style={styles.bigButton}>
                    <Text 
                        style={styles.title} 
                        {...primaryColors}>
                            {local.finishOrder}
                    </Text>
                </View>
            </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    button: {
        borderRadius: 10,
        elevation: 4,
        padding: 20,
    },
    bigButton: {
        borderRadius: 10,
        elevation: 4,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigButtonContainer: {
        marginHorizontal: 50,
        width: '75%',
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default NewOrder;