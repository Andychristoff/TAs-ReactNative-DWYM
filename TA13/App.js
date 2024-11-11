import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);  // Estado para el permiso
  const [photoUri, setPhotoUri] = useState(null);  // Estado para almacenar la URI de la foto
  const cameraRef = useRef(null);  // Referencia a la cámara

  // Solicitar permisos al montar el componente
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Función para tomar la foto
  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();  // Tomar la foto
        setPhotoUri(photo.uri);  // Guardar la URI de la foto
      } catch (error) {
        alert('Error al tomar la foto');
      }
    }
  };

  // Manejo de permisos
  if (hasPermission === null) {
    return <View style={styles.container}><Text>Solicitando permisos de cámara...</Text></View>;
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>❌ No se otorgó permiso para acceder a la cámara</Text>
        <Text style={styles.errorText}>Por favor, habilita el permiso desde la configuración</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {photoUri ? (
        // Si hay una foto tomada, mostrarla en pantalla
        <View style={styles.previewContainer}>
          <Image source={{ uri: photoUri }} style={styles.preview} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPhotoUri(null)}  // Botón para tomar otra foto
          >
            <Text style={styles.buttonText}>🔄 Tomar otra foto</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Vista de la cámara
        <Camera
          style={styles.camera}
          ref={cameraRef}
          type={Camera?.Constants?.Type?.back || Camera.Constants.Type.front}
          >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={takePhoto}
            >
              <Text style={styles.buttonText}>📸 Tomar Foto</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});