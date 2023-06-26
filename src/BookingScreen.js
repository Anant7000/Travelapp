import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarsProgress, faBarsStaggered, faCalendar, faChair, faCouch, faIdBadge, faLessThan, faLocation, faLocationDot, faPlane, faRightLeft, faRightLong, faTag, faUser } from '@fortawesome/free-solid-svg-icons'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const BookingScreen = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 const [Din, setDin] = useState('')
 const [isOpen, setIsOpen] = useState(false);
 const [selectedOption, setSelectedOption] = useState("Buisness");

 const handleToggleDropdown = () => {
   setIsOpen(!isOpen);
 };

 const handleSelectOption = (option) => {
   setSelectedOption(option);
   setIsOpen(false);
 };
 

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  
  
  const handleConfirm = (date) => {
    const dt=new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    const x2=x1[2]+'/'+x1[1]+'/'+x1[0];
    setDin(x2);
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  


  
  const sumbit = () =>{
    navigation.navigate('Detail')
  }


  const options = [
    { id: 1, label: 'Business' },
    { id: 2, label: 'Economy' },
    { id: 3, label: 'garreb hu' },
    
  ];

  const data = [
    { key: '1', text: '$ 2345' },
    { key: '2', text: '$ 2345' },
    { key: '3', text: '$ 2345' },
    { key: '4', text: '$ 2345' },
    { key: '5', text: '$ 2345' },
  ];

  

  const colors = ['#00ccff', '#729cfe', '#ffb288', '#ADFF2F', '#00FFFF'];

  return (
    <View>
        <View style={{position: 'absolute',
              backgroundColor: '#fff',
           maxHeight: '90%',
           width: '40%',
           left:'52%',
           top:'63.6%',
             borderRadius: 8,
             borderColor:'pink',
             borderWidth:1,
             marginTop: 10,
             zIndex: 1,
             alignItems:'center'}}>
               {isOpen && (
                    <FlatList
                   
                      data={options}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelectOption(item.label)}>
                          <Text style={{fontSize:17}}>{item.label}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  )}
            </View>
    <View style={{paddingLeft:20}}>
        <View style={{width:'100%',height:81,alignItems:'center',flexDirection:'row'}}>
        <FontAwesomeIcon size={25} style={{top:10,}} icon={faLessThan}></FontAwesomeIcon>  
        
         <FontAwesomeIcon size={25} style={{left:280,top:10}} icon={faBarsStaggered}></FontAwesomeIcon>

        </View>
         <Text style={{fontSize:30,fontWeight:'600',}}>Book Your Flight</Text>

         <View style={{width:'100%',height:50,flexDirection:'row',alignItems:'center'}}>
                
                   <View style={{width:100,height:30,flexDirection:'row',alignItems:'center',backgroundColor:'#c8d8ff',borderRadius:10}}>
                    <Pressable  style={{backgroundColor:'#5b67f1',padding:4,borderRadius:20,left:4}}>
                   <FontAwesomeIcon  style={{}} icon={faRightLong}></FontAwesomeIcon> 
                   </Pressable>
                   <Text  style={{left:12,color:'#5b67f1'}}>One way</Text>
                 </View>

                 <View style={{width:110,height:30,flexDirection:'row',alignItems:'center',left:20,backgroundColor:'#c8d8ff',borderRadius:10}}>
                 <Pressable  style={{backgroundColor:'#5b67f1',padding:5,borderRadius:20,left:4}}>
                 <FontAwesomeIcon  style={{}} icon={faRightLeft}></FontAwesomeIcon> 
                 </Pressable>
                 <Text  style={{left:12,color:'#5b67f1'}}>Round trip</Text>
                 </View>
         </View>

         <View style={{flexDirection:'row',width:'90%',height:70,backgroundColor:'white',top:13,borderRadius:14,alignItems:'center',elevation:10}}>
                
                <FontAwesomeIcon color='#bbbfda' style={{left:30,transform: [{rotate: '90deg'}],}} size={25} icon={faPlane}></FontAwesomeIcon>
              <View>
              <Text style={{left:70}}>From</Text>
              <Text  onPress={() => navigation.navigate('Places')} style={{fontSize:19,left:70}}>San Francisco</Text>
              </View>
        </View>

        <View style={{width:50,height:50,backgroundColor:'#5b67f1',top:-7,left:240,zIndex:1,borderRadius:14,justifyContent:'center',elevation:10,alignItems:'center'}}>
        <FontAwesomeIcon  style={{transform: [{rotate: '90deg'}],color:'#fff'}} icon={faRightLeft}></FontAwesomeIcon>      

        </View>

        <View style={{flexDirection:'row',width:'90%',height:70,backgroundColor:'white',top:-23,borderRadius:14,alignItems:'center',elevation:10}}>
             
         <FontAwesomeIcon style={{left:30}} color='#bbbfda' size={25} icon={faLocationDot}></FontAwesomeIcon>
              <View>
              <Text style={{left:70}}>Destination</Text>
              <Text style={{fontSize:19,left:70}}>New York</Text>
              </View>

        </View>

        
        <View style={{width:'55%',height:60,backgroundColor:'#fff',borderRadius:14,top:-6,elevation:10,flexDirection:'row',alignItems:'center'}}>
          
           <FontAwesomeIcon size={34} color='#bbbfda' style={{left:20}} icon={faUser}></FontAwesomeIcon> 

           <View style={{left:40}}>
            <Text>Passengers</Text>
            <Text style={{fontWeight:'600',fontSize:20}}>2 Adult</Text>
           </View>
           
        </View>

        <View style={{width:'100%',height:70,flexDirection:'row',alignItems:'center'}}>
             <View style={{width:'43%',height:60,backgroundColor:'white',borderRadius:14,elevation:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
             <Pressable onPress={showDatePicker} >
              <FontAwesomeIcon size={30} color='#bbbfda' style={{right:9}} icon={faCalendar}></FontAwesomeIcon>
              </Pressable>
                   <View style={{left:5}}>
                    <Text>Departure</Text>
                   <Text  style={{fontWeight:'700',top:1}}>{Din}</Text>
                   </View>
             </View>

             <Pressable onPress={handleToggleDropdown} style={{width:'43%',height:60,backgroundColor:'white',left:20,borderRadius:14,elevation:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <FontAwesomeIcon size={25} style={{right:15}} icon={faCouch}></FontAwesomeIcon>  
                  <View>
                    <Text>Class</Text>
                    <Text style={{fontSize:17}}>{selectedOption}</Text>
                  </View>
            </Pressable>

          
        </View>


        <View style={{width:'100%',height:70,flexDirection:'row',alignItems:'center',top:-1}}>
             <View style={{width:60,height:50,borderRadius:14,elevation:10,
              backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
             <FontAwesomeIcon size={25} style={{}} icon={faTag}></FontAwesomeIcon>  
             </View>

             <View style={{width:'50%',height:50,backgroundColor:'#505efb',left:20,borderRadius:14,elevation:10,justifyContent:'center',alignItems:'center'}}>
                   <Text style={{fontSize:20,color:'#fff'}} onPress={() => sumbit()} >Search the flight</Text>
            </View>
        </View>

        </View>

        <View style={{width:'100%',height:30,top:4,flexDirection:'row',alignItems:'center',}}>
                <Text style={{fontSize:18,left:20}}>Recommended</Text>
                <Text  style={{fontSize:15,left:160}}>View All</Text>
        </View>

        <View style={{width:'100%',height:155,top:10,}}>
       


        <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item,index }) => (
        
        <View style={{width:140,height:130,backgroundColor:colors[index % colors.length],borderRadius:15,margin:10}}>
             <View style={{width:40,height:40,left:10,backgroundColor:'white',top:10,borderRadius:13,alignItems:'center',justifyContent:'center'}}>
             <FontAwesomeIcon color={colors[index % colors.length]} size={29}  style={{transform: [{rotate: '-45deg'}],}} icon={faPlane} ></FontAwesomeIcon> 
             </View>
             <Text style={{left:10,top:10}}>{item.text}</Text>

           </View>
      )}
      keyExtractor={(item) => item.key}
      horizontal 
    />
  

           {/* <View style={{width:140,height:130,backgroundColor:'#00ccff',borderRadius:15,margin:10}}>
             <View style={{width:40,height:40,left:10,backgroundColor:'white',top:10,borderRadius:13,alignItems:'center',justifyContent:'center'}}>
             <FontAwesomeIcon size={29}  style={{}} icon={faPlane}></FontAwesomeIcon> 
             </View>
             <Text style={{left:10,top:10}}>$2453</Text>

           </View> */}

       </View>

      

       <DateTimePickerModal
      isDarkModeEnabled={true}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
   
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})