import { StyleSheet, Text,  ScrollView,TextInput, View, position, Button,Image, ImageBackground,Modal,Pressable, KeyboardAvoidingView, Animated, TouchableOpacity, Dimensions, SafeAreaView, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarsStaggered, faBellSlash, faChampagneGlasses, faHotel, faMagnifyingGlass, faPlane, faTaxi, faUser, faUtensils, faClose, faGear, faHome, faMoneyBill, faReceipt, faRightToBracket, faCross, faBookDead  } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { useRef, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage'


const winw = Dimensions.get('screen').width;
const winh = Dimensions.get('screen').height;
const HomeScreen = ({ navigation,route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showMenu, setshowMenu] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false);
  const [name, setName] = useState('');
  const chota = useRef(new Animated.Value(1)).current;
  const movetoright = useRef(new Animated.Value(0)).current;
  const moda = useRef(new Animated.Value(0)).current;
  const Ahome = useRef(new Animated.Value(0)).current;
    const AOrder = useRef(new Animated.Value(0)).current;
    const ASetti = useRef(new Animated.Value(0)).current;
    const ALog = useRef(new Animated.Value(0)).current;

  function Ani1() {
    Animated.timing(Ahome, {
      toValue: isOpen2 ? -200 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
  function Ani2() {
    Animated.timing(AOrder, {
      toValue: isOpen2 ? -200 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
  function Ani3() {
    Animated.timing(ASetti, {
      toValue: isOpen2 ?  -200 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
  function Ani4() {
    Animated.timing(ALog, {
      toValue: isOpen2 ?  -200 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }



const toggleSidebar = () => {
 
  setIsOpen2(!isOpen2);

  setshowMenu(!showMenu)
  
  Animated.timing(chota, {
    toValue: showMenu ? 1 : 0.8,
    duration: 300,
    useNativeDriver: true,
  }).start();



  Animated.timing(movetoright, {
    toValue: showMenu ? 0 : 150,
    duration: 300,
    useNativeDriver: true,
  }).start();
  
  Animated.timing(moda, {
    toValue: showMenu ? 0 : 1,
    duration: 300,
    useNativeDriver: true,
  }).start();
 

  setTimeout(() => {
    Ani1()
  }, 200);

  setTimeout(() => {
    Ani2()
  }, 400);

  setTimeout(() => {
    Ani3()
  }, 600);

  setTimeout(() => {
    Ani4()
  }, 800);
};

  const sumbit = () =>{
    navigation.navigate('Book')
  }
  

  const clearAsyncStorage = () => {
    AsyncStorage.clear();
    console.warn('cleared')
}
const yeseyhee = () => {
  
  console.warn('click')
}
const bye = () => {
  
  navigation.navigate('Welcome')
}

  const Sidemenu = (props) => {
     return(
      <Animated.View style={{  width:winw-250, transform: [{ translateX: props.j}],}}>
    <TouchableOpacity onPress={props.l} style={styles.sidebaroption}>
     <FontAwesomeIcon size={25} icon={props.i}></FontAwesomeIcon>
      <Text style={{fontSize:15,marginLeft:5}}>{props.k}</Text>
    </TouchableOpacity>
        </Animated.View>
     )
  }


  const iconOption = [
    { id: 'Flight', label: faPlane  },
    { id: 'Hotel', label: faHotel },
    { id: 'Taxi', label: faTaxi },
    { id: 'Food', label: faUtensils },
    { id: 'Club', label: faChampagneGlasses },
   
  ];

  const colors = ['#00ccff', '#729cfe', '#ffb288', '#ADFF2F', '#00FFFF'];

  //const existingUser =  AsyncStorage.getItem("naam");
  
  const getValueFromStorage = async () => {
    try {
       Naam = await AsyncStorage.getItem('naam');
      if (Naam !== null) {
        // Handle the retrieved value here
        setName(Naam);
      }
    } catch (error) {
      // Handle any errors that occur during the retrieval process
      console.log(error);
    }
   
  };

  getValueFromStorage()
  
  return (
      
   
      <View style={styles.container}>

      <ImageBackground  style={{width:'100%',height:'100%',justifyContent:'center'}} source={require('../assets/images/w5.webp')}>

   <View style={{justifyContent:'center',width:winw-180,alignItems:'center'}}>

   <Image  source={require('../assets/images/ashu3.jpg')} style={{width:100,height:100,borderRadius:200,marginBottom:40,}}>

  </Image>

      <Sidemenu i={faHome} j={Ahome} k={"Home"} l={yeseyhee}/> 
      <Sidemenu i={faReceipt} j={AOrder} k={"Orders"} l={yeseyhee}/> 
      <Sidemenu i={faGear} j={ASetti} k={"Settings"} l={ yeseyhee}/> 
     <Sidemenu  i={faRightToBracket} j={ALog} k={"LogOut"} l={bye}/> 
     

      <TouchableOpacity onPress={clearAsyncStorage} style={styles.sidebaroption}>
     <FontAwesomeIcon size={25} icon={faBookDead}></FontAwesomeIcon>
      <Text style={{fontSize:15,marginLeft:5}}>Udado db</Text>
    </TouchableOpacity>
   </View>

   

         <Animated.View style={{
      flex:1,
       position:'absolute',
     width:'100%',
      height:'100%',
     
      backgroundColor:'#fff',
      borderRadius:showMenu?15:0,
      transform: [{ translateX: movetoright },{scale:chota},{ rotateY: moda.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-30deg'],
      }) }]
     }}>
    
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{backgroundColor: '#7800e8ea',margin:40,padding:30,borderRadius:15,marginTop:'50%'}}>
         
           
              
              <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.text_style}  onPress={() => setModalVisible(!modalVisible)}>50% off on flight</Text>
              <Text style={styles.text_style} >jai mata kii</Text>
              <Text style={styles.text_style} >50% off on flight</Text>
              <Text style={styles.text_style} >50% off on flight</Text>
              <Text style={styles.text_style} >50% off on flight</Text>
              <Text style={styles.text_style} >50% off on flight</Text>
              </ScrollView>
                                                         
        
        </View>
      </Modal>

       <View style={{height:winh,width:winw}}>
          <View style={styles.hview}>
          <Pressable style={{left:15,top:50,width:50,padding:10,}} onPress={toggleSidebar}>
         <FontAwesomeIcon size={28} style={{}} icon={showMenu?faClose:faBarsStaggered}></FontAwesomeIcon>  
         </Pressable>
         </View>
 
     
        
         <View style={styles.view1}>

                <View >
                    <Text  style={{fontSize:20,right:15,top:10}}>Hi,{name}</Text>
                    <Text style={{fontSize:33,fontWeight:'bold',right:15,top:10}}   onPress={() => setModalVisible(true)}>Find Deals</Text>
                 </View >

                <View style={{backgroundColor:'yellowgreen',borderRadius:30,right:5,width:55,height:55,justifyContent:'center',alignItems:'center',top:20}}>
                <FontAwesomeIcon size={25} style={{}} icon={faUser}></FontAwesomeIcon>
                </View>

         </View>

         <View style={styles.view2}>
                   <View style={{height:60,width:'100%',flexDirection:'row',alignItems:'center',marginTop:10}}>
                   <FontAwesomeIcon size={25} style={{left:40}} icon={faMagnifyingGlass}></FontAwesomeIcon>  
                    <TextInput 
                    style={{fontSize:16,left:55}}
                     placeholder='Search Flight hotels etc..'  />
                  </View >
  
               <View  style={{flexDirection:'row',justifyContent:'space-around',marginTop:15,height:100}}>
                  

                  <FlatList
                   showsVerticalScrollIndicator={false}
                   showsHorizontalScrollIndicator={false}
                   data={iconOption}
                   
                   keyExtractor={(item) => item.id}
                   renderItem={({ item,index }) => (
                     
                    <Pressable   onPress={() => sumbit()}>
                    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} 
                    colors={['#31df8b', '#4c56ea', ]} 
                    style={{width:60,height:60,justifyContent:'space-around',alignItems:'center',
                    borderRadius:16,marginLeft:20,marginRight:20}}>
                    <FontAwesomeIcon  size={27}  style={{color:'white',top:11 }} icon={item.label} color='black'></FontAwesomeIcon> 
                    <Text style={{top:25}}>{item.id}</Text>  
                    </LinearGradient>
                    </Pressable>
                   )}
                   horizontal
                 />
                  
                   
                </View>

                

         </View>

         <View style={styles.view3}>
                 <View style={{flexDirection:'row',marginBottom:8}}>
                 <Text style={{fontSize:20,fontWeight:'800',left:20}}>Popular places</Text>
                 <Text style={{fontSize:18,fontWeight:'400',left:150}}>View all</Text>
                 </View>

                 <View style={{flexDirection:'row'}}>
                     <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false} horizontal={true} >  
                     <View style={{width:250,height:265,backgroundColor:'white',margin:10,borderRadius:20,elevation:6,}}>
                     <Image style={{height:200,width:230,borderRadius:20,margin:10}} source={require('../assets/images/Tajmahal.jpg')} />
                      <Text style={{fontSize:18,fontWeight:'600',left:15}}>Tajmahal</Text>
                     </View>

                     <View style={{width:250,height:265,backgroundColor:'white',margin:10,borderRadius:20,elevation:6,}}>
                     <Image style={{height:200,width:230,borderRadius:20,margin:10}} source={require('../assets/images/gwalior.jpg')} />
                     <Text style={{fontSize:18,fontWeight:'600',left:15}}>Gwalior fort</Text>
                     </View>

                     <View style={{width:250,height:265,backgroundColor:'white',margin:10,borderRadius:20,elevation:6,}}>
                     <Image style={{height:200,width:230,borderRadius:20,margin:10}} source={require('../assets/images/londonbridge.jpg')} />
                     <Text style={{fontSize:18,fontWeight:'600',left:15}}>London bridge</Text>
                     </View>

                     <View style={{width:250,height:265,backgroundColor:'white',margin:10,borderRadius:20,elevation:6,}}>
                     <Image style={{height:200,width:230,borderRadius:20,margin:10}} source={require('../assets/images/newyork.jpg')} />
                     <Text style={{fontSize:18,fontWeight:'600',left:15}}>New york city Sky line</Text>
                     </View>
                     </ScrollView>
                  </View>
         </View>
        
         </View>
         </Animated.View>

         
         </ImageBackground>  
     </View> 
  )  
}

export default HomeScreen

const styles = StyleSheet.create({
   container:{
      
      justifyContent:'center',
     // alignItems:'center',
     backgroundColor:'#d4d4d9',
     width:winw,
     height:winh,
    
   },
   Imageback:{
     
   },
   hview:{
   height:90,
   // backgroundColor:'#CDE990',
   
   },
   view1 :{
     flex:0.15,
   //  backgroundColor:'#fa9f50',
     flexDirection:'row',
     justifyContent:'space-around',
   },
  view2 :{
   
    flex:0.3,
   // backgroundColor:'#9ff065',
   
  },
  view3 :{
    flex:0.5,
   // backgroundColor:'#65f0d4',
  },
  text_style: {
    backgroundColor:'#bb86eeef',
    padding:10,
    fontSize:20,
    margin:8,
    borderRadius:10,
    color:'#fff',
  },
  sidebaroption:{
    padding: 10 ,
    backgroundColor:'#fff',
    marginBottom:20,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    elevation:30,
    

  }
 
})