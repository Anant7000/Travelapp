import { FlatList, ImageBackground, StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { faBarsStaggered, faLessThan, faPlane, faPlaneDeparture, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const DATA = [
    {
      id: '1',
      money:'$250'
    },
    {
      id: '2',
      money:'$260'
    },
    {
      id: '3',
      money:'$270'
    },
    {
        id: '4',
        money:'$280'
      },
  ];

const DetailScreen = ({ navigation}) => {

  

  
  const sumbit = () =>{
    navigation.navigate('Home')
    
  }

  return (
    <View style={{flex:1}}>

         <View style={{flex:0.15,flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
         <FontAwesomeIcon size={25} style={{right:70,top:10}} icon={faLessThan}></FontAwesomeIcon>  
         <Text  style={{fontSize:24,fontWeight:'700',top:10}}>Select Ticket</Text>   
         <FontAwesomeIcon size={25} style={{left:70,top:10}} icon={faBarsStaggered}></FontAwesomeIcon>  
         </View>
    


         <View style={{flex:0.2,justifyContent:'center',width:'100%'}}>
            <Text style={{fontSize:15,left:20}}>Your trip</Text>
            <Text style={{fontSize:23,fontWeight:'700',left:20}}>SFO - NYC</Text>
            <Text style={{fontSize:15,left:20}}>5 july 2023</Text>

                  <View style={{width:100,height:30,flexDirection:'row',alignItems:'center',backgroundColor:'#c8d8ff',borderRadius:10,bottom:50,left:150}}>
                    <Pressable  style={{backgroundColor:'#5b67f1',padding:4,borderRadius:20,left:4}}>
                   <FontAwesomeIcon  style={{}} icon={faRightLong}></FontAwesomeIcon> 
                   </Pressable>
                   <Text  style={{left:12,color:'#5b67f1'}}>One way</Text>
                 </View>
         </View>



         <View style={{flex:0.7,alignItems:'center',justifyContent:'center',}}>
                <FlatList 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                 data={DATA}
                 keyExtractor={item=>item.id}
                 renderItem={({item})=>(
                  
                    <ImageBackground resizeMode='contain' source={require('../assets/images/ticket4.png')} style={{width:330,height:210,margin:8,flexDirection:'row',}}>
                      <FontAwesomeIcon size={40} style={{left:30,top:20,color:'yellowgreen'}} icon={faPlaneDeparture}></FontAwesomeIcon>  
                      <Text style={{fontSize:20,left:60,top:20}}>Airways</Text>
                      <Text style={{left:100,fontSize:25,top:20}}>{item.money}</Text>
                    </ImageBackground>
                 )}
                 ></FlatList>

         </View>



         <View style={{flex:0.13,justifyContent:'center',alignItems:'center',}}>
                  <View style={{width:300,height:50,backgroundColor:'#5b67f7',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:20,color:'white',fontWeight:'600'}} onPress={() => sumbit()}>Checkout</Text>  
                </View>

         </View>
     
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})