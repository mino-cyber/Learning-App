import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from '../Screens/Onboarding';

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
            </Stack.Navigator>
          </NavigationContainer>
      );
    }else{
      return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Intro' component={Intro} options = {{headerShown : false}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
      ) 
    }

}