import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { getItem, setItem } from './ReusableFunctions/SetGetItem';

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



  const insertItem = async() =>{
    let mealCount= parseFloat(meal),depositAmount=  parseInt(deposit);
    console.log(mealCount,typeof(mealCount));
    // console.log(name,typeof(meal),typeof(deposit));
    if(name.length==0){
      alert("Fill out all the fields properly");
      return;
    }
    getItem()
    .then(item=>{
      // console.log("insertion: ");
      // console.log(item);
      if(item===null)item = [];
      item.push({name:name,meal:meal,deposit:deposit})
      setAllMembers(item);
      setItem(item);
      console.log(item);
      alert("Member added Successfully");
    })
    .catch(function () {
      console.log("Promise Rejected");
 });
  }

  useEffect(()=>{
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
               onChangeText = {(text)=>changeMealCount(text)}
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