import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Idosos</Text>
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
});
