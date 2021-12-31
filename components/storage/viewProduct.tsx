import React, { FC, useState, useEffect } from 'react'
import { Text, View, Pressable, TextInput } from '../Themed';
import { StyleSheet, Image, FlatList } from 'react-native';
import local from '../../local.json';
import { usePrimaryColors, usePrimaryColor } from '../Themed';
import { RootStackScreenProps } from '../../types';
import { StorageProductProps } from './types';
import ActionButton from '../actionButton/actionButton';

const ViewProduct: FC<RootStackScreenProps<'ViewProduct'>> = 
({navigation, route: { params }}) => {
    const [tempProduct, setTempProduct] = useState<StorageProductProps>({
        id: '',
        name: '',
        stock: 0,
        price: 0
    });
    const product = params?.product;
    const primaryColors = usePrimaryColors();
    const deleteColors = {lightColor: '#FF5959', darkColor: '#fff'};

    useEffect(() => {
        if (product) {
            setTempProduct(product);
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image resizeMode='contain' style={styles.productImage} source={{ uri: product?.image }}/>
            </View>
                <Text style={styles.label} {...primaryColors}>{local.productName}:</Text>
                <Text style={styles.productName} numberOfLines={2} ellipsizeMode='tail'>{product?.name}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.label} {...primaryColors}>{local.count}:</Text>
                    <Text style={styles.label}>{product?.stock}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label} {...primaryColors}>{local.price}:</Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>{local.EGP}</Text>
                        <Text style={styles.label}>{product?.price}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <ActionButton title={local.editStorageProduct} icon='edit'/>
                    <ActionButton title={local.removeStorageProduct} icon='trash' iconColor={deleteColors} textColor={deleteColors}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    imageContainer: {
        alignItems: 'center'
    },
    infoContainer: {
        flexDirection: 'row-reverse',
    },
    productImage: {
        height: 200,
        width: 300,
        marginVertical: 30
    },
    productName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 25,
        marginVertical: 20,
        fontWeight: 'bold',
        marginHorizontal: 5
    }
})

export default ViewProduct;