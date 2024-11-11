import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Contador from './Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'blue'}}>TA1</Text>
      <Contador />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 90
  }
});
