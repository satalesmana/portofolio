import React from 'react';
import { MyButton } from '../components'
import CApi from '../lib/CApi';
import { router } from 'expo-router';
import { 
    SafeAreaView, 
    View, Text, 
    StyleSheet,
    TextInput,
    ToastAndroid,
    ScrollView
} from 'react-native';


export default function EducationFormInput() {
    const [ipk, setIpk] = React.useState('');
    const [namaKampus, setNamaKampus] = React.useState('');
    const [programStudi, setProgramStudi] = React.useState('');
    const [jenjang, setJenjang] = React.useState('');
    const [alamat, setAlamat] = React.useState('');
    const [thunLulus, setTahunLulus] = React.useState('');

    const onSaveData=async ()=>{
        try{
            const { data } = await CApi.post('/educations',{
                ipk: ipk,
                nama_kampus: namaKampus,
                program_studi: programStudi,
                jenjang_pendidikan: jenjang,
                alamat_kampus: alamat,
                tahun_lulus: thunLulus
            })

            ToastAndroid.show('Data berhasil disimpan', ToastAndroid.SHORT);
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
                            onChangeText={setNamaKampus}
                            value={namaKampus}
                            />
                    </View>
                    <View>
                        <Text>Program Studi</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={setProgramStudi}
                            value={programStudi}
                            />
                    </View>
                    <View>
                        <Text>Jenjang Pendidikan</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={setJenjang}
                            value={jenjang}
                            />
                    </View>
                    <View>
                        <Text>IPK</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={setIpk}
                            value={ipk}
                            />
                    </View>
                    <View>
                        <Text>Tahun Lulus</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={setTahunLulus}
                            value={thunLulus}
                            />
                    </View>
                    <View>
                        <Text>Alamat Kampus</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={setAlamat}
                            value={alamat}
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