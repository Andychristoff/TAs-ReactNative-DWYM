import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, position: 'absolute', top: 100}}>TA2</Text>
      <TextInput placeholder='Escriba aqui' value={input} onChangeText={setInput} style={styles.input}></TextInput>
      <Text>Texto replicado:</Text>
      <Text style={{color: 'green'}}>{input}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingtop: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    gap: 50
  },
  input: {
    color: 'purple',
    fontSize: 25
  }
});
