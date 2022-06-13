import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Mundo</Text>
      <Text>Iniciando meus estudos com react-native</Text>
      <Text>Neste primeiro programa estou explorando o estudo sobre React-Native
        entendendo os arquivos para execução do projeto e suas pastas principais.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50
  }
});
