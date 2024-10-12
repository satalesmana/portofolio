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
import {  useDispatch, useSelector } from 'react-redux'
import { setData } from '../../store/reducer/accountReducer'


export default function Tab() {
const account = useSelector((state) => state.account)
  const [name, setName] = React.useState(account.name);
  const [email, setEmail] = React.useState(account.email);
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
