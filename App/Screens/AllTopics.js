
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList , Image} from 'react-native';
import TopicCard from '../../shared/topicCard.js';

let topictItem = [
    {
      image:require('../../assets/Group 14.png'),
      title: 'Business',
      key:'1'
    },
    {
      image:require('../../assets/chemistry.png'),
      title: 'Chemistry',
      key:'2'
    },
    {
      image:require('../../assets/film.png'),
      title: 'Film',
      key:'3'
    },
    {
        image:require('../../assets/math.png'),
        title: 'Math',
        key:'4'
      },
      {
        image:require('../../assets/design.png'),
        title: 'Design',
        key:'5'
      },
      {
        image:require('../../assets/music.png'),
        title: 'Music',
        key:'6'
      },
      {
        image:require('../../assets/physics.png'),
        title: 'Physics',
        key:'7'
      },
      {
        image:require('../../assets/software.png'),
        title: 'Software',
        key:'8'
      }   
      
  ] ;
 
  let pressHandler = (key) => {
    console.log("hello");
   // هخليها بالنفيجيشن تروح لصفحة تانية 

 };
 
 
 
 let subject = ({item}) => (
   <TouchableOpacity onPress={() => pressHandler(item.key)} >
   <TopicCard>
    
    < Image source={item.image} style={styles.imageStyle} />
    <Text style={styles.textimage}>{item.title}</Text>
 
   </TopicCard>
   </TouchableOpacity>
 );


  export default function Topic() {


    return (

      <View style={styles.container}>
        <FlatList
        data = {topictItem}
        renderItem ={subject}
        numColumns={2} 
       
       />
 
      
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2'
      
  
    },
    imageStyle:{
    width: 80,
    height: 80,
    borderRadius:5,
    marginLeft:8,
    marginTop:10
  
  
    },
    textimage:{
      fontSize: 18,
      marginLeft:15,
      marginTop:5,
      
      
    }  
    
  });
  
  
  
  
  