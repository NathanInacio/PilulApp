import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default function EditarIdosoScreen({ navigation, route }) {
    const { idoso } = route.params;

    const [nome, setNome] = useState(idoso.nome);
    const [idade, setIdade] = useState(idoso.idade);
    const [doenca, setDoenca] = useState(idoso.doenca);
    const [obs, setObs] = useState(idoso.obs);

    const editarIdoso = async () => {
        await updateDoc(doc(db, 'idosos', idoso.id), {
            nome, idade, doenca, obs
        });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Editar Idoso</Text>

            <TextInput style={styles.input}
                placeholder="Nome"
                onChangeText={setNome}
                value={nome}
            />
            <TextInput style={styles.input}
                placeholder="Idade"
                onChangeText={setIdade}
                value={idade}
            />
            <TextInput style={styles.input}
                placeholder="Doença"
                onChangeText={setDoenca}
                value={doenca}
            />
            <TextInput style={styles.input}
                placeholder="Observações"
                onChangeText={setObs}
                value={obs}
            />
            <TouchableOpacity style={styles.botao} onPress={editarIdoso}>
                <Text style={styles.botaoTexto}>Salvar Alterações</Text>
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
});