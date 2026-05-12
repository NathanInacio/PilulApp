import React, { useState }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { autenticacao } from '../config/firebase';


export default function TelaDeLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logarUsuario = () => {
        signInWithEmailAndPassword(autenticacao, email, senha)
        .then(() => {
          navigation.navigate('Inicio');
        }).catch((error) => {
          console.error('Erro ao logar usuário:', error.message);
        });
    };

    const resetPassword = () => {
        sendPasswordResetEmail(autenticacao, email)
            .then(() => {
                console.log('Email enviado de recuperacao de senha.');
            }).catch((error) => {
                console.error('Erro ao enviar email:', error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>PilulApp 💊</Text>
            <TextInput style={styles.input} 
            placeholder="Email" 
                value={email}
                onChangeText={setEmail} 
            />
            <TextInput style={styles.input} 
            placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <TouchableOpacity 
                style={styles.botao} onPress={logarUsuario}>
                <Text style={styles.botaoTexto}>Entrar!</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.registro}>Não tem uma conta? <Text style={styles.registro2}> Registre-se!</Text></Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={resetPassword}>
                <Text style={styles.resetSenha}>Esqueci minha senha</Text>
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
    alignItems: 'center',
    width: '80%',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registro: {
    color: 'black',
    marginTop: 16,
  },
  registro2: {
    color: 'blue',
    fontWeight: 'bold',
  },
  resetSenha: {
    color: 'red',
    marginTop: 16,
    fontSize: 12,
  }










});

