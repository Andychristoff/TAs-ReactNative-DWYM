import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [inputTarea, setInput] = useState("");

  const addTarea = () => {
    if (inputTarea.trim()) {
      setTareas([...tareas, inputTarea]);
      setInput("");
    }
  };

  const borrarTarea = (tareaParaBorrar) => {
    setTareas(tareas.filter(tarea => tarea !== tareaParaBorrar));
  };

  const renderTarea = ({ item }) => {
    return (
      <Swipeable
        onSwipeableOpen={() => borrarTarea(item)} 
        renderRightActions={() => (
          <View style={styles.deleteContainer} />
        )}
      >
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>{item}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>TA4</Text>
        <TextInput
          value={inputTarea}
          placeholder="Escriba una tarea"
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTarea}>
          <Text style={styles.addButtonText}>Agregar Tarea</Text>
        </TouchableOpacity>
        <FlatList
          data={tareas}
          renderItem={renderTarea}
          keyExtractor={(item, index) => index.toString()}
          style={styles.taskList}
        />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'lightgrey',
    padding: 10,
    width: '90%',
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  taskList: {
    width: '100%',
  },
  taskContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
  },
  deleteContainer: {
    backgroundColor: 'red',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});