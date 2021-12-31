import React, { FC, useState } from 'react'
import { Text, View, Pressable, TextInput } from '../Themed';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { usePrimaryColor, usePrimaryColors } from '../Themed';
import local from '../../local.json';

const ProductCount: FC = () => {
    const primaryColor = usePrimaryColor();
    const primaryColors = usePrimaryColors();

    return (
        <>
        <Text 
            style={styles.label}
            {...primaryColors}>
                {local.productsCount}
        </Text>
        <View style={styles.countContainer}>
            <TextInput 
                placeholder={local.productsCount}
                keyboardType="number-pad"
                style={styles.input} 
                {...primaryColors}/>
            <Pressable onPress={() => console.log('f')}>
                <View style={{ ...styles.countButtons, borderColor: primaryColor}}>
                    <FontAwesome 
                        size={30} 
                        color={primaryColor} 
                        name={'plus'} />
                </View>
            </Pressable>
            <Pressable onPress={() => console.log('f')}>
                <View style={{ ...styles.countButtons, borderColor: primaryColor}}>
                    <FontAwesome 
                        size={30} 
                        color={primaryColor} 
                        name={'minus'} />
                </View>
            </Pressable>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        margin: 10,
        textAlign: 'right'
    },
   countContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    countButtons: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10
    },
    label: {
        fontSize: 25,
        marginHorizontal: 10,
        marginVertical: 10,
        fontWeight: 'bold'
    },
});

export default ProductCount;