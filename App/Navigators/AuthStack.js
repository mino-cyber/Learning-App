import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from '../Screens/Onboarding';
import Intro from '../Screens/Intro';
import CreateAccount from '../Screens/CreateAccount';
import Login from '../Screens/login';
import ForgotPassword from '../Screens/ForgotPassword';


const Stack = createNativeStackNavigator();

export default function AuthStack() {

    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  
    useEffect(() => {
      AsyncStorage.getItem('alreadyLaunched').then(value => {
        if(value === null){
          AsyncStorage.setItem('alreadyLaunched','true');
          setIsFirstLaunch(true);
        }else{
          setIsFirstLaunch(false);
        }
      });
  
    },[]);
  
    if(isFirstLaunch === null){
      return null;
    }else if (isFirstLaunch === true){
      return(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Onboarding" component={Onboarding}  options = {{headerShown : false}}/>
              <Stack.Screen name='Intro' component={Intro} options = {{headerShown : false}}/>
              <Stack.Screen name='CreateAccount' component={CreateAccount}/>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
            </Stack.Navigator>
          </NavigationContainer>
      );
    }else{
      return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Intro'>
          <Stack.Screen name='Intro' component={Intro} options = {{headerShown : false}}/>
          <Stack.Screen name='CreateAccount' component={CreateAccount}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        </Stack.Navigator>
      </NavigationContainer>
      ) 
    }

}