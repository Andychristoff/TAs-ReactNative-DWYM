import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');


const isSmallDevice = width < 375;
const isMediumDevice = width >= 375 && width < 768;
const isLargeDevice = width >= 768;

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Mi Aplicación Responsive
        </Text>
        <Text style={{fontSize: 20, marginTop: 10}}> TA8 </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Tamaño de la pantalla
          </Text>
          <Text style={styles.cardText}>
            Ancho: {width}px{'\n'}
            Alto: {height}px
          </Text>
          <Text style={styles.deviceType}>
            Tipo de dispositivo:{'\n'}
            {isSmallDevice && 'Dispositivo pequeño'}
            {isMediumDevice && 'Dispositivo mediano'}
            {isLargeDevice && 'Dispositivo grande'}
          </Text>
        </View>

        <View style={styles.grid}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.gridItem}>
              <Text style={styles.gridItemText}>Item {item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: isSmallDevice ? 15 : 20,
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: isSmallDevice ? 20 : (isMediumDevice ? 24 : 28),
    fontWeight: 'bold',
  },
  content: {
    padding: isSmallDevice ? 10 : 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: isSmallDevice ? 15 : 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: isSmallDevice ? 18 : (isMediumDevice ? 20 : 22),
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: isSmallDevice ? 14 : 16,
    color: '#666',
    marginBottom: 10,
  },
  deviceType: {
    fontSize: isSmallDevice ? 14 : 16,
    color: '#2196F3',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: 'white',
    width: isLargeDevice ? '23%' : (isMediumDevice ? '48%' : '100%'),
    marginBottom: 15,
    padding: isSmallDevice ? 15 : 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  gridItemText: {
    textAlign: 'center',
    fontSize: isSmallDevice ? 14 : 16,
    color: '#333',
  },
});

export default App;
