import React, { FC, useState } from 'react'
import { Text, View, Pressable, TextInput } from '../Themed';
import { StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import local from '../../local.json';
import Barcode from './barcode';
import ProductCount from './productCount';
import ProductImage from './productImage';
import { usePrimaryColor, usePrimaryColors } from '../Themed';
import ActionButton from '../actionButton/actionButton';

const AddNewProduct: FC = () => {
    const [barcode, setBarcode] = useState<string>('');
    const primaryColor = usePrimaryColor();
    const primaryColors = usePrimaryColors();

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text 
                    style={styles.label}
                    {...primaryColors}>
                        {local.productName}
                </Text>
                <TextInput 
                    placeholder={local.productName} 
                    style={styles.input} 
                    {...primaryColors}
                />
                <Barcode />
                <ProductCount />
                <ProductImage />
                <Pressable onPress={() => console.log('f')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                        <ActionButton title={local.addNewProduct} iconColor={primaryColors} textColor={primaryColors} icon='check' />
                    </View>
                </Pressable>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 25,
        marginHorizontal: 10,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        margin: 10,
        textAlign: 'right'
    },
    labelPlaceholder: {
        fontSize: 20
    },

    addProductButton: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 30,
        elevation: 10,
        paddingVertical: 20,
        marginHorizontal: 10,
        borderRadius: 10
    }
})

export default AddNewProduct;
