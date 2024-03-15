import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('./Logo Aplicativo.png')} />
                <Text style={styles.publicacoesDia}>Publicações do dia!</Text>
            </View>
            <View style={styles.playerContainer}>
                <View style={styles.playerInfo}>
                    <Image style={styles.fotosIcons} source={require('./IconFazendeiro.png')} />
                    <Text style={styles.nomePlayers}>Adovildo do Mato Sulzense</Text>
                </View>
                <View style={styles.publicacaoContainer}>
                    <Text style={styles.descricaoJogo}>Aqui está o meu primeiro dia na minha fazenda!</Text>
                    <Image style={styles.fotoFazenda} source={require('./ImagemPublicacao.jpg')} />
                </View>
            </View>
            <View style={styles.playerContainer}>
                <View style={styles.playerInfo}>
                    <Image style={styles.fotosIcons} source={require('./IconeFazendeira.png')} />
                    <Text style={styles.nomePlayers}>Juruscreita Mesquita Santos</Text>
                </View>
                <View style={styles.publicacaoContainer}>
                    <Text style={styles.descricaoJogo}>Gostaria de postar que alcancei o nível 10!</Text>
                    <Image style={styles.fotoFazenda} source={require('./Nivel10.png')} />
                </View>
            </View>
            <View style={styles.playerContainer}>
                <View style={styles.playerInfo}>
                    <Image style={styles.fotosIcons} source={require('./IconeVitor.jpg')} />
                    <Text style={styles.nomePlayers}>Vitor Antonio Vieira da Silva</Text>
                </View>
                <View style={styles.publicacaoContainer}>
                    <Text style={styles.descricaoJogo}>Minha colheita de trigo foi bem sucedida!</Text>
                    <Image style={styles.fotoFazenda} source={require('./ColheitaDeTrigo.png')} />
                </View>
            </View>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    publicacoesDia: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DAA520',
    },
    playerContainer: {
        marginBottom: 20,
    },
    playerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    fotosIcons: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    nomePlayers: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10, // Adicionando margem à esquerda
    },
    fotoFazenda: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
        marginLeft: 60,
    },
    descricaoJogo: {
        marginBottom: 10,
        marginLeft: 60,
    },
});
