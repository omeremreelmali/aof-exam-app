import React, {useState, useEffect} from 'react';
import { View, Text ,TouchableOpacity, FlatList,StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
let db = openDatabase({name: 'aofQ.db', createFromLocation: 1});
const Listlessons= ({route}) =>{

  const [lessons,getLessons] =useState([]);
  useEffect(  () => {
    getLesson();
  },[])
  

  const getLesson= () =>{
     db.transaction((tx) => {
      tx.executeSql('SELECT departments_lessons.lessonid,lessons.lessonname FROM departments_lessons join lessons on lessons.id=departments_lessons.lessonid WHERE departmentid=?', [route.params.depid], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
        {
              temp.push(results.rows.item(i));
        }
        getLessons(temp);
      });
    });
    return true;
  }


  return (
    <View>  
      <FlatList
        data ={lessons}
        keyExtractor = { (item,index) => index.toString() }
        renderItem={({item}) =>  
          <View style={styles.itemContent}>
              <Text >{item.lessonname}</Text>
          </View>      
        }        
      />
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
export default Listlessons;