
import { Text } from "react-native"
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from "react";



export default function Index() {
    const splashTimer = ()=>{
        setTimeout(()=>{
            router.push('/account')
        }, 3000)
    }
    
    useEffect(()=>{
        splashTimer()
    },[])
    return (
        <LinearGradient
            style={{justifyContent:'center', alignItems:'center', flex: 1}}
            colors={['#4c669f', '#3b5998', '#192f6a']}>
                <Text style={{ fontSize:50, color:'white', fontWeight:'700'}}>PortPolio</Text>
                <Text style={{color:'white'}}>all about me</Text>
        </LinearGradient>
    )
}