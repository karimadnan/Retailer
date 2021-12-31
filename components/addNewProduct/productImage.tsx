import React, { FC, useState } from 'react'
import { Text, View, Pressable } from '../Themed';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { usePrimaryColor, usePrimaryColors } from '../Themed';
import local from '../../local.json';

const ProductImage: FC = () => {
    const primaryColor = usePrimaryColor();
    const primaryColors = usePrimaryColors();

    return (
        <>
        <Text 
            style={styles.label}
            {...primaryColors}>
                {local.productImage}
        </Text>
        <View style={styles.imageContainer}>
            <View 
                style={{ ...styles.imagePlaceholder, borderColor: primaryColor}} 
                lightColor='#E0E0E0' darkColor='#212121'>
                <FontAwesome 
                    size={30} 
                    color={primaryColor} 
                    name={'image'} />
                <Text 
                    style={styles.imagePlaceholderLabel}
                    {...primaryColors}>
                        {local.productImage}
                </Text>
            </View>
            <View style={styles.imageButtons}>
                <Pressable onPress={() => console.log('f')}>
                    <View style={{ ...styles.outlinedButton, borderColor: primaryColor}}>
                        <FontAwesome size={30} color={primaryColor} name={'camera'} style={{ marginHorizontal: 5 }} />
                        <Text 
                            style={styles.labelPlaceholder}
                            {...primaryColors}>
                                {local.captureProductImage}
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => console.log('f')}>
                    <View style={{ ...styles.outlinedButton, borderColor: primaryColor}}>
                        <FontAwesome size={30} color={primaryColor} name={'upload'} style={{ marginHorizontal: 5 }} />
                        <Text 
                            style={styles.labelPlaceholder}
                            {...primaryColors}>
                                {local.uploadProductImage}
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 25,
        marginHorizontal: 10,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    labelPlaceholder: {
        fontSize: 20
    },
    outlinedButton: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
       imageContainer: {
        flexDirection: 'row-reverse',
        marginBottom: 20
    },
    imagePlaceholder: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginHorizontal: 10,
        borderRadius: 10
    },
    imagePlaceholderLabel: {
        fontWeight: 'bold',
        marginTop: 5
    },
    imageButtons: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
});

export default ProductImage;