import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.nome}>Atualizações Futuras</Text>
            <Image style={styles.foto} source={require('./AtualizacoesFuturas.jpg')} />
            <Text style={styles.descrevendo}>Caros jogadores,</Text>
            <Text style={styles.att}>Estamos empolgados em compartilhar algumas informações emocionantes sobre as próximas atualizações do nosso jogo! Nosso time tem trabalhado incansavelmente nos bastidores para trazer novas experiências e recursos que irão elevar a sua jornada no mundo do jogo para um patamar totalmente novo.</Text>
            <View style={styles.gridContainer}>
                <View style={styles.gridRow}>
                    <Image style={styles.grid} source={require('./ImagemAtt.png')} />
                    <Image style={styles.grid} source={require('./ComidaAtt.jpg')} />
                </View>
                <View style={styles.gridRow}>
                    <Image style={styles.grid} source={require('./CabanaAtt.jpg')} />
                    <Image style={styles.grid} source={require('./PraiaAtt.jpg')} />
                </View>
            </View>
            <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar para o Blog</Text>
            </Pressable>
            </ScrollView>
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
        marginLeft: 120,
        marginBottom: 40,
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
        marginLeft: 120,
    },
    foto: {
        width: 120,
        height: 120,
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 150,
    },
    descrevendo: {
        textAlign: 'justify',
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 20,
    },
    att: {
        textAlign: 'justify',
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 20,
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
}
}
);
