import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.deslizar}>
                <View style={styles.centered}>
                    <Image style={styles.logo} source={require('./Logo Aplicativo.png')} />
                    <Text style={styles.quemSomos}>Quem somos?</Text>
                </View>
                <Text style={styles.textoSobre}>
                    Bem-vindo ao We Town Valley, sua parada única para produtos de
                    fazenda e aventuras rurais! Aqui, mergulhe em um mundo onde os
                    campos dourados se estendem até onde os olhos podem ver e cada colheita é uma celebração da vida.
                </Text>
                <View style={styles.gridContainer}>
                    <View style={styles.gridRow}>
                        <Image style={styles.grid} source={require('./FotoVilarejo.jpg')} />
                        <Image style={styles.grid} source={require('./FotoPlantacao.jpg')} />
                    </View>
                    <View style={styles.gridRow}>
                        <Image style={styles.grid} source={require('./FotoCenoura.jpg')} />
                        <Image style={styles.grid} source={require('./FotoCampo.jpg')} />
                    </View>
                </View>
                <Text style={styles.tituloFique}>Porque ficar conosco?</Text>
                <Text style={styles.textoSobre}>
                    Mas não se trata apenas de trabalho no campo! Em{' '}
                    <Text style={{ color: '#DAA520', fontWeight: 'bold' }}>We Town Valley</Text>,
                    a comunidade é tão importante quanto a colheita.
                    Aqui, cada dia é uma nova oportunidade de cultivar não apenas a terra,
                    mas também a amizade e o espírito da comunidade.
                    Venha nos visitar e deixe sua marca nesta terra fértil e acolhedora!
                </Text>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centered: {
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginVertical: 10,
    },
    quemSomos: {
        color: '#DAA520',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    textoSobre: {
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
    },
    gridContainer: {
        flexDirection: 'column', // Organiza as linhas verticalmente
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridRow: {
        flexDirection: 'row', // Organiza as imagens em uma linha
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
    },
    tituloFique: {
        textAlign: 'center', // Centraliza o texto
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10, // Ajuste conforme necessário
        color: '#DAA520',
    },
    textoSobre: {
        textAlign: 'justify',
        marginHorizontal: 20,
        marginBottom: 20,
    },
});
