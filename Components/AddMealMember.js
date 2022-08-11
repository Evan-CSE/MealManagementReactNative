import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function AddMealMember() {
  const [name,setName] = useState('');
  const [deposit,setDeposit] = useState(0);
  const [meal,setMeal] = useState(0);
  const [allMembers,setAllMembers] = useState([]);

  const ChangeName = (newName) =>{
    setName(newName);
    // console.log("new name: "+newName);
  }

  const changeDeposit = (value) =>{
    setDeposit(value);
    // console.log("deposit"+deposit);
  }

  const changeMealCount = (value)=>{
    setMeal(value)
    // console.log("meal Count: "+value);
  }

  const getItem = async() =>{
    try{
      let name = await AsyncStorage.getItem("mealInfo");
      return JSON.parse(name);
    }catch(err){
      console.log(err)
    }
  }

  const saveItem = async(arr) =>{
    try{
     await AsyncStorage.setItem('mealInfo',JSON.stringify(arr));
    }catch(err){
     console.log(err)
    }
 }


  const insertItem = async() =>{
    getItem()
    .then(item=>{
      // console.log("insertion: ");
      // console.log(item);
      item.push({name:name,meal:meal,deposit:deposit})
      setAllMembers(item);
      saveItem(item);
    })
    .catch(function () {
      console.log("Promise Rejected");
 });
  }

  useEffect(()=>{
    // console.log(name);
    setAllMembers(getItem()); 
  },[])

  return (
    <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name of the Meal Member"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(text)=>ChangeName(text)}
               keyboardType="default"
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Deposit Amount"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(text)=>changeDeposit(text)}
               keyboardType = "numeric"
               />
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Number of Meals"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(text)=>changeDeposit(text)}
               keyboardType = "decimal-pad"
               />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => insertItem()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
  )
}



const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})