import React, { FC } from 'react'
import { Text, View} from '../Themed';
import { StyleSheet, ActivityIndicator } from 'react-native';
import local from '../../local.json';
import { usePrimaryColor } from '../Themed';
import { LoaderProps } from './types';

const Loader: FC<LoaderProps> = ({ loading }) => {
    const primaryColor = usePrimaryColor();

    return (
        <>
        {loading &&
        <View style={styles.container}>
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={primaryColor}/>
                <Text style={{ marginVertical: 10 }}>{local.loading}...</Text>
            </View>
        </View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    },
    loader: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 40,
        alignItems: 'center',
        marginHorizontal: '20%',
        marginTop: '80%',
    }
})

export default Loader;