import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Blog( {navigation} ) {
    return (
        <View style={styles.container}>
            <Text>Página Blog</Text>
            <Pressable onPress={()=> navigation.navigate('Info1')}>
                <Text>Abra a tela Info 1</Text>
            </Pressable>
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