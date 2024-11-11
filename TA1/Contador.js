import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';

const Contador = () => {
    
    const [contador, setContador] = useState(0);


  return (
    <View style={styles.container}>
        <Text style={{fontSize: 30}}>Contador: {contador}</Text>
        <TouchableOpacity title="Incrementar" style={styles.boton} onPress={() => setContador(contador+1)}><Text>Incrementar</Text></TouchableOpacity>
        <TouchableOpacity title="Disminuir" style={styles.boton} onPress={() => setContador(contador-1)}><Text>Disminuir</Text></TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyitems: 'center',
    width: 'auto',
    gap: 10
  },
  boton: {
    width: 100,
    padding: 10,
    backgroundColor: 'red',
    color: 'red'
  }
});

export default Contador;