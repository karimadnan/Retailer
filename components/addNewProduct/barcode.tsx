import React, { FC, useState } from 'react'
import { Text, View, Pressable } from '../Themed';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useColorScheme from '../../hooks/useColorScheme';
import local from '../../local.json';
import { usePrimaryColor, usePrimaryColors } from '../Themed';

const Barcode: FC = () => {
    const primaryColor = usePrimaryColor();
    const primaryColors = usePrimaryColors();

    return (
        <>
        <Text 
            style={styles.label}
            {...primaryColors}>
                {local.barcode}
        </Text>
        <View style={styles.barcodeContainer}>
            <View 
                style={styles.barcode} 
                {...primaryColors}>
                <Text 
                    style={styles.labelPlaceholder}
                    lightColor='#fff' 
                    darkColor='#fff'>
                        {local.barcode}
                </Text>
            </View>
            <Pressable onPress={() => console.log('f')}>
                <View style={{ ...styles.scanBarcode, borderColor: primaryColor}}>
                    <FontAwesome size={30} color={primaryColor} name={'camera'} style={{ marginHorizontal: 5 }} />
                    <Text 
                        style={styles.labelPlaceholder}
                        {...primaryColors}>
                            {local.scanBarcode}
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={() => console.log('f')}>
                <View style={{ ...styles.scanBarcode, borderColor: primaryColor}}>
                    <FontAwesome size={30} color={primaryColor} name={'barcode'} style={{ marginHorizontal: 5 }} />
                    <Text 
                        style={styles.labelPlaceholder}
                        {...primaryColors}>
                            {local.generateBarcode}
                    </Text>
                </View>
            </Pressable>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    scanBarcode: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    label: {
        fontSize: 25,
        marginHorizontal: 10,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    barcodeContainer: {
        flexDirection: 'row-reverse',
        marginVertical: 20,
    },
    barcode: {
        marginHorizontal: 5,
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    labelPlaceholder: {
        fontSize: 20
    },
})

export default Barcode;