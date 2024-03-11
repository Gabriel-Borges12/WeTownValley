import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>
            <Text>Página Feed</Text>
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