import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function TelaMed({ route }) {
  const { idoso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{idoso.nome}</Text>
      <Text style={styles.info}>Idade: {idoso.idade}</Text>
      <Text style={styles.info}>Doença: {idoso.doenca}</Text>
      <Text style={styles.info}>Observações: {idoso.Obs}</Text>

      <Text style={styles.subtitulo}>Medicamentos:</Text>

      <FlatList
        data={idoso.Medicamento}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeMed}>{item.nome}</Text>
            <Text style={styles.textMed}>Dosagem: {item.dosagem}</Text>
            <Text style={styles.textMed}>Horário: {item.horario}</Text>
            <Text style={styles.textMed}>Quando: {item.quando}</Text>
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
    backgroundColor: '#ADADAD',
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
});
