import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

export default function About() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const data = [
        { title: 'Plantio', image: require('./Comojogar.jpg'), content: 'Lembre-se sempre de entrar no jogo e atualizar seu progresso!' },
        { title: 'Conquistas', image: require('./Minhas Publicacoes.jpg'), content: 'Suas conquistas são armazenadas em sua conta e lhe geram xp para melhorar seu nível no jogo.' },
        { title: 'Avisos', image: require('./SenhaseDados.jpg'), content: 'Nunca compartilhe seus dados pessoais e senha no jogo.' },
    ];

    const handlePress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <TouchableOpacity key={index} style={styles.box} onPress={() => handlePress(item)}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{selectedItem?.title}</Text>
                        <Text style={styles.modalText}>{selectedItem?.content}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
    },
    box: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#DAA520',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});
