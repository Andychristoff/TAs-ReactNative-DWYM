import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';

export default function App() {

  const [tareas, setTareas] = useState([]);
  const [inputTarea, setInput] = useState("");

  const addTarea = () => {
    setTareas([...tareas, inputTarea]);
    setInput("");
  }

  const renderTarea = ({ Tarea }) =>{
    return(
      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }} key={tareas.length}>
        <Text>{Tarea}</Text>
      </View>
    );
  } 

  const borrarTarea = (item) => {
    var nuevastareas = []
    tareas.map((tarea)=>{
      if(tarea != item){
        nuevastareas.push(tarea)
      }
    })
    setTareas(nuevastareas)
  }

  return(
    <View style={styles.container}>
      <Text>TA3</Text>
      <TextInput value = {inputTarea} placeholder='Escriba una tarea'onChangeText={setInput} style={{backgroundColor:'lightgrey'}}></TextInput>
      <TouchableOpacity style={{backgroundColor: 'green'}} onPress={addTarea}><Text>Agregar Tarea</Text></TouchableOpacity>
      <View style={{height:  200}}>
        <ScrollView style={{flex:1}}>
        {tareas.map((tarea, index) => {
          return(
            <View key={index} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc', flex:1, flexDirection: 'row' }}>
              <Text>{tarea}</Text><Button title='X' onPress={() => borrarTarea(tarea)}></Button>
            </View>
          )
        })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column' ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
