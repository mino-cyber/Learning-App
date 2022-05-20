import {useState,useContext} from 'react';
import * as React from "react";
import { View,StyleSheet,Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Title, Subheading} from 'react-native-paper';
import {login} from "../Firebase/auth";

import FormButton from '../Components/FormButton';
import FormInput from '../Components/FormInput';
import COLORS from '../assets/COLORS';


export default function Login({navigation})  {
    
    const InstructorEmail = 'instructor@acadimia.com';
    const InstructorPassword = 'instructor';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState(COLORS.secondary);
    const [secureText, setSecureText] = useState(true);

    async function signInUser() {
        setLoading(true);
        if(login(InstructorEmail,InstructorPassword)){
            setLoading(false);
            goToInstructorHome();
        }
        login(email, password).then(() => {
            setLoading(false);
            goToHome();
        }).catch((e) => {
            setLoading(false);
            alert(e.message);
            console.log(e.message);
        });
    }


    function goToHome() {
        navigation.navigate('Home');
    }

    function  goToInstructorHome(){
        navigation.navigate('goToInstructorHome');
    }
    
    function onPress(){
        setColor(COLORS.primary);
        setSecureText(false);
    }
    
    return(
        
        <KeyboardAvoidingView style ={{flex:1}}>
            
        <View style = {styles.container} onPress ={Keyboard.dismiss}>
             {loading ? <ActivityIndicator size="large" color= {COLORS.primary} /> : null}

            <Title style = {styles.Title}>Welcome Back!</Title>
            <Subheading>Log in to continue</Subheading>
            

            <View style = {{paddingTop : 50}}>
            <FormInput
                modeValue={"outlined"} 
                labelName={"Email"}
                placeholder = "user@gmail.com"
                onChangeText={setEmail} 
                value={email}   
            />

            <FormInput 
                modeValue={"outlined"}
                labelName={"Password"}
                right = {<TextInput.Icon name = "eye" onPress = {onPress} color = {color}/>}
                secureTextEntry={secureText} 
                onChangeText={setPassword}
                value={password}     
            />

            <FormButton
                mode = "text"
                labelStyle={[styles.ContinuesButtonLabel,{textDecorationLine : 'underline'}]}
                title={"Forgot Password ?"}
                color = {COLORS.black}
                onPress= {() =>  navigation.navigate('ForgotPassword')}
            />

            <FormButton
                mode = "contained"
                labelStyle={styles.ContinuesButtonLabel}
                title={"Login"}
                color = {COLORS.primary}
                onPress = {signInUser}
            />

        </View>

            <Text style = {styles.Text}>OR</Text>

            <FormButton
                mode = "outlined"
                icon={"facebook"}
                labelStyle={styles.ContinuesButtonLabel}
                title={"Login With Facebook"}
                color = {COLORS.primary}
            />

            <FormButton
                mode = "outlined"
                icon={"google"}
                labelStyle={styles.ContinuesButtonLabel}
                title={"Login With Google"}
                color = {COLORS.primary}
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
                    don't have an account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
                     Create Account
                    </Text>
                </TouchableOpacity>
            </View>
        
           
        </View>
        </KeyboardAvoidingView>
    
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      flex: 1,
      alignItems: 'center',
    },

    Title:{
        fontSize : 24,
        fontWeight: 'bold',
        paddingTop : 50
    },

    ContinuesButtonLabel : {
        fontSize: 14,
    },

    Text :{
        fontSize : 14,
        paddingTop : 20,
        alignItems: 'center',
    }

});