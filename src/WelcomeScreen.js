import { Animated, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';



const WelcomeScreen = ({navigation}) => {
  const scaleValue = new Animated.Value(1);

  const startPressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.8,
        useNativeDriver: true,
      }).start();
    };
  
    const startPressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };
  const [fontsLoaded] = useFonts({
    
    Satisfy : require('../assets/fonts/Pacifico-Regular.ttf'),
    Satisfy2 : require('../assets/fonts/Ubuntu-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null; // or show a loading screen
  }

  const StartdropAnimation = () => {
    const translatestart = useRef(new Animated.Value(730)).current;
  
    setTimeout(() => {
        startAnimation()
    }, 600);
  
    const startAnimation = () => {
      Animated.spring(translatestart, {
        toValue: 200,
        friction: 80, // Increase this value to slow down the animation
        // tension: 4, // Adjust this value to control the stiffness of the spring
        // bounciness:10,
        useNativeDriver: true,
      }).start();
    };
  
   
    return (
      
        <Animated.View style={[styles.box, { transform: [{ translateY:translatestart }] }]} >
                 {/* for siquzze animaton */}
             <Animated.View style={[{ transform: [{ scale: scaleValue }]}]}> 
           <Pressable 
          onPress={() => navigation.navigate('Sign')}

         onPressIn={startPressIn}
          onPressOut={startPressOut}
>
        <FontAwesomeIcon color='black' size={60} icon={faCircleArrowRight}></FontAwesomeIcon>
         </Pressable>
         </Animated.View>
        </Animated.View>
      
    );
  };
  return (
    <ImageBackground source={require('../assets/images/w5.webp')} style={{flex:1,alignItems:'center'}}>
       <View style={{top:100,alignItems:'center'}}>
        <Text  style={{fontSize:25,fontFamily:'Satisfy2'}}>Hie, welcome to</Text>
        <Text style={{fontSize:60,fontFamily:'Satisfy',color:'black'}}>Ghommi</Text>

        <StartdropAnimation />
       </View>

       
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  box:{
    // backgroundColor:'red',
  }
})