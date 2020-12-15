import React, {useState, useEffect} from 'react';
import { View, Modal,Text ,TouchableOpacity, Alert,FlatList,StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import axios from "axios";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
let db = openDatabase({name: 'aofQ.db', createFromLocation: 1});

const Listlessons= ({route,navigation}) =>{

  const [lessons,getLessons] =useState([]);
  const [modalView,setModalView] =useState(false);
  useEffect(  () => {
    getLesson();
  },[])
 

  const getLesson= () =>{
     db.transaction((tx) => {
      tx.executeSql('SELECT departments_lessons.lessonid,lessons.lessonname,lessons.downloaded FROM departments_lessons join lessons on lessons.id=departments_lessons.lessonid WHERE departmentid=?', [route.params.depid], (tx, results) => {
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
    /*db.transaction((tx) => {
          tx.executeSql('SELECT * FROM questions WHERE lessonid=?', [getLessonId], (tx, results) => {
            for (let index = 0; index < results.rows.length; index++) {
              console.log(results.rows.item(index).aoptionname);
            }  
          });
        });
    */  
    setModalView(true);

    setTimeout(() => {
      getLesson();
      setModalView(false);
    }, 9000);
    

    const api = "http://yedisinek.com/deneme.php?lesid="+getLessonId;
       axios.get(api).then((response)=>{
        db.transaction((tx) => {
          tx.executeSql('UPDATE lessons SET downloaded=? WHERE id=?', ['1',getLessonId]);
        });
        response.data.map((item) => {
          db.transaction((tx) => {
            tx.executeSql('INSERT INTO questions (questionname,lessonname,answerbame,aoptionname,boptionname,coptionname,doptionname,eoptionname,lessonid,oldidq) VALUES (?,?,?,?,?,?,?,?,?,?)', 
            [item.QuestionName,item.LessonName,item.AnswerName,item.AOption,item.BOption,item.COption,item.DOption,item.EOption,item.id,item.Id]);
          });
        });

        console.log("Tüm sorular başarıyla kayıt edildi.");
        
      });

/*
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM lessons WHERE id=?', [getLessonId], (tx, results) => {
          console.log(results.rows.item(0).downloaded);

      });
    });
      */
  }

  
  


  return (
    <View>  

      <Modal
          animationType="slide"
          transparent = {true}
          visible={modalView}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: 'white',
              justifyContent: 'center',
              margin: 25,
            }}>
            <Text style={{fontSize: 16, color: 'black'}}>
              Derse ait sorular indiriliyor lütfen bekleyin..
            </Text>
          </View>
        </Modal>
    
      <FlatList
        data ={lessons}
        keyExtractor = { (item,index) => index.toString() }
        renderItem={({item,index}) => {
          if(item.downloaded==1){
            return(
            <View style={styles.itemContent}>
              <Text style={{flex:3,flexDirection: 'row'}} >{item.lessonname}</Text>
              <View style={{flex:1,flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Search')}} style={styles.button}><MaterialCommunityIcons name="card-search"  size={30} /></TouchableOpacity> 
              </View>
            </View>)
          }
          else if(item.downloaded==0){
            return(
            <View style={styles.itemContent}>
                <Text style={{flex:3,flexDirection: 'row'}} >{item.lessonname}</Text>
                <View style={{flex:1,flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => {saveQuestion(item.lessonid);}} style={styles.button}><MaterialCommunityIcons name="download-box"  size={30} /></TouchableOpacity>
                </View>
            </View>)
          }
             
          }
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