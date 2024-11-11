import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Aplicación {Platform.OS === 'ios' ? 'iOS' : 'Android'}
        </Text>
        <Text style={styles.headerText}>
          TA9
        </Text>
      </View>

      <View style={styles.content}>
        {/* Tarjeta de información del sistema */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Información del Sistema</Text>
          <Text style={styles.infoText}>Sistema: {Platform.OS}</Text>
          <Text style={styles.infoText}>Versión: {Platform.Version}</Text>
        </View>

        {/* Botón específico de plataforma */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => alert(`Botón presionado en ${Platform.OS}`)}
        >
          <Text style={styles.buttonText}>
            Botón de {Platform.OS}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? '#F8F8F8' : '#E8F5E9',
  },
  header: {
    padding: 15,
    backgroundColor: Platform.OS === 'ios' ? '#fff' : '#4CAF50',
    borderBottomWidth: 1,
    borderBottomColor: Platform.OS === 'ios' ? '#ddd' : 'transparent',
    marginTop: 40
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Platform.OS === 'ios' ? '#000' : '#fff'
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? 10 : 4,
    padding: 15,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Platform.OS === 'ios' ? '#000' : '#4CAF50',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  button: {
    backgroundColor: Platform.OS === 'ios' ? '#007AFF' : '#4CAF50',
    padding: 15,
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textTransform: Platform.OS === 'android' ? 'uppercase' : 'none',
  },
});

export default App;