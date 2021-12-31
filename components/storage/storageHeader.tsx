import React, { FC, useState } from 'react'
import { Text, View } from '../Themed';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { usePrimaryColor, usePrimaryColors } from '../Themed';
import local from '../../local.json';


const StorageHeader: FC = () => {
    const primaryColor = usePrimaryColor();
    const primaryColors = usePrimaryColors();

    return (
    <View style={styles.header}>
        <View style={styles.title}>
            <Text 
                style={styles.label}
                {...primaryColors}>
                10
            </Text>
            <Text 
                style={styles.label}
                {...primaryColors}>
                {local.totalProductsTypes}
            </Text>
            <FontAwesome size={30} color={primaryColor} name={'cube'} />
        </View>
        <View style={{ ...styles.separator, borderColor: primaryColor }} />
        <View style={styles.title}>
            <Text 
                style={styles.label}
                {...primaryColors}>
                120
            </Text>
            <Text 
                style={styles.label}
                {...primaryColors}>
                {local.totalProducts}
            </Text>
            <FontAwesome size={30} color={primaryColor} name={'cubes'} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    title: {
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    separator: {
        borderWidth: 0.5,
        marginVertical: 10
    }
})

export default StorageHeader;