import { 
  Text, 
  View, 
  StyleSheet,
  Image
} from "react-native";
import { Link } from 'expo-router';
import { CustomeCard } from '@/components'

export default function Index() {
  return (
    <View>
      <View style={style.container}>
        <Image 
          style={style.tinyLogo} 
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}/>
        <Text style={style.textName}>
          Rebecca Max
        </Text>
        <Text style={[style.subText, style.textWhite]}>
          jhondoe@mail.com
        </Text>
        <Link href="/experience">Experience</Link>
      </View>
      <View style={style.border}>
          <CustomeCard nama="Natan"/>
          <CustomeCard nama="Anto" />
          <CustomeCard nama="Surya"/>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor:"#0E627C",
    height:250,
    borderBottomEndRadius:32,
    borderBottomStartRadius: 32,
    justifyContent:"center",
    alignItems:"center"
  },
  textName:{
    color:"white",
    fontSize: 24
  },
  subText:{
    fontSize:14
  },
  textWhite:{
    color: "white",
  },
  tinyLogo:{
    width: 50,
    height: 50,
  },
  border:{
    top:-25,
    paddingLeft:20,
    paddingRight:25,
  }

})


