import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback, useEffect, useState } from 'react'



var count=0;
const TictakScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  
    const [active_player, setActive_player] = useState('X')
    const [markers, setMarkers] = useState([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  
    const markPosition = (position) => {
      if(!markers[position]){
        let temp = [...markers]
        temp[position] = active_player
        setMarkers(temp)
        if(active_player === 'X'){  //transfer chances to next player
          setActive_player('O')
        }else{
          setActive_player('X')
        }

        count++;
      }
    }
  
    const resetMarkers = () => {
      setMarkers([
        null, null, null,
        null, null, null,
        null, null, null
      ])
    }
  
    const calculateWinner = (squares) => {
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a];
        }
      }
      return null;
    }
  
    useEffect(() => {
      const winner = calculateWinner(markers);
      if(winner === 'X'){
        alert("Player X Won!")
        resetMarkers()
        count=0
      }else if(winner === 'O'){
        alert("Player O Won!")
        resetMarkers()
        count=0
      }
      else if(count==9){
        alert("Draw Hogaya Bhai")
        count=0
      }

   
     

    }, [markers])
      
  function Fun(params) {
    return(
       
       <Pressable style={{width:70,height:70,backgroundColor:'green',justifyContent:'center',alignItems:'center',margin:10,borderRadius:8}} onPress={()=>markPosition(params.no)}>
       {markers[params.no] === 'X' && <Image source={require('../assets/cross.png')} style={styles.icon} />}
       {markers[params.no] === 'O' && <Image source={require('../assets/circle.png')} style={styles.icon} />}
     </Pressable>
    )
  }


  return (
    
      <View style={styles.container}>
        
        <View style={[styles.playerInfo, { backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075' }]}>
        <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
         </View>

           <View style={styles.boxrow}>
              <Fun no={0}/>
              <Fun no={1}/>
              <Fun no={2}/>
           </View>

           <View style={styles.boxrow}>
              <Fun no={3}/>
              <Fun no={4}/>
              <Fun no={5}/>
           </View>


           <View style={styles.boxrow}>
              <Fun no={6}/>
              <Fun no={7}/>
              <Fun no={8}/>
           </View>
          

       
      </View>
      
   
  )
}

export default TictakScreen

const styles = StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  boxImage:{
    width:50,
    height:50,
  },
  boxrow:{
   flexDirection:'row',
   backgroundColor:'pink'
  },
  icon:{
    width:30,
    height:30,
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   padding:20,
   bottom:40,
   borderRadius:10
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fff'
  },
})