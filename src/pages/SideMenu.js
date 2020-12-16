import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,Image} from 'react-native';

import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from 'react-native/Libraries/NewAppScreen';

const vw = Dimensions.get('window').width/150;
const vh = Dimensions.get('window').height/90;

const SideMenu = (props) => {

    const [cDarkTheme, setcDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setcDarkTheme(!cDarkTheme);
    }
    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}> 
            
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'column',marginTop: 45}}>
                     
                        <View style={{marginLeft:15, flexDirection:'row'}}>
                        
                            <Title style={styles.title}>AÖF BANKASI</Title>
                            
                        </View>
                    </View>
                    <View style={styles.row}>
                        
                        
                    </View>
                </View>
                {/* Drawer Section */}
                <Drawer.Section title="HOŞGELDİNİZ" style={{fontWeight:'bold',alignItems:'center'}}> 
                    <View>
                        
                    </View>
                </Drawer.Section>
                <Drawer.Section>
                
                    <DrawerItem 
                        icon = { ()=> ( <Icon name="home-outline" style={{fontSize:2.8*vh,color:'black'}} />  ) } 
                        label="ANA SAYFA"
                        onPress={ ()=>{props.navigation.navigate('Home')} }
                    />

                    <DrawerItem 
                        icon = { ()=> ( <Icon name="account-outline" style={{fontSize:2.8*vh,color:'black'}} />  ) } 
                        label="iNDİRİLENLER"
                        onPress={ ()=>{props.navigation.navigate('ListDepartment')} }
                    />
                     
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="toy-brick-search-outline" style={{fontSize:2.8*vh,color:'black'}} />  ) } 
                        label="SORU ARA"
                        onPress={ ()=>{props.navigation.navigate('Search')} }
                    />
                   
                </Drawer.Section>

                <Drawer.Section >
                    
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon = { ()=>( <Icon name="exit-to-app"  style={{fontSize:2.8*vh,color:'grey'}} /> ) }
                    label="DAHA FAZLASI "
                    
                />
            </Drawer.Section>
        </View>
    )
}

export default SideMenu;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 3*vh,
    },
    title: {
      fontSize: 4*vh,
      
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });