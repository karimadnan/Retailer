import React, { FC } from 'react'
import { Text, View, Pressable } from '../Themed';
import { StyleSheet, Image, FlatList } from 'react-native';
import local from '../../local.json';
import { usePrimaryColors } from '../Themed';
import { StorageProductsProps, StorageProductProps } from './types';

const StorageProduct: FC<{ product: StorageProductProps }> = ({ product }) => {
    const primaryColors = usePrimaryColors();
    return (
        <View style={styles.productCard}>
            <Image resizeMode='contain' style={styles.productImage} source={{ uri: product.image }}/>
            <Text 
                style={styles.productName} 
                numberOfLines={1} 
                ellipsizeMode='tail' 
                {...primaryColors}>
                    {product.name}
            </Text>
            <View style={styles.productDetails}>
                <View {...primaryColors} style={styles.stockChip}>
                    <Text lightColor='#fff' darkColor='#fff' style={{ fontWeight: 'bold' }}>{local.count}: {product.stock}</Text>
                </View>
                <Text style={styles.productPrice}>{product.price} {local.EGP}</Text>
            </View>
        </View>
    )
}

const StorageProducts: FC<StorageProductsProps> = ({ navigation, data }) => {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={({item}) => (
                    <Pressable onPress={() => navigation.navigate('ViewProduct', { product: item })}>
                        <StorageProduct product={item} />
                    </Pressable>)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20,
    },
    stockChip: {
        padding: 2,
        borderRadius: 5
    },
    productCard: {
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 200,
        maxHeight: 200,
        minWidth: '45%',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 20
    },
    productImage: {
        minWidth: '40%',
        minHeight: '40%'
    },
    productDetails: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    productName: {
        fontSize: 20,
        width: 60
    },
    productPrice: {
        fontSize: 15,
        marginRight: 20
    }
})

export default StorageProducts;