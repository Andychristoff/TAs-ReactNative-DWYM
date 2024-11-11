import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function App() {
  const imagenes = [
    { id: '1', uri: 'https://conteudo.imguol.com.br/c/esporte/11/2022/07/05/alex-poatan-nocauteou-israel-adesanya-no-kickboxing-1657039569145_v2_600x600.jpg.webp', descripcion: 'Poatan KOs Adesanya way back before UFC' },
    { id: '2', uri: 'https://talksport.com/wp-content/uploads/sites/5/2022/11/l-r-alex-pereira-brazil-774997267.jpg?strip=all&w=960', descripcion: 'Poatan KOs Adesanya in the UFC to win the Middlewight belt' },
    { id: '3', uri: 'https://www.mundodeportivo.com/us/files/content_image_desktop_filter/files/fp/uploads/2023/04/09/643258b35758d.r_d.2060-1235.jpeg', descripcion: 'Adesanya KOs Poatan in the UFC to regain his Middleweight belt' },
    { id: '4', uri: 'https://preview.redd.it/is-poatan-the-fighter-with-the-biggest-chance-of-holding-a-v0-zi8y25hwclcc1.jpeg?width=640&crop=smart&auto=webp&s=32bbf556d774c7cbd9bcc99f18bfda59a88e182c', descripcion: 'Alex ´Poatan´ Pereira went on to become UFC double champion, and Adesanya became the guy who gets to say ´I beat that guy one time´.' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.description}>{item.descripcion}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imagenes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginTop: 50}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain'
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});