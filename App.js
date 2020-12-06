import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";

import {Home, Search,listlessons,} from './src/pages';
import Listlessons from './src/pages/Listlessons';
import ListDeparman from './src/pages/ListDeparman';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen =({navigation}) => (
  <HomeStack.Navigator ScreenOptions={{
    
  }}>
    <HomeStack.Screen name = "Home" style= "center" component = {Home} options ={{
      title:'ANA SAYFA',
      headerStyle:{
        backgroundColor:'#333'
      },
      
      headerTitleAlign:'center',
      headerTintColor: '#fcfaff',
      headerTitleStyle: {
        fontWeight: 'bold', 
      },
  
       }}/>
  </HomeStack.Navigator>
);

const ListLessonstackScreen =({navigation}) => (
  <HomeStack.Navigator ScreenOptions={{
    
  }}>
    <HomeStack.Screen name = "Listlessons" style= "center" component = {Listlessons} options ={{
      title:'Dersler',
      headerStyle:{
        backgroundColor:'#333'
      },
      
      headerTitleAlign:'center',
      headerTintColor: '#fcfaff',
      headerTitleStyle: {
        fontWeight: 'bold', 
      },
      
     
       }}/>
  </HomeStack.Navigator>
);
const ListDepartmentstackScreen =({navigation}) => (
  <HomeStack.Navigator ScreenOptions={{
    
  }}>
    <HomeStack.Screen name = "ListDeparman" style= "center" component = {ListDeparman} options ={{
      title:'BÖLÜMLER',
      headerStyle:{
        backgroundColor:'#333'
      },
      
      headerTitleAlign:'center',
      headerTintColor: '#fcfaff',
      headerTitleStyle: {
        fontWeight: 'bold', 
      },
      
     
       }}/>
  </HomeStack.Navigator>
);

const SearchQuestiontackScreen =({navigation}) => (
  <HomeStack.Navigator ScreenOptions={{
    
  }}>
    <HomeStack.Screen name = "Search" style= "center" component = {Search} options ={{
      title:'Soru Ara',
      headerStyle:{
        backgroundColor:'#333'
      },
      
      headerTitleAlign:'center',
      headerTintColor: '#fcfaff',
      headerTitleStyle: {
        fontWeight: 'bold', 
      },
      
     
       }}/>
  </HomeStack.Navigator>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
     
      >
      <Tab.Screen 
        name="Home" 
        component={HomeStackScreen}
        
        options={{
          backgroundColor:'grey',
          tabBarColor:'black',
          tabBarLabel: 'ANASAYFA',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home"  color="#ccc" size={30} />
          ),
        }} 
        />

      <Tab.Screen 
        name="ListDepartment" 
        component={ListDepartmentstackScreen}
        options={{
          tabBarColor:'#333',
          tabBarLabel: 'BÖLÜMLER',
          tabBarIcon: ({ color }) => (
            <Icon name="logo-slack"  color="#ccc" size={30} />
          ),
        }}
         />
         <Tab.Screen 
        name="Listlessons" 
        component={SearchQuestiontackScreen}
        options={{
          tabBarColor:'#333',
          tabBarLabel: 'Ara',
          tabBarIcon: ({ color }) => (
            <Icon name="search"  color="#ccc" size={30} />
          ),
        }}
         />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {backgroundColor: 'grey', elevation: 0, shadowOpacity: 0},
  titleStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
