import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Blog( {navigation} ) {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>Informações Extras</Text>
            <Pressable style={styles.botao} onPress={()=> navigation.navigate('Info1')}>
                <Text style={styles.textoBotao}>Sobre o Criador</Text>
            </Pressable>
            <Pressable style={styles.botao} onPress={()=> navigation.navigate('Info2')}>
                <Text style={styles.textoBotao}>Atualizações Futuras</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        padding: 20,
        width: 250,
        height: 40,
        backgroundColor: "#CD853F",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
        height: 20,
        fontWeight: 'bold',
    },
    info: {
        color: '#DAA520',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    }
}
);