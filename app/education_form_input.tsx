import React from 'react';
import { MyButton } from '../components'
import CApi from '../lib/CApi';
import { router } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux'
import { setData, resetData } from '../store/reducer/educationReducer'
import { 
    SafeAreaView, 
    View, Text, 
    StyleSheet,
    TextInput,
    ToastAndroid,
    ScrollView
} from 'react-native';


export default function EducationFormInput() {
    const educationForm = useSelector((state) => state.education.formInput)
    const dispatch = useDispatch();

    const onChangeValue=(payload:any)=>{
        dispatch(setData({...educationForm,...payload}))
    }

    const onSaveData=async ()=>{
        try{
          
            if(educationForm._id == ''){
                const { data } = await CApi.post('/educations',educationForm)
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
            }

            if(educationForm._id != ''){
                const { data } = await CApi.put(`/educations/${educationForm._id}`,educationForm)
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
            }

            dispatch(resetData())
            router.push('/(tabs)/education_form')
        }catch(error){
            const msg = error?.message ? error?.message :''
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        }
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{margin:20}}>
                    <View>
                        <Text>Nama Kampus</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(val)=>onChangeValue({nama_kampus:val})}
                            value={educationForm.nama_kampus}
                            />
                    </View>
                    <View>
                        <Text>Program Studi</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(val)=>onChangeValue({program_studi:val})}
                            value={educationForm.program_studi}
                            />
                    </View>
                    <View>
                        <Text>Jenjang Pendidikan</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(val)=>onChangeValue({jenjang_pendidikan:val})}
                            value={educationForm.jenjang_pendidikan}
                            />
                    </View>
                    <View>
                        <Text>IPK</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(val)=>onChangeValue({ipk:val})}
                            value={educationForm.ipk}
                            />
                    </View>
                    <View>
                        <Text>Tahun Lulus</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(val)=>onChangeValue({tahun_lulus:val})}
                            value={educationForm.tahun_lulus}
                            />
                    </View>
                    <View>
                        <Text>Alamat Kampus</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(val)=>onChangeValue({alamat_kampus:val})}
                            value={educationForm.alamat_kampus}
                            />
                    </View>

                    <MyButton 
                        title="Save Data"
                        onPress={onSaveData}/>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
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