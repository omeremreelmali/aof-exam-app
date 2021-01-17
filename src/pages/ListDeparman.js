import React, {useState, useEffect} from 'react';
import { View, Text ,TouchableOpacity, FlatList,StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
let db = openDatabase({name: 'aofQ.db', createFromLocation: 1});
import { BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const BannerCode = (Platform.OS == 'android') ? 'ca-app-pub-8483958074876075/3179944916' : 'ca-app-pub-8483958074876075/8615888829';

export default function ListDeparman({navigation}) {
  const [department,getDepartment]= useState([]);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM departments WHERE downloaded=1', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i){
          temp.push(results.rows.item(i));
        }
        getDepartment(temp);
      });
    });
  })
  return (
    <View>
      

        <FlatList
          data ={department}
          keyExtractor = { (item,index) => index.toString() }
          renderItem={({item}) =>  
            <View>
              <TouchableOpacity   onPress={() =>
                navigation.navigate('Listlessons', {depid: item.id})
              }>
                <Text style={styles.itemContent}> {item.departmentname}</Text>
              </TouchableOpacity>
            </View>
          }
        />
          <View style={{margintop:15,justifyContent:'flex-end'}}>     
           <BannerAd
              unitId={BannerCode}
              size={BannerAdSize.FULL_BANNER}
              onAdFailedToLoad={(e)=>console.log(e)}
              requestOptions={{
              requestNonPersonalizedAdsOnly: true,
              }}
            />  
        </View>
        
      </View>
  )
}


const styles =StyleSheet.create({
    itemContent:{
      borderBottomWidth: 1,
      marginTop:3,
      padding:10,
      borderBottomColor:'#333'
    },
    
})