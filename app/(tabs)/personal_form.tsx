import { 
  SafeAreaView, 
  View, Text, 
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

export default function Tab() {
  const [email, setEmail] = React.useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
