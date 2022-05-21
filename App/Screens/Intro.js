import {useState} from 'react';

import * as React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {Headline, Subheading, Paragraph} from 'react-native-paper';

import FormButton from '../Components/FormButton';
import COLORS from '../assets/COLORS';


// import { singinWithSocial } from "../Firebase/auth";
// import { GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth';

export default function Intro({navigation})  {
  
  const [loading, setLoading] = useState(false);
  // const provider = new GoogleAuthProvider();
  // const facebookProvider = new FacebookAuthProvider();

  // function continuesWithGoogle (){
  //   setLoading(true);
  //   singinWithSocial(provider).then((result) => {
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     const user = result.user;
  //     setLoading(false);
  //     goToHome();
  //   }).catch((error) => {
  //     setLoading(false);
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     const email = error.email;
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  // });
  // }


  // function continuesWithFacebook (){
  //   singinWithSocial(facebookProvider).then((result) => {
  //     const user = result.user;
  //     const credential = FacebookAuthProvider.credentialFromResult(result);
  //     const accessToken = credential.accessToken;
  //     setLoading(false);
  //     goToHome();
  //   })
  //   .catch((error) => {
  //     setLoading(false);
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     const email = error.customData.email;
  //     const credential = FacebookAuthProvider.credentialFromError(error);
  //     console.log(error);

  //   });
  // }


  function goToHome() {
    navigation.navigate('Home');
  }

  return(    
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color= {COLORS.primary} /> : null}
        
        <Image source={require('../assets/Intro.png')} 
               style = { {marginTop: 100}}
        />

        <View style = {styles.Textviwe}>
          
        <Headline>Welcome to Acadimia</Headline>
        <Subheading>Learn Useful Knowledge Everyday</Subheading>

        </View>


          {/* <FormButton
            mode = "contained"
            labelStyle={styles.ContinuesButtonLabel}
            icon = "facebook"
            title={"Continues with Facebbok"}
            color = {COLORS.primary}
            onPress = {() => {continuesWithFacebook()}}
          />

          <FormButton
            mode = "contained"
            labelStyle={styles.ContinuesButtonLabel}
            icon = "google"
            title={"Continues with Google"}
            color = {COLORS.primary}
            onPress = {() => {continuesWithGoogle()}}
          /> */}

          <FormButton
            mode = "outlined"
            labelStyle={styles.ContinuesButtonLabel}
            title={"Create Account"}
            color = {COLORS.primary}
            onPress= {() =>  navigation.navigate('CreateAccount')}
          />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.black, fontWeight: 'bold'}}>
            You have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        <Paragraph style = {styles.Paragraph}>By Tapping Continues, Create Account or Use another Account. I agree to e-Course’s Terms of Services, Privacy Policy</Paragraph>
        

    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    ContinuesButtonLabel : {
        fontSize: 14,
    },

    Textviwe : {
        padding : 30,
        alignItems: 'center',
    },

    Paragraph: {
      textAlign : 'center',
      padding : 50,
      fontSize : 14
    }
    

});