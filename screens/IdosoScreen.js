import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function IdosoScreen({ navigation }) {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [doenca, setDoenca] = useState('');
    const [obs, setObs] = useState('');

    const registrarIdoso = () => {
    addDoc(collection(db, "idosos"), {
        nome,
        idade,
        doenca,
        obs,
    });
    navigation.goBack();
}

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicionar Idoso</Text>

            <TextInput style={styles.inputIdoso}
                placeholder="Nome"
                onChangeText={setNome}
                value={nome}
            />
            <TextInput style={styles.inputIdoso}
                placeholder="Idade"
                onChangeText={setIdade}
                value={idade}
            />
            <TextInput style={styles.inputIdoso}
                placeholder="Doença"
                onChangeText={setDoenca}
                value={doenca}
            />
            <TextInput style={styles.inputIdoso}
                placeholder="Observações"
                onChangeText={setObs}
                value={obs}
            />

            <TouchableOpacity style={styles.botao} onPress={registrarIdoso}>
                <Text style={styles.botaoTexto}>Salvar Idoso</Text>
            </TouchableOpacity>


        </View>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    inputIdoso: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        padding: 12,
        marginBottom: 16,
        width: '80%',
    },
    botao: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        width: '80%',
  },
    botaoTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
  },
    
});
