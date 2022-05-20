import React, {useState} from 'react';
import { View, Image, StyleSheet,Text,TouchableOpacity, ActivityIndicator} from 'react-native';
import {Headline,Title} from 'react-native-paper';
import {restPassword} from "../Firebase/auth";

import FormButton from '../Components/FormButton';
import FormInput from '../Components/FormInput';
import COLORS from '../assets/COLORS';



export default function ForgotPassword({navigation})  {
    
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    function forgetPassword() {
        setLoading(true);
        restPassword(email).then(() => {
            setLoading(false);
            setSent(true);
        }).catch((e) => {
            setLoading(false);
            Alert.alert('Error', e.message);
          });
    };

    return(
        
        <View style = {styles.container}>
            {loading ? <ActivityIndicator size="large" color= {COLORS.primary} /> : null}
            <Headline style = {styles.Headline}>Enter your registered email below to receive password reset intruction</Headline>
            
            {sent ? (
            <Title style={styles.sentText}>
                An email with password reset instructions has been sent to your email
                address
            </Title>
            ) : null}
            {/* <Image source={require('../assets/ForgotPassword.png')} /> */}

            <FormInput
                modeValue={"outlined"} 
                labelName={"Email"}
                placeholder = "user@gmail.com" 
                onChangeText={setEmail}
                value={email}
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
                   remember password?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
                     Login
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {{padding : 150}}>
            <FormButton
                mode = "contained"
                labelStyle={styles.ContinuesButtonLabel}
                title={"Send"}
                color = {COLORS.primary}
                onPress = {forgetPassword}
            />
            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
      },

      Headline:{
        fontSize : 16,
        paddingTop : 50,
        textAlign : 'center',
        color : COLORS.black
    },

    sentText :{
        color: 'green',
        margin: 15,
    },
})