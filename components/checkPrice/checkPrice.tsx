import React, { FC, useState, useEffect } from 'react'
import { Text, View, Pressable, usePrimaryColor } from '../Themed';
import { StyleSheet } from 'react-native';
import Scanner from '../scanner/scanner';
import local from '../../local.json';
import { usePrimaryColors } from '../Themed';

const CheckPrice: FC = () => {
    const [scanned, setScanned] = useState<boolean>(false);
    const [price, setPrice] = useState<string>('0');
    const [mounted, setMounted] = useState<boolean>(false);
    const primaryColors = usePrimaryColor();

    useEffect(() => {
      setMounted(true);
    }, [])

    const handleOnScan = (data: string) => {
        setScanned(true);
        setPrice(data)
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>{local.price} {price}</Text>
        <Pressable
          onPress={() => setScanned(false)}
          >
            <View style={styles.button}>
                <Text style={styles.title} {...primaryColors}>{local.checkPrice}</Text>
            </View>
        </Pressable>
        {!scanned && <Scanner onScan={handleOnScan} />}
    </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
title: {
    fontSize: 25,
    fontWeight: 'bold'
},
button: {
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 30,
    elevation: 4,
    minWidth: 250,
    maxWidth: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default CheckPrice;