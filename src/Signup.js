import { View, TextInput, StyleSheet, TouchableOpacity,Text ,Image, ImageBackground, Alert, Animated, Dimensions} from 'react-native';



import { faEye, faEyeSlash, faFontAwesome, } from '@fortawesome/free-solid-svg-icons'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import React, { memo, useEffect, useRef, useState } from 'react';
import {useFonts  } from 'expo-font'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const winw = Dimensions.get('screen').width;
const winh = Dimensions.get('screen').height;


global.pos='Ashu';


const StartdropAnimation = React.memo(() => {
  const translatestart = useRef(new Animated.Value(-300)).current;


  
useEffect(() => {
  const timeoutId = setTimeout(() => {
    startAnimation();
  }, 600);

  return () => clearTimeout(timeoutId);
}, []);

    

  const startAnimation = () => {
    Animated.spring(translatestart, {
      toValue: -30,
      friction: 80,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.box, { transform: [{ translateY: translatestart }] }]}>
      <Text style={{ color: '#fff', fontSize: 35, fontFamily: 'Ubuntu' }}>Let's Begin</Text>
      <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Ubuntu' }}>JOURNEY</Text>
    </Animated.View>
  );
});
// const LabelMemo = memo(StartdropAnimation)
const Signup = ( {navigation} ) => {


  const [name, setEame] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setconfirmpass] = useState('')
  const [hidePassword, setHidePassword] = useState(true);
  const [wrong, setwrong] = useState(0)

const obj = {
  'uname':name,
  'uemail':email,
  'upass':password,
}


  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };


  const [fontsLoaded] = useFonts({
    
    Ubuntu : require('../assets/fonts/Ubuntu-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null; // or show a loading screen
  }
  
  const Check = async () => {
  var existingUser= await AsyncStorage.getItem(email)

    if(email==''){
      Alert.alert('Email should not be empty');
    }
   else if (existingUser !== null) {
        Alert.alert('Error', 'Email already exists!');
      return;
    }
    else if(password==''|| confirmpass==''){
      Alert.alert('password should not empty');
    }
    else if (name == '') {
      Alert.alert('Aapna naam bhi likhiye');
    return;
  }
    else if(password!=confirmpass){
      console.log('password not match');
      setwrong(1)
    }
    else{
      
       AsyncStorage.setItem(email,JSON.stringify(obj));
       AsyncStorage.setItem('naam',name);
    
     
      console.log('Sucssesful');
      navigation.navigate('Home')
    }
  }


  const handleChangeText = (newText) => {
    setconfirmpass(newText);
    setwrong(0)
  };

 

  return (

     <ImageBackground   style={{width:'100%',height:winh,}} source={require('../assets/images/stableplane.gif')}>
        <View style={styles.container} >


        <StartdropAnimation/>

        <View style={styles.extraView} >
        <Text style={{fontSize:19,fontFamily:'Ubuntu',color:'#fff'}}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setEame}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      </View>



      <View style={styles.extraView} >
        <Text style={{fontSize:19,fontFamily:'Ubuntu',color:'#fff'}}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      </View>


      <View style={styles.extraView} >
      <Text style={{fontSize:19,fontFamily:'Ubuntu',color:'#fff'}}>Password</Text>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCompleteType="password"
        />
        <TouchableOpacity
          style={styles.passwordVisibilityToggle}
          onPress={togglePasswordVisibility}
        > 
         
           <FontAwesomeIcon  size={25} color='#fff' icon={hidePassword?faEyeSlash:faEye}>
            </FontAwesomeIcon>  

        </TouchableOpacity>
      </View>
      </View>



      <View style={styles.extraView}>
      <Text style={{fontSize:19,fontFamily:'Ubuntu',color:'#fff'}}>Confirm Password</Text>
      <View style={wrong?styles.passwordInputContainerwrong:styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          value={confirmpass}
        
        onChangeText={(newText) => handleChangeText(newText)}
          
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCompleteType="password"
        />
        <TouchableOpacity
          style={styles.passwordVisibilityToggle}
          onPress={togglePasswordVisibility}
        > 
         
           <FontAwesomeIcon  size={25} color='#fff' icon={hidePassword?faEyeSlash:faEye}>
            </FontAwesomeIcon>  

        </TouchableOpacity>
      </View>
      </View>
      


       <View  style={styles.signupview}>
            <TouchableOpacity onPress={Check} style={styles.Signupbutton}>
                <Text style={{fontSize:20,color:'white',fontFamily:'Ubuntu'}}>Sign up</Text>
            </TouchableOpacity>

            <Text style={{color:'#fff'}}>or</Text>

            <TouchableOpacity style={styles.Signupbuttongoogle}>
              <Image style={{width:30,height:30}} source={require('../assets/images/google-logo-png-29546.png')} ></Image>
                <Text style={{fontSize:20,color:'violet',fontFamily:'Ubuntu',left:10}}>Sign up</Text>
            </TouchableOpacity>
       </View>

        
        <Text onPress={() => navigation.navigate('Login')}  style={{fontSize:20,color:'white',fontFamily:'Ubuntu',top:50,left:60,}}>Alredy Sign up LOGIN</Text>
    </View>

    
    </ImageBackground>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,
      },
      input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        color:'#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
       
      },
      extraView:{
        width: '100%',
        marginTop:20,
      },
      passwordInputContainer: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
       
      },
      passwordInputContainerwrong: {
        width: '100%',
        height: 50,
        borderWidth: 3,
        borderColor: 'red',
        
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
       
      },
      passwordInput: {
        flex: 1,
        height: '100%',
        color:'#fff',
        paddingHorizontal: 10,
      },
      passwordVisibilityToggle: {
        height: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
       // backgroundColor:'pink'
      },
      signupview:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        width:'100%',
      },
      Signupbutton:{
        width:'60%',
         height:40,
         borderRadius:10,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'violet',
      },
      Signupbuttongoogle:{
        flexDirection:'row',
       paddingLeft:40,
       width:'60%',
        height:40,
        borderRadius:10,
        
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'violet',
      },
})