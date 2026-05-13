import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default function EditarMedScreen({ navigation, route }) {
    const { medicamentos, idosoId } = route.params;

    const [remedio, setRemedio] = useState(medicamentos.remedio);
    const [dosagem, setDosagem] = useState(medicamentos.dosagem);
    const [horario, setHorario] = useState(medicamentos.horario);
    const [quando, setQuando] = useState(medicamentos.quando);

    const editarMedicamento = async () => {
        await updateDoc(doc(db, 'idosos', idosoId, 'medicamentos', medicamentos.id), {
            remedio, dosagem, horario, quando
        });
        navigation.goBack();
    };


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Editar Medicamento</Text>

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
        <TouchableOpacity style={styles.botao} onPress={editarMedicamento}>
            <Text style={styles.botaoTexto}>Salvar Alteracoes</Text>
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
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
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
    deletarIdosoText: {
        color: 'red',
        fontWeight: 'bold',
}
});
