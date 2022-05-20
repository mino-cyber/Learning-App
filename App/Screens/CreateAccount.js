import React, {useState} from 'react';
import { View,ScrollView,StyleSheet,TouchableOpacity,ActivityIndicator,KeyboardAvoidingView,Keyboard} from 'react-native';
import {Title, Subheading,TextInput,Text} from 'react-native-paper';
import {register, getUserUId} from "../Firebase/auth";
import {addUser} from "../Firebase/user";

import FormButton from '../Components/FormButton';
import FormInput from '../Components/FormInput';
import COLORS from '../assets/COLORS';

export default function CreateAccount({navigation})  {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLasttName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [color1, setColor1] = useState(COLORS.secondary);
    const [color2, setColor2] = useState(COLORS.secondary);
    const [secureText1, setSecureText1] = useState(true);
    const [secureText2, setSecureText2] = useState(true);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const minNumberofChars = 6;
    const maxNumberofChars = 16;
    const namePattern = /^[a-zA-Z ]{2,30}$/;


    function registerUser() {
        setLoading(true);
        if (email === '' || password === '') {
            alert("email or password is empty!");
        } else if (!emailPattern.test(email)){
            alert("Invalid Email!");
        }else if (password < minNumberofChars || password > maxNumberofChars ){
        }else if (password.length < minNumberofChars ){
        }else if (password < minNumberofChars || password > maxNumberofChars){
            alert("Invalid Password!");
        }else if (password !== confirmPassword){
            alert("Invalid password!");
        }else if (!namePattern.test(firstName) || !namePattern.test(lastName)){
            alert("Invalid Name!");
        }else{
            setLoading(false);
            register(email, password).then(() => {
                console.log(getUserUId());

                getUserUId().then((id) => {
                    addUser({id: id, email, firstName,lastName, Balance : 100});
                });
                navigation.navigate('Home');
            }).catch((e) => {
                setLoading(false);
                console.log(e.message)
            });
        }
    }

    function onPress1(){
        setColor1(COLORS.primary);
        setSecureText1(false);
    }
      
    function onPress2(){
        setColor2(COLORS.primary);
        setSecureText2(false);
    }

    return(
        <KeyboardAvoidingView style ={{flex:1}}>
        
        <ScrollView style = {styles.container} onPress ={Keyboard.dismiss}>
            {loading ? <ActivityIndicator size="large" color= {COLORS.primary} /> : null}
            
            <View style = {styles.Viewstyle}>
                <Title style = {styles.Title}>Welcome!</Title>
                <Subheading>Take a moment to Create Account</Subheading>
            </View>


            <Title style = {styles.font}>Personal information</Title>
            
            <View style = {{alignItems: 'center'}}>

                <FormInput 
                    modeValue={"outlined"}
                    labelName={"First Name"}
                    placeholder = "Enter your First Name"
                    onChangeText={setFirstName}
                    value={firstName}
                />

                <FormInput 
                    modeValue={"outlined"}
                    labelName={"Last Name"}
                    placeholder = "Enter your Last Name"
                    onChangeText={setLasttName}
                    value={lastName}  
                />

                <FormInput 
                    modeValue={"outlined"}
                    labelName={"Email"}
                    placeholder = "User@gmail.com"
                    onChangeText={setEmail}
                    value={email}  
                />
            </View>

            

            <Title style = {styles.font}>Your Password</Title>

            <View style = {{alignItems: 'center'}}>
                
                <Text>your paasword must be more than 6 character</Text>
                <Text>your paasword must be less than 16 character</Text>
                <FormInput 
                    modeValue={"outlined"}
                    labelName={"Password"}
                    right = {<TextInput.Icon name = "eye" onPress = {onPress1} 
                                        color = {color1} forceTextInputFocus = {false}/>}
                    secureTextEntry={secureText1}
                    onChangeText={setPassword}
                    value={password}
                />

                <FormInput 
                    modeValue={"outlined"}
                    labelName={"Confirm Password"}
                    right = {<TextInput.Icon name = "eye" onPress = {onPress2} 
                                            color = {color2} forceTextInputFocus = {false}/>}
                    secureTextEntry={secureText2}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}        
                />

            </View>

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

            <View style = {{paddingBottom: 20,alignItems: 'center'}}>
                <FormButton
                    mode = "contained"
                    labelStyle={styles.ContinuesButtonLabel}
                    title={"Create Account"}
                    color = {COLORS.primary}
                    onPress = {registerUser}
                />
            </View>

            
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
      },

      Viewstyle:{
        alignItems: 'left',
        paddingTop : 50,
        paddingLeft : 20,
      },

      Title:{
        fontSize : 30,
        fontWeight: 'bold',
    },

    RadioButton : {
        flexDirection: "row"
    },

    Text:{
        padding : 5,
        fontSize : 16,
    },

    ContinuesButtonLabel : {
        fontSize: 14,
    },

    font:{
        fontSize : 18,
        fontWeight : 'bold',
        color : COLORS.black,
        paddingTop : 10,
        paddingLeft : 20
    }
})