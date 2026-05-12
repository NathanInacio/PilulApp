import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AdicionarMedScreen({ navigation, route }) {

    const [remedio, setRemedio] = useState('');
    const [dosagem, setDosagem] = useState('');
    const [horario, setHorario] = useState('');
    const [quando, setQuando] = useState('');

    const salvarMedicamento = async () => {
    const idosoId = route.params.idosoId;
    await addDoc(collection(db, 'idosos', idosoId, 'medicamentos'), {
        remedio,
        dosagem,
        horario,
        quando
    });
    navigation.goBack();
};


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicionar Medicamento</Text>

        <TextInput style={styles.input}
            placeholder="Remedio"
            onChangeText={setRemedio}
            value={remedio}
        />
        <TextInput style={styles.input}
            placeholder="Dosagem"
            onChangeText={setDosagem}
            value={dosagem}
        />
        <TextInput style={styles.input}
            placeholder="Horario"
            onChangeText={setHorario}
            value={horario}
        />
        <TextInput style={styles.input}
            placeholder="Quando tomar"
            onChangeText={setQuando}
            value={quando}
        />
        <TouchableOpacity style={styles.botao} onPress={salvarMedicamento}>
            <Text style={styles.botaoTexto}>Salvar Medicamento</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
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
},
);