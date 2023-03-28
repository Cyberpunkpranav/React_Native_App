import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Motors.com</Text>
      <Text>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button
        title='Sign in'
        color="black"
        marginTop='20'
        borderWidth='10'
        borderRadius='10'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text>New User ? </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 50,
    color: 'black',
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    width: 200,
    height: 50,
    color: 'red',
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
  }
});
