import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Listlessons from './Listlessons';
import ListDeparman from './ListDeparman';
import Home from './Home';
import Search from './Search';

const Stack = createStackNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen =({navigation}) => (
  <HomeStack.Navigator>

    <HomeStack.Screen name = "Home" style= "center" component = {Home} options ={{
      title:'ANA SAYFA',
      headerStyle:{
      backgroundColor:'#fff'
      },
      headerTitleAlign:'center',
      headerTintColor: '#000',
      headerTitleStyle: {
      fontWeight: 'bold', 
      },
      headerLeft:() =>(
        <Icon.Button name="ios-menu" size={25} iconStyle={{color:'black'}}
        backgroundColor= "#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
      ) 
     }}/>
     
    <HomeStack.Screen name = "ListDeparman" style= "center" component = {ListDeparman} options ={{
      title:'BÖLÜMLER',
      headerStyle:{
      backgroundColor:'#fff'
      },  
      headerTitleAlign:'center',
      headerTintColor: '#000',
      headerTitleStyle: {
      fontWeight: 'bold', 
      },
      
      
      }}/>
  </HomeStack.Navigator>
);

const ListDepartment = createStackNavigator();


const ListDepartmentstackScreen =({navigation}) => (
  <ListDepartment.Navigator>
      <ListDepartment.Screen name = "ListDeparman" style= "center" component = {ListDeparman} options ={{
          title:'BÖLÜMLER',
          headerStyle:{
          backgroundColor:'#fff'
          },
          headerTitleAlign:'center',
          headerTintColor: '#000',
          headerTitleStyle: {
          fontWeight: 'bold', 
          },    
        }}/>
        <ListDepartment.Screen name = "Listlessons" style= "center" component = {Listlessons} options ={{
          title:'Dersler',
          headerStyle:{
          backgroundColor:'#fff'
          },
          headerTitleAlign:'center',
          headerTintColor: '#000',
          headerTitleStyle: {
          fontWeight: 'bold', 
          },
       }}/>
  </ListDepartment.Navigator>
);
const Listlesson = createStackNavigator();

const ListLessonstackScreen =({navigation}) => (
  <Listlesson.Navigator ScreenOptions>

        <Listlesson.Screen name = "Listlessons" style= "center" component = {Listlessons} options ={{
          title:'Dersler',
          headerStyle:{
          backgroundColor:'#fff'
          },
          headerTitleAlign:'center',
          headerTintColor: '#000',
          headerTitleStyle: {
          fontWeight: 'bold', 
          },
        }}/>

        <Listlessons.Screen name = "Search" style= "center" component = {Search} options ={{
          title:'Soru Ara',
          headerStyle:{
          backgroundColor:'#fff'
          },
          headerTitleAlign:'center',
          headerTintColor: '#000',
          headerTitleStyle: {
          fontWeight: 'bold', 
          },
          }}/>

  </Listlesson.Navigator>
);



const SearchQuestions = createStackNavigator();

const SearchQuestiontackScreen =({navigation}) => (
  <SearchQuestions.Navigator>

    <SearchQuestions.Screen name = "Search" style= "center" component = {Search} options ={{
      title:'Soru Ara',
      headerStyle:{
      backgroundColor:'#fff'
      },
      headerTitleAlign:'center',
      headerTintColor: '#000',
      headerTitleStyle: {
      fontWeight: 'bold', 
      },
      }}/>

  </SearchQuestions.Navigator>
);

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator 
    initialRouteName="Home"
    
    barStyle={{ backgroundColor: '#000' }}
    >
    <Tab.Screen 
      name="Home" 
      component={HomeStackScreen}
      
      options={{
        tabBarLabel: 'Home',
        
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />

    <Tab.Screen 
      name="ListDepartment" 
      component={ListDepartmentstackScreen}
      options={{
        tabBarLabel: 'Bölümlerim',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="school" color={color} size={26} />
        ),
      }}
       />

       <Tab.Screen 
      name="Search" 
      component={SearchQuestiontackScreen}
      options={{
        tabBarLabel: 'Ara',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="search-web" color={color} size={26} />
        ),
      }}
       />
       
  </Tab.Navigator>
);

export default MainTabScreen;

const styles = StyleSheet.create({
  headerStyle: {backgroundColor: 'grey', elevation: 0, shadowOpacity: 0},
  titleStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

