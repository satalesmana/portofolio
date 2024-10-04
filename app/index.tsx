
import { View, Text } from "react-native"
import {
    MyButton
} from '../components'

export default function Index() {
    const goToHomePage = ()=>{
        alert('tes')
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