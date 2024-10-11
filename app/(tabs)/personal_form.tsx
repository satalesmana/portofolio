import { 
  SafeAreaView, 
  View, Text, 
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  MyButton
} from '../../components'
import {  useDispatch } from 'react-redux'
import { setData, resetData } from '../../store/reducer/accountReducer'



export default function Tab() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const dispatch = useDispatch();

  const onSaveData=()=>{
    dispatch(setData({name:name, email:email}))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin:20}}>
        <View>
          <Text>Name</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setName}
            value={name}
            />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            />
        </View>
        <View>
          <Text>Phone</Text>
          <TextInput 
            style={styles.input}
            />
        </View>
        <View>
          <Text>Gender</Text>
          <TextInput 
            style={styles.input}
            
            />
        </View>

        <MyButton 
          title="Save Data"
          onPress={onSaveData}/>
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
    marginTop: 12,
    marginRight: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  }
});
