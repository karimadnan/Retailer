import React, { FC, useState } from 'react'
import { Text, View, Pressable, TextInput } from '../Themed';
import { StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import local from '../../local.json';
import StorageHeader from './storageHeader';
import { usePrimaryColor } from '../Themed';
import StorageProducts from './storageProducts';
import { RootStackScreenProps } from '../../types';

const Storage: FC<RootStackScreenProps<'Storage'>> = ({ navigation, route }) => {
    const primaryColor = usePrimaryColor();

    return (
        <View style={{ flex: 1 }}>
            <StorageHeader />
            <View style={{ ...styles.searchBar, borderColor: primaryColor }}>
                <Pressable>
                    <FontAwesome size={30} color={primaryColor} name={'search'} />
                </Pressable>
                <View style={{ ...styles.separator, borderColor: primaryColor }} />
                <TextInput style={styles.searchBox} placeholder={local.searchProducts} />
                <View style={{ ...styles.separator, borderColor: primaryColor }} />
                <Pressable>
                    <FontAwesome size={30} color={primaryColor} name={'camera'} />
                </Pressable>
            </View>
            <StorageProducts data={[{
                id: '0',
                name: 'كاتل الحلبيسشلبببببببببببببببffffffffffffffببببببببببببببببببببببببببببببببببببببببببب',
                stock: 10,
                price: 200,
                image: 'https://images-na.ssl-images-amazon.com/images/I/610ytjrBknL.__AC_SX300_SY300_QL70_ML2_.jpg'
            },
            {
                id: '1',
                name: 'جردل بيسيق',
                stock: 30,
                price: 50,
                image: 'https://m.media-amazon.com/images/I/41LIsQhOsyS._AC_UL320_.jpg'
            },
            {
                id: '2',
                name: 'جردل',
                stock: 30,
                price: 50,
                image: 'https://m.media-amazon.com/images/I/61RPKbXk10L._AC_SY200_.jpg'
            },
            {
                id: '3',
                name: 'جردل',
                stock: 30,
                price: 50,
                image: 'https://images-na.ssl-images-amazon.com/images/I/81qLNmNOhoL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
            },
            {
                id: '4',
                name: 'جردل',
                stock: 30,
                price: 50,
                image: 'https://m.media-amazon.com/images/I/41LIsQhOsyS._AC_UL320_.jpg'
            }]} navigation={navigation} route={route} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 0.8,
        marginHorizontal: 20,
        borderRadius: 10
    },
    separator: {
        borderWidth: 0.6,
        marginHorizontal: 10,
    },
    searchBox: {
        width: '70%',
        fontSize: 20,
        textAlign: 'right'
    }
})

export default Storage;