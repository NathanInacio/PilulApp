import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function TelaDeLogin({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>PilulApp 💊</Text>
            <TextInput style={styles.input} placeholder="Email" 
            />
            <TextInput style={styles.input} placeholder="Senha"
            secureTextEntry
            />
            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Inicio')}
                >
                <Text style={styles.botaoTexto}>Entrar!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: '80%',
  },
  botao: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },








});

