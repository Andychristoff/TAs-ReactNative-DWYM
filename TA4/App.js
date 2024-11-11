import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { useState } from 'react';



export default function App() {
  const [imagenActual, setImagenActual] = useState(true);

  
  const cambiarImagen = () => {
    setImagenActual(!imagenActual);
  };
  
  return (
    <View style={styles.container}>
      <Text style={{position: 'absolute', top: 70, fontSize: 50}}>TA4</Text>
      <Text>Una rivalidad legendaria</Text>
      <Image
        source={
          imagenActual
            ? { uri: 'https://talksport.com/wp-content/uploads/sites/5/2022/11/l-r-alex-pereira-brazil-774997267.jpg?strip=all&w=960' }
            : { uri: 'https://www.mundodeportivo.com/us/files/content_image_desktop_filter/files/fp/uploads/2023/04/09/643258b35758d.r_d.2060-1235.jpeg' }
        }
        style={styles.image}
        resizeMode="contain"
        onError={() => alert("Error al cargar la imagen")}
      />
      <Button title="Cambiar Imagen" onPress={cambiarImagen} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300, // Ajusta el ancho de la imagen
    maxWidth: 1140,
    height: 300,
    maxHeight: 640, // Ajusta la altura de la imagen
    marginBottom: 20, // Espacio entre la imagen y el botón
  },
});
