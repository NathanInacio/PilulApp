import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


export default function TelaHome({ navigation }) {
    const [idosos, setIdosos] = useState([
        {
            id: 1, 
            nome: 'Urbano', 
            idade: 86 + " anos", 
            doenca: 'Diabetes', 
            Obs: 'Nenhuma', 
            Medicamento: [
                { id: 1, nome: 'Metformina', dosagem: '500mg', horario: '08:00', quando: 'Terça, Quinta e Sabado' },
                { id: 2, nome: 'Insulina', dosagem: '10 unidades', horario: '20:00', quando: 'Todo dia' },
                { id: 3, nome: 'Glipizida', dosagem: '5mg', horario: '12:00', quando: 'Todo dia' },
            ]},

            
        {
            id: 2, 
            nome: 'Neiva', 
            idade: 82 + " anos", 
            doenca: 'Hipertensão', 
            obs: 'Nenhuma', 
            Medicamento: [
                { id: 1, nome: 'Losartana', dosagem: '50mg', horario: '08:00', quando: 'Seg, Qua e Sexta' },
                { id: 2, nome: 'Hidroclorotiazida', dosagem: '25mg', horario: '20:00', quando: 'Todo dia' },
                { id: 3, nome: 'Amlodipina', dosagem: '5mg', horario: '3 em 3 horas', quando: 'Todo dia' },
            ]},

        
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
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Med', { idoso: item })}>
            <Text style={styles.nomeIdoso}>{item.nome}</Text>
            <Text style={styles.textIdoso}>Idade: {item.idade}</Text>
            <Text style={styles.textIdoso}>Doença: {item.doenca}</Text>
            <Text style={styles.textIdoso}>Observações: {item.obs}</Text>
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
        backgroundColor: '#ADADAD',
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
});
