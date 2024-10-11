
import { View, Text } from "react-native"
import { router } from 'expo-router';

import {
    MyButton
} from '../components'

export default function Index() {
    const goToHomePage = ()=>{
        router.push('/account')
    }
    
    return (
        <View style={{marginTop:50, alignItems:'center', padding: 15}}>
            <Text>
                ini halaman index app
            </Text>

            <MyButton 
                title="Go to Home"
                onPress={goToHomePage}/>
        </View>
    )
}