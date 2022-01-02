import React, { FC, useState, useEffect } from 'react'
import { Text, View, Pressable, TextInput } from '../Themed';
import { StyleSheet, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import local from '../../local.json';
import { usePrimaryColors, usePrimaryColor } from '../Themed';
import ActionButton from '../actionButton/actionButton';
import { EditProductProps } from './types';
import { EditStorageProduct } from './types';

const EditProduct: FC<EditProductProps> = ({ product, setEditing, onEdit }) => {
    const [tempProduct, setTempProduct] = useState<EditStorageProduct>({});
    const primaryColors = usePrimaryColors();
    const deleteColors = {lightColor: '#FF5959', darkColor: '#fff'};
    const isDisabled = Object.keys(tempProduct).length < 1;

    const handleOnChange = (text: string) => {

    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>{local.productName}</Text>
                    <TextInput
                        onChangeText={handleOnChange}
                        style={styles.input} 
                        {...primaryColors} 
                        value={product?.name} />

                    <Text style={styles.label}>{local.productsCount}</Text>
                    <TextInput
                        onChangeText={handleOnChange}
                        style={styles.input} 
                        {...primaryColors}
                        value={product?.stock.toString()} />

                    <Text style={styles.label}>{local.price}</Text>
                    <TextInput
                        onChangeText={handleOnChange}
                        style={styles.input} 
                        {...primaryColors} 
                        value={product?.price.toString()}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={() => onEdit(tempProduct)} disabled={isDisabled}>
                        <ActionButton 
                            title={local.confirmEditProduct} 
                            disabled={isDisabled}
                            icon='check'
                            iconSize={25} 
                            textSize={20} />
                    </Pressable>
                    <Pressable onPress={() => setEditing(false)}>
                        <ActionButton 
                            title={local.declineEditProduct} 
                            icon='close' 
                            iconColor={deleteColors} 
                            textColor={deleteColors} 
                            iconSize={25} 
                            textSize={20} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  formContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 50
  },
  label: {
      fontSize: 20,
      marginVertical: 10,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  input: {
      borderRadius: 10,
      borderWidth: 1,
      paddingVertical: 5,
      paddingHorizontal: 20,
      minWidth: '80%',
      maxWidth: '80%',
      textAlign: 'right'
  }
});

export default EditProduct;