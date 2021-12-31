import React, { FC, useState } from 'react'
import { Text, View } from '../Themed';
import { StyleSheet, Pressable} from 'react-native';
import local from '../../local.json';
import useStore from '../../store/useStore';
import Scanner from '../scanner/scanner';

const ScanProduct: FC<{ navigation: any }> = ({ navigation }) => {
    const [scanned, setScanned] = useState(false);
    const [addCartItem] = useStore(state => [state.addCartItem]);

    const handleOnScan = (id: string) => {
        setScanned(true);
        if (id) {
            addCartItem({
                id: `${Math.random()}`,
                name: 'جردل',
                price: 18.75,
                count: 1
            })
            navigation.goBack();
        } else {

        }
    }

    return (
        <>
            {!scanned && <Scanner onScan={handleOnScan}/>}
        </>
    )
}

export default ScanProduct;