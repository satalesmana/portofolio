import { View, Text, FlatList, StyleSheet } from "react-native"
import React, { useEffect, useState } from 'react';
import CApi from '../lib/CApi';

interface Education{
    _id?: string,
    nama_kampus: string,
    alamat_kampus: string,
    tahun_lulus: string,
    ipk: string,
    program_studi: string,
    jenjang_pendidikan: string
}

const EducationCard=({
    jenjang_pendidikan,
    nama_kampus,
    program_studi,
    ipk,
    tahun_lulus,
    alamat_kampus,
    _id
}:Education )=>{
    return(
        <View style={style.card}>
            <Text style={style.title}>{jenjang_pendidikan}, {program_studi}</Text>
            <Text>{nama_kampus}</Text>
            <View style={style.item}>
                <Text style={style.item_title}>Tahun Lulus</Text>
                <Text style={style.item_content}>: {tahun_lulus}</Text>
            </View>
            
            <View style={style.item}>
                <Text style={style.item_title}>IPK</Text>
                <Text style={style.item_content}>: {ipk}</Text>
            </View>
           
            <Text style={style.item_title}>Alamat : </Text>
            <Text style={style.item_content}>{alamat_kampus}</Text>
            
        </View>
    )
}

export default function Educations() {
    const [educations, setEducations] = useState([])

    const onFetchData=async ()=>{
        try{    
            const { data } = await CApi.get('/educations')
            setEducations(data.data)
        }catch(error){
            console.error('onFetchData', error)
        }
    }

    useEffect(() => {
        onFetchData()
    },[]);

    return (
        <View>
            <FlatList 
                renderItem={({item}) => 
                    <EducationCard 
                        ipk={item?.ipk}
                        tahun_lulus={item.tahun_lulus}
                        alamat_kampus={item.alamat_kampus}
                        jenjang_pendidikan={item?.jenjang_pendidikan}
                        program_studi={item?.program_studi}
                        nama_kampus={item?.nama_kampus}/>
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