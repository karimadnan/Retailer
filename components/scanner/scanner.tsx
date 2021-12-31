import React, { FC, useEffect, useState } from 'react'
import { Text, View, Pressable } from '../Themed';
import { StyleSheet } from 'react-native';
import { BarCodeScanner, BarCodeEvent } from 'expo-barcode-scanner';
import { ScannerProps } from './types';
import local from '../../local.json';

const Scanner: FC<ScannerProps> = ({ onScan }) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState<boolean>(false);

    const askForAccess = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    }

    useEffect(() => {
        askForAccess();
    }, []);

    const handleBarCodeScanned = (e: BarCodeEvent): JSX.Element | void => {
        setScanned(true);
        onScan(e.data);
    };

    if (hasPermission === null || false) {
        return (
            <View style={styles.error}>
                <Text
                style={styles.title}
                >{local.requestCameraAccess}</Text>
                <Pressable
                    onPress={() => askForAccess()}
                >
                    <View style={styles.button}>
                        <Text style={styles.title} lightColor='#3FA796' darkColor='#F14A16'>{local.activateCameraAccess}</Text>
                    </View>
                </Pressable>
            </View>
        );
    }

    return (
        <>
        {<BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />}
        </>
    )
}

const styles = StyleSheet.create({
    error: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
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
export default Scanner;