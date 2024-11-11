import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
          setErrorMsg('Se requiere permiso para acceder a la ubicación');
          setLoading(false);
          return;
        }

        
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setLoading(false);
      } catch (error) {
        setErrorMsg('Error al obtener la ubicación');
        setLoading(false);
      }
    })();
  }, []);

  
  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (errorMsg) {
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.errorText}> ❌ {errorMsg}</Text>
        </View>
      );
    }

    return (
      <View style={styles.messageContainer}>
        <Text style={styles.successText}>✅ Ubicación obtenida:</Text>
        <Text style={styles.locationText}>
          Latitud: {location?.coords?.latitude}
        </Text>
        <Text style={styles.locationText}>
          Longitud: {location?.coords?.longitude}
        </Text>
        <Text style={styles.locationText}>
          Precisión: {location?.coords?.accuracy} metros
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Ubicación</Text>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  successText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginVertical: 5,
  },
});