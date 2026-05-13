import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { db } from '../config/firebase';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function TelaMed({ route, navigation }) {
  const { idoso } = route.params;

  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
      const unsubscribe = onSnapshot(
          collection(db, 'idosos', idoso.id, 'medicamentos'), 
          (snapshot) => {
              const lista = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data()
              }));
              setMedicamentos(lista);
          }
      );
      return unsubscribe;
  }, []);

  const deletarMedicamento = async (medicamentoId) => {
    await deleteDoc(doc(db, 'idosos', idoso.id, 'medicamentos', medicamentoId));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{idoso.nome}</Text>
      <Text style={styles.info}>Idade: {idoso.idade} anos</Text>
      <Text style={styles.info}>Doença: {idoso.doenca}</Text>
      <Text style={styles.info}>Observações: {idoso.obs}</Text>

      <Text style={styles.subtitulo}>Medicamentos:</Text>

      <TouchableOpacity 
        style={styles.botaoAdicionarMed}
        onPress={() => navigation.navigate('AdicionarMed', { idosoId: idoso.id })}>
        <Text style={styles.adicionarMedText}>Adicionar Medicamento</Text>
      </TouchableOpacity>


      <FlatList
        data={medicamentos}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeMed}>{item.remedio}</Text>
            <Text style={styles.textMed}>Dosagem: {item.dosagem}</Text>
            <Text style={styles.textMed}>Horário: {item.horario}</Text>
            <Text style={styles.textMed}>Quando: {item.quando}</Text>

            <TouchableOpacity onPress={() => deletarMedicamento(item.id)}>
              <Text style={styles.deletarMedText}>Deletar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('EditarMed', { medicamentos: item, idosoId: idoso.id })}>
              <Text style={styles.editarMedText}>Editar</Text>
            </TouchableOpacity>

          </View>
          
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
  info: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
    },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    },
  card: {
    backgroundColor: '#6986d6a9',
    padding: 12,
    borderRadius: 20,
    marginBottom: 16,
    },
  nomeMed: {
    fontSize: 18,
    fontWeight: 'bold', 
    },
  textMed: {
    fontSize: 16,
    color: 'black',
    },
  adicionarMedText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    },
  botaoAdicionarMed: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 16,
    },
  deletarMedText: {
    color: 'red',
    fontWeight: 'bold',
    },
  editarMedText: {
    color: 'blue',
    fontWeight: 'bold',
    },
});  

