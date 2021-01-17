import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Search,listlessons,} from './src/pages';
import Listlessons from './src/pages/Listlessons';
import ListDeparman from './src/pages/ListDeparman';
import MainTabScreen from './src/pages/MainTabScreen';
import SideMenu from './src/pages/SideMenu';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import AnimatedLoader from "react-native-animated-loader";
import AnimatedSplash from "react-native-animated-splash-screen";

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });


export default class App extends React.Component{
  

  render() {
    
  return (
    
    <NavigationContainer theme={DefaultTheme}>
       <Drawer.Navigator  drawerContent={ props => <SideMenu {...props} /> }>
        <Drawer.Screen name="Menutab" component={MainTabScreen} />
        <Drawer.Screen name="Derslerim" component={Listlessons} />  
        
      </Drawer.Navigator>
    </NavigationContainer>

  );
  }
};

const styles = StyleSheet.create({
  headerStyle: {backgroundColor: 'grey', elevation: 0, shadowOpacity: 0},
  titleStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  lottie: {
    width: 100,
    height: 100
  }
});

