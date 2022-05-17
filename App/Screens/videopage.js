import react from "react";
import { StyleSheet,View,Text,FlatList,ScrollView,SafeAreaView } from "react-native";
import { Card } from "react-native-paper";
import VideoPlayer from "react-native-videoplayer";

const videopage =() => {
    data=[
        {
            id:1,
            name:'https://www.youtube.com/watch?v=WSJHAsnot54&t=3s',
            name_1:'video 1',
            time:'5',
        },
        {
            id:4,
            name:'https://www.youtube.com/watch?v=WSJHAsnot54&t=3s',
            name_1:'video 2',
            time:'5',
        },
        {
            id:3,
            name:'https://www.youtube.com/watch?v=WSJHAsnot54&t=3s',
            name_1:'video 3',
            time:'5',
        },
        {
            id:5,
            name:'https://www.youtube.com/watch?v=WSJHAsnot54&t=3s',
            name_1:'video 4',
            time:'5',
        },
        {
            id:8,
            name:'https://www.youtube.com/watch?v=WSJHAsnot54&t=3s',
            name_1:'video 5',
            time:'5',
        },
    ]
    return(
        <SafeAreaView>
<FlatList data={data} 
keyExtractor={(item,index)=> '${index}'}
renderItem={({item,index})=>{
    return <ScrollView style={{marginTop:10 }}>
        <View>
            <Text>{item.name_1}</Text>
        </View>
        <VideoPlayer video={{uri:item.name}} 
        autoplay={false}
        defaultMuted={true}
        videoWidth={1500}
        videoHeight={1000}
        thumbnail={require('../../assets/images/Group.png')}
        />
    </ScrollView>
}}
/>    
      </SafeAreaView>
    );

};

export default videopage ;

const styles = StyleSheet.create


