import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovie = async () => {
    setErrorMessage("");
    setMovieData(null);

    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=5882e287`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovieData(data);
      } else {
        setErrorMessage("Película no encontrada. Inténtalo con otro título.");
      }
    } catch (error) {
      setErrorMessage("Error al buscar la película. Verifica tu conexión a internet.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de Películas</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Escribe el nombre de una película"
        value={movieTitle}
        onChangeText={setMovieTitle}
      />

      <Button title="Buscar Película" onPress={fetchMovie} />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        movieData && (
          <View style={styles.movieContainer}>
            <Image
              source={{ uri: movieData.Poster }}
              style={styles.poster}
            />
            <Text style={styles.movieTitle}>{movieData.Title}</Text>
            <Text style={styles.moviePlot}>{movieData.Plot}</Text>
          </View>
        )
      )}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
  movieContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  moviePlot: {
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});