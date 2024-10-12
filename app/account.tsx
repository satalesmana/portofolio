import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { CustomeCard } from '@/components'
import { useSelector } from 'react-redux'


export default function Index() {
  const account = useSelector((state) => state.account)

  const data = [
    {
      id:'1', 
      label:'Personal Details', 
      description:'this is my personal information', 
      path:'/personal'
    },
    {
      id:'2', 
      label:'Experience', 
      path:'/experience',
      description:'All about my experince', 
    },
    {
      id:'3', 
      label:'Education', 
      path:'/education',
      description:'education background is here',
    },
    {
      id:'4', 
      label:'Certificate', 
      path:'/certificate',
      description:'license and certificate is here',
    },
    {
      id:'5', 
      label:'Admin Panel', 
      path:'/(tabs)/home',
      description:'go to main page',
    },
    
  ];


  return (
      <View>
        <View style={style.container}>
          <Image 
            style={style.tinyLogo} 
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}/>
          <Text style={style.textName}>
            {account.name}
          </Text>
          <Text style={[style.subText, style.textWhite]}>
            {account.email} 
          </Text>
        </View>
        <View style={style.border}>
            <FlatList 
              data={data}
              renderItem={
                ({item}) => <CustomeCard 
                              nama={ item.label } 
                              description={item.description}
                              path={item.path}
                            /> 
              } 
              keyExtractor={item => item.id}
            />
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


