import React, {useState, useEffect} from 'react';
import { View, Text ,TouchableOpacity, FlatList,StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import axios from "axios";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  }

  const saveQuestion = async (getLessonId)=>{
    

    const api = "http://yedisinek.com/deneme.php?lesid="+getLessonId;
       axios.get(api).then((response)=>{
        response.data.map((item) => {

          db.transaction((tx) => {
            tx.executeSql('INSERT INTO questions (questionname,lessonname,answerbame,aoptionname,boptionname,coptionname,doptionname,eoptionname,lessonid,oldidq) VALUES (?,?,?,?,?,?,?,?,?,?)', 
            [item.QuestionName,item.LessonName,item.AnswerName,item.AOption,item.BOption,item.COption,item.DOption,item.EOption,item.id,item.Id]);
          });
        });

        console.log("Tüm sorular başarıyla kayıt edildi.");
        /*db.transaction((tx) => {
          tx.executeSql('SELECT * FROM questions', [], (tx, results) => {
            for (let index = 0; index < results.rows.length; index++) {
              console.log(results.rows.item(index).aoptionname);
            }  
          });
        });*/
      });


    

  }

  


  return (
    <View>  
      <FlatList
        data ={lessons}
        keyExtractor = { (item,index) => index.toString() }
        renderItem={({item}) =>  
          
          <View style={styles.itemContent}>
              <Text style={{flex:3,flexDirection: 'row'}} >{item.lessonname}</Text>
              <View style={{flex:1,flexDirection: 'row'}}>

                { 
                  item.downloaded ? (<TouchableOpacity style={styles.button}><MaterialCommunityIcons name="shuffle-variant"  size={30} /></TouchableOpacity> ) :(<View></View>)
                }
                
                { 
                  !item.downloaded ? (<TouchableOpacity onPress={() => {saveQuestion(item.lessonid);}} style={styles.button}><MaterialCommunityIcons name="download-box"  size={30} /></TouchableOpacity> ) :(<View></View>)
                }
                { 
                  item.downloaded ? (<TouchableOpacity style={styles.button}><MaterialCommunityIcons name="card-search"  size={30} /></TouchableOpacity> ) :(<View></View>)
                }
                
              </View>
          </View>      
        }        
      />
    </View>
  )
}

const styles =StyleSheet.create({
    itemContent:{
      width:'100%',
      color: '#fff',
      borderBottomWidth: 1,
      marginTop:3,
      padding:10,
      borderBottomColor:'#333',
      flex: 1, 
      flexDirection: 'row'
    },
    button: {
      alignItems: "center",
    },
    
})
export default Listlessons;