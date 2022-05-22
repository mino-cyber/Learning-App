import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Courses from '../Screens/Courses';
import VideosList from '../Screens/Videoslist';
import VideoPage from '../Screens/Videopage';
import Search from '../Screens/Search';
import Account from '../Screens/Account';
import InstuctorHome from '../Screens/InstructorHome'
import Admin from '../Screens/Admin';

const Tab = createBottomTabNavigator();

function Menu() {
  return (
      <Tab.Navigator initialRouteName='Courses'>
          <Tab.Screen name="Courses" component={Courses}
             options={{
               headerShown : false,
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
             )
            }}/>

          <Tab.Screen name="Account" component={Account}
             options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
             )
            }}/>
      </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function AppStack(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name='Menu' component={Menu}  options = {{headerShown : false}}/>
        <Stack.Screen name='Search' component={Search} options = {{headerShown : false}}/>
        <Stack.Screen name='VideosList' component={VideosList} options ={{headerShown : false}}/>
        <Stack.Screen name='VideoPage' component={VideoPage} options ={{headerShown : false}}/>
        <Stack.Screen name='InstuctorHome' component={InstuctorHome} options ={{headerShown : false}}/>
        <Stack.Screen name='Admin' component={Admin} options ={{headerShown : false}}/> 
      </Stack.Navigator>
  </NavigationContainer>
  );
};
