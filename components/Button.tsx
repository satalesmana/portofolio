import { 
    TouchableOpacity, 
    Text,
    StyleSheet,
} from "react-native"

export const MyButton=(props:any)=>{
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={[styles.button, props.style]}>
            <Text style={styles.title}> { props.title } </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: '#1F41BB',
        padding: 10,
        borderRadius: 10,
        width:'100%',
    },
    title:{
        color:'#FFFFFF'
    }
})