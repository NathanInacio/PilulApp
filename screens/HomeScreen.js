import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


export default function TelaHome() {
    const [idosos, setIdosos] = useState([
        {id: 1, nome: 'Urbano', idade: 86},
        {id: 2, nome: 'Neiva', idade: 82},
    ]);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Idosos</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Adicionar Idoso</Text>
      </TouchableOpacity>
      <FlatList
        data={idosos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeIdoso}>{item.nome}</Text>
            <Text style={styles.idadeIdoso}>Idade: {item.idade}</Text>
          </View>
        )}
      />
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    botao: {
        backgroundColor: 'gray',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 16,
    },
    botaoTexto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    card: {
        backgroundColor: 'gray',
        padding: 12,
        borderRadius: 20,
        marginBottom: 16,
    },
    nomeIdoso: {
        fontSize: 18,
        fontWeight: 'bold', 
    },
    idadeIdoso: {
        fontSize: 16,
        color: 'black',
    },
});
