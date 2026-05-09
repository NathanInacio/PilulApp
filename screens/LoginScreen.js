import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaDeLogin({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela de Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
                <Text>Navegar para Home</Text>
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
});
