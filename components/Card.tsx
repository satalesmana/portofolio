import { Text, View, StyleSheet } from 'react-native';

export const CustomeCard=(props:any)=>{
    return (
        <View style={styles.container}>
            <View style={styles.leftbox}>
                <Text style={styles.title}>{ props.nama }</Text>
                <Text> natan@gmail.com</Text>
            </View>
            <View style={styles.rightbox}>
                <Text style={styles.number}> 2 </Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection:'row',
        backgroundColor:'white',
        padding:25,
        borderRadius:10,
        marginTop:10,
    },
    leftbox:{
        flex:2,
    },
    rightbox:{
        flex:1,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
    },
    subtitle:{
        fontSize:14,
        color:'gray',
    },
    number:{
        fontSize:24,
        color:'gray',
        textAlign:'center',
    }

})