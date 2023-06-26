import { Alert, Animated, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo, useEffect, useRef } from 'react'
import { faEye, faEyeSlash, faFontAwesome, } from '@fortawesome/free-solid-svg-icons'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useState } from 'react';
import {useFonts  } from 'expo-font'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

var arr=[{'/':'1','$':'2','%':'3'}];


try{
    // if(   AsyncStorage.getItem('data')!= null){

      console.log(JSON.parse( AsyncStorage.getItem('data')))
      arr.push(JSON.parse( AsyncStorage.getItem('data')))
    
} catch{

}

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
        toValue: -100,
        friction: 80,
        useNativeDriver: true,
      }).start();
    };
  
    return (
      <Animated.View style={[styles.box, { transform: [{ translateY: translatestart }] }]}>
        <Text style={{ color: '#fff', fontSize: 35, fontFamily: 'Ubuntu' }}>Let's go</Text>
        <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Ubuntu' }}>Travelling around the world</Text>
      </Animated.View>
    );
  });


// const LabelMemo = memo(StartdropAnimation)

const LoginScreen = ({navigation}) => {


    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [hidePassword, setHidePassword] = useState(true);
  const [wrong, setwrong] = useState(0)
   const [chan, setchan] = useState(1)
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
    setchan(0)
  };


  const [fontsLoaded] = useFonts({
    
    Ubuntu : require('../assets/fonts/Ubuntu-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null; // or show a loading screen
  }



  const Check = async () => {
    var existingUser=JSON.parse( await AsyncStorage.getItem(email))

    if(existingUser==null){
      Alert.alert('Please sign in');
    }
   else if (existingUser['upass'] != password) {
        Alert.alert('wrong password');
       
    }
    else if (existingUser['upass'] == password) {
      //Alert.alert('Error', 'Email already exists!');
      navigation.navigate('Home')
      await AsyncStorage.setItem('naam',existingUser['uname']);
    
    }
  }
   
    
  


  const handleChangeText = (newText) => {
    setPassword(newText);
    setwrong(0)
  };



  return (
    <ImageBackground style={{width:'100%',height:760}} source={require('../assets/images/aesthetic-city.gif')}>
    <View style={styles.container} >

     <StartdropAnimation/>

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
    <View style={wrong?styles.passwordInputContainerwrong:styles.passwordInputContainer}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        value={password}
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

            <Text onPress={() => navigation.navigate('Sign')} style={{fontSize:20,color:'white',fontFamily:'Ubuntu',top:50}}>New user Signup</Text>

           
       </View>


    </View>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        
        height:700,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,
        // backgroundColor:'black'
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
      passwordInput: {
        flex: 1,
        height: '100%',
        color:'#fff',
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
         width:'50%',
         height:40,
         borderRadius:10,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'violet',
      },
})