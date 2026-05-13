import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { db } from '../config/firebase';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';


export default function TelaHome({ navigation }) {
    const [idosos, setIdoso] = useState([]);
    useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'idosos'), (snapshot) => {
        const lista = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setIdoso(lista);
    });
    return unsubscribe;
}, []);

    const deletarIdoso = async (idosoId) => {
    await deleteDoc(doc(db, 'idosos', idosoId));
}

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Meus Idosos</Text>


      <TouchableOpacity 
        style={styles.botao} onPress={() => navigation.navigate('Idoso')}>
        <Text style={styles.botaoTexto}>Adicionar Idoso</Text>
      </TouchableOpacity>


      <FlatList
        data={idosos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Med', { idoso: item })}>
            <Text style={styles.nomeIdoso}>{item.nome}</Text>
            <Text style={styles.textIdoso}>Idade: {item.idade} anos</Text>
            <Text style={styles.textIdoso}>Doença: {item.doenca}</Text>
            <Text style={styles.textIdoso}>Observações: {item.obs}</Text>

            <TouchableOpacity onPress={() => deletarIdoso(item.id)}>
              <Text style={styles.deletarIdosoText}>Deletar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('EditarIdoso', { idoso: item })}>
              <Text style={styles.editarIdosoText}>Editar</Text>
            </TouchableOpacity>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      alignSelf: 'center',
    },
    botao: {
      backgroundColor: 'blue',
      padding: 12,
      borderRadius: 20,
      alignItems: 'center',
      marginBottom: 16,
    },
    botaoTexto: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    card: {
      backgroundColor: '#6986d6a9',
      padding: 12,
      borderRadius: 20,
      marginBottom: 16,
    },
    nomeIdoso: {
      fontSize: 18,
      fontWeight: 'bold', 
    },
    textIdoso: {
      fontSize: 16,
      color: 'black',
    },
    deletarIdosoText: {
      color: 'red',
      fontWeight: 'bold',
    },
    editarIdosoText: {
      color: 'blue',
      fontWeight: 'bold',
    },
});
