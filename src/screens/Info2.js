import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Info2() {
    return (
        <View style={styles.container}>
            <Text>Página Info2</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

}
);