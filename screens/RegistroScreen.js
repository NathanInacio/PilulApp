import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebase';
import { sendEmailVerification } from 'firebase/auth';

export default function RegistroScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const registrarUsuario = () => {
        createUserWithEmailAndPassword(autenticacao, email, senha)
            .then((userCredential) => {
                sendEmailVerification(autenticacao.currentUser)
                console.log('Usuário registrado com sucesso:', userCredential.user);
                navigation.navigate('Entrar');
            })
            .catch((error) => {
                console.error('Erro ao registrar usuário:', error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro</Text>

            <TextInput style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput style={styles.input}
                placeholder="Senha"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry
            />
            <TouchableOpacity 
                style={styles.botao} onPress={registrarUsuario}>
                <Text style={styles.botaoTexto}>Cadastrar Usuário</Text>
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
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
    width: '80%',
  },
    botao: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 20,
    width: '80%',
  },
    botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

