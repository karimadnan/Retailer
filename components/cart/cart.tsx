import React, { FC } from 'react'
import { Text, View, Pressable } from '../Themed';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import local from '../../local.json';
import useStore from '../../store/useStore';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { usePrimaryColor, usePrimaryColors } from '../Themed';
import useColorScheme from '../../hooks/useColorScheme';

const CartItems: FC = () => {
    const [cart, addCartItem, removeCartItem] = useStore(state => 
        [state.cart, state.addCartItem, state.removeCartItem]);
    const colorScheme = useColorScheme();
    const primaryColor = usePrimaryColor();
    const primaryColors = usePrimaryColors();

    if (!cart.length) {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                <View style={styles.emptyCartContainer}>
                    <FontAwesome size={50} color={primaryColor} name='shopping-cart' />
                    <Text 
                        style={styles.emptyCartTitle} 
                        {...primaryColors}>
                        {local.emptyCartTitle}
                    </Text>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            {cart.map((p, i) => (
                <View key={i}>
                    <View style={styles.productDetails}>
                        <Text style={styles.cartText} numberOfLines={1} ellipsizeMode='tail'>{p.name}</Text>
                        <Text style={styles.cartText}>{p.price * p.count} {local.EGP}</Text>
                    </View>
                    <View style={styles.productActions}>
                        <Pressable
                            onPress={() => addCartItem(p)} >
                            <View style={styles.button}>
                                <FontAwesome size={20} color={Colors[colorScheme].text} name='plus' />
                            </View>
                        </Pressable>
                        <Text style={styles.cartText}>({p.count})</Text>
                        <Pressable
                            onPress={() => removeCartItem(p.id)} >
                            <View style={styles.button}>
                                <FontAwesome size={20} color={Colors[colorScheme].text} name='minus' />
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={() => removeCartItem(p.id, true)} >
                            <View style={styles.button}>
                                <FontAwesome size={20} color={Colors[colorScheme].text} name='close' />
                            </View>
                        </Pressable>
                    </View>
                    <View 
                        style={styles.separator}
                        {...primaryColors}/>
                </View>
            ))}
            </ScrollView>
        </SafeAreaView>
    )
};

const Cart: FC = () => {
    const primaryColors = usePrimaryColors();
    const [cartTotalItems, cartTotalPrice] = useStore(state => [state.cartTotalItems, state.cartTotalPrice]);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text 
                    style={styles.title} 
                    {...primaryColors}>
                    {local.totalCartPrice} ({cartTotalPrice()}) {local.EGP}
                </Text>
                <Text 
                    style={styles.title} 
                    {...primaryColors}>
                    {local.cart} ({cartTotalItems()})
                </Text>
            </View>
            <View 
                style={styles.separator}
                {...primaryColors}/>
            <CartItems />
            <View 
                style={styles.separator}
                {...primaryColors}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    emptyCartContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 150
    },
    emptyCartTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    scrollView: {
        height: '70%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    productActions: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    productDetails: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    cartText: {
        fontSize: 20
    },
    separator: {
        height: 1,
        width: '100%',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        elevation: 5
    }
})

export default Cart;