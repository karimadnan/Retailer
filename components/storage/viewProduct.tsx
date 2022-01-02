import React, { FC, useState, useEffect } from 'react'
import { Text, View, Pressable } from '../Themed';
import { StyleSheet, Image, Modal } from 'react-native';
import local from '../../local.json';
import { usePrimaryColors, usePrimaryColor } from '../Themed';
import { RootStackScreenProps } from '../../types';
import { StorageProduct, EditStorageProduct } from './types';
import ActionButton from '../actionButton/actionButton';
import Loader from '../loader/loader';
import EditProduct from './editProduct';
import Barcode from '@kichiyaki/react-native-barcode-generator'

const ViewProduct: FC<RootStackScreenProps<'ViewProduct'>> = 
({navigation, route: { params }}) => {
    const [editing, setEditing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [product, setProduct] = useState<StorageProduct>({
        id: '',
        name: '',
        price: 0,
        stock: 0
    });
    const primaryColors = usePrimaryColors();
    const deleteColors = {lightColor: '#FF5959', darkColor: '#fff'};

    useEffect(() => {
        setProduct(params?.product)
    })

    const onEditProduct = (editedProduct: EditStorageProduct) => {
        const oldProduct = product; // Used in case of optimistic loading failed
        const finalProduct = {...product, ...editedProduct};
        setEditing(false);
        // setLoading(true);

    }

    return (
        <View style={styles.container}>
            <Loader loading={loading}/>
             <Modal
                animationType="slide"
                transparent={true}
                visible={editing}
                onRequestClose={() => {
                    setEditing(!editing);
                }}
            >
                <EditProduct product={product} onEdit={onEditProduct} setEditing={setEditing}/>
            </Modal>
            <View style={styles.imageContainer}>
                <Image resizeMode='contain' style={styles.productImage} source={{ uri: product?.image }}/>
            </View>
            <View style={styles.barcodeContainer}>
                <Barcode value="12365987987" text="12365987987" format='UPC'/>
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
                <Pressable onPress={() => setEditing(true)}>
                    <ActionButton title={local.editStorageProduct} icon='edit'/>
                </Pressable>
                <ActionButton title={local.removeStorageProduct} icon='trash' iconColor={deleteColors} textColor={deleteColors}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    barcodeContainer: {
        justifyContent: 'center',
        alignItems: 'center'
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