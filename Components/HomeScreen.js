import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function HomeScreen({navigation}) {

  
  return (
    <View style={{alignItems:'center'}}>

    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Add Meal', { name: 'Jane' })
      }
      style={[styles.button,styles.topButton]}
    ><Text 
    style={styles.buttonText}
    >
      Add Meal
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit Meal', { name: 'Jane' })
      }
      style={styles.button}
    ><Text 
    style={styles.buttonText}
    >
      Edit Meal
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Add Cost', { name: 'Jane' })
      }
      style={styles.button}
    ><Text 
    style={styles.buttonText}
    >
      Add Cost
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit Cost', { name: 'Jane' })
      }
      style={styles.button}
    ><Text 
    style={styles.buttonText}
    >
      Edit Cost
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Add Meal Member', { name: 'Jane' })
      }
      style={styles.button}
    ><Text 
    style={styles.buttonText}
    >
      Add Meal Member
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Deposit', { name: 'Jane' })
      }
      style={styles.button}
    ><Text 
    style={styles.buttonText}
    >
      Deposit
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Calculate Meal', { name: 'Jane' })
      }
      style={styles.button}
    ><Text 
    style={styles.buttonText}
    >
      Calculate Meal
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Reset Meal', { name: 'Jane' })
      }
      style={styles.button}
    ><Text 
    style={styles.buttonText}
    >
      Reset Meal
    </Text>
    </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  topButton:{
    marginTop:30
  }
  ,
  button:{
    backgroundColor:'tomato',
    margin:5,
    padding:5,
    width:200
  }
  ,
  buttonText:{
    color:'whitesmoke',
    fontSize:20,
    fontWeight:'bold',
    padding:3
  }
})