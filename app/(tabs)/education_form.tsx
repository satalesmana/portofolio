import { View, Text, FlatList, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native"
import React, { useEffect, useState, useRef } from 'react';
import CApi from '../../lib/CApi';
import { MyButton } from '../../components'
import { router } from 'expo-router';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { useDispatch } from 'react-redux'
import { setData, resetData } from '../../store/reducer/educationReducer'



interface Education{
    _id?: string,
    nama_kampus: string,
    alamat_kampus: string,
    tahun_lulus: string,
    ipk: string,
    program_studi: string,
    jenjang_pendidikan: string
    onPress:any
}

const EducationCard=({
    jenjang_pendidikan,
    nama_kampus,
    program_studi,
    ipk,
    tahun_lulus,
    alamat_kampus,
    _id,
    onPress
}:Education )=>{
    
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={style.card}>
                <Text style={style.title}>{jenjang_pendidikan}, {program_studi}</Text>
                <Text>{nama_kampus}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function EducationsForm() {
    const [educations, setEducations] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    const dispatch = useDispatch();

    const onFetchData=async ()=>{
        try{    
            const { data } = await CApi.get('/educations')
            setEducations(data.data)
        }catch(error){
            console.error('onFetchData', error)
        }
    }

    const onAddNew=()=>{
        dispatch(resetData())
        router.push('/education_form_input')
    }

    const actionSheetRef = useRef<ActionSheetRef>(null);
    const openDialog=(id:any)=>{
        setSelectedId(id)
        actionSheetRef.current?.show()
    }

    const onEditData=async()=>{
        try{  
            console.log('asdf')
            actionSheetRef.current?.hide()
            const { data } = await CApi.get(`/educations/${selectedId}`)
            
            dispatch(setData(data.data))
            router.push('/education_form_input')
        }catch(error){
            const msg = error?.message ? error?.message  : ''
            ToastAndroid.show(msg, ToastAndroid.SHORT)
            console.error('onEditData', error)
        }
    }

    const onDeleteData=async ()=>{
        try{    
            actionSheetRef.current?.hide()
            const { data } = await CApi.delete(`/educations/${selectedId}`)
            ToastAndroid.show(data.message, ToastAndroid.SHORT)
            onFetchData()
        }catch(error){
            const msg = error?.message ? error?.message  : ''
            ToastAndroid.show(msg, ToastAndroid.SHORT)
            console.error('onFetchData', error)
        }
    }

    useEffect(() => {
        onFetchData()
    },[]);

    return (
        <View>
            <ActionSheet 
                gestureEnabled
                snapPoints={[50, 100]}
                ref={actionSheetRef}>
                    <View
                        style={{
                        paddingHorizontal: 12,
                        height: 400,
                        alignItems: 'center',
                        paddingTop: 20,
                        gap: 10,
                        width: '100%',
                        }}>
                            
                            <TouchableOpacity style={{width: '100%' }} onPress={onEditData}>
                                <Text style={{ color: 'black', fontSize: 20, width: '100%',paddingBottom: 10}}>
                                    Edit
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{width: '100%' }} onPress={onDeleteData}>
                                <Text style={{ color: 'black', fontSize: 20, width: '100%',paddingBottom: 10}}>
                                    Delete
                                </Text>
                            </TouchableOpacity>
                </View>
            </ActionSheet>

            <View style={{ paddingLeft: 10, paddingRight:10, marginTop:5}}>
                <MyButton 
                    style={{borderRadius:0}}
                    title="Add New"
                    onPress={onAddNew}/>
            </View>
            
            <FlatList 
                renderItem={({item}:Education) => 
                    <EducationCard 
                        ipk={item?.ipk}
                        tahun_lulus={item.tahun_lulus}
                        alamat_kampus={item.alamat_kampus}
                        jenjang_pendidikan={item?.jenjang_pendidikan}
                        program_studi={item?.program_studi}
                        nama_kampus={item?.nama_kampus}
                        onPress={()=>openDialog(item._id)}/>
                }
                data={educations}/>
        </View>
    )
}

const style =  StyleSheet.create({
    card:{
        padding: 10,
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
        backgroundColor: 'white'
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    item:{
        display:'flex',
        marginTop:5,
        flexDirection:'row'
    },
    item_title:{
        flex:1
    },
    item_content:{
        flex:1
    }
    
})