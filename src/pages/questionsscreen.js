import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const  questionsscreen=({route}) => {
  
  return (
    <View>
      <Text style={styles.questionStyle}>{route.params.question.questionname}</Text>
      <Text style={[route.params.question.aoptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.aoptionname}</Text>
      <Text style={[route.params.question.boptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.boptionname}</Text>
      <Text style={[route.params.question.coptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.coptionname}</Text>
      <Text style={[route.params.question.doptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.doptionname}</Text>
      <Text style={[route.params.question.eoptionname==route.params.question.answerbame ? styles.trueOption : styles.falseOption]}>{route.params.question.eoptionname}</Text>
    </View>
  )
}



const styles= StyleSheet.create({
  questionStyle:{
    color:'black'
  },
  trueOption:{
    color:'green'
  },
  falseOption:{
    color:'red'
  }
})



export default questionsscreen;
