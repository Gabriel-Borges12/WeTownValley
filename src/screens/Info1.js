import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.nome}>Gabriel Camargo de Souza Borges</Text>
            <Image style={styles.foto} source={require('./fotoBorges.jpeg')} />
            <Text style={styles.descrevendo}>Atualmente tenho 17 anos e estou cursando o ensino técnico de Desenvolvimento de Sistemas, que temos como foco desenvolver páginas web e mobile, aprimorando nossas habilidades nessas áreas em questão.</Text>
            <Pressable style={styles.botao}
                onPress={() => navigation.goBack()} >
                <Text style={styles.textoBotao}>Voltar para o Blog</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: "#CD853F",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
    },
    textoBotao: {
        color: "white",
        fontSize: 20,
        height: 30,
        fontWeight: "bold",
    },
    nome: {
        color: '#DAA520',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 60,
    },
    foto: {
        width: 120,
        height: 120,
        borderRadius: 50,
        marginTop: 20,
    },
    descrevendo: {
        textAlign: 'justify',
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20,
    }

}
);