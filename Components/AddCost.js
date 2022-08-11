import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { getCost, setCost } from './ReusableFunctions/SetGetItem';

export default function AddCost() {
  const [newcost,setNewCost] = useState(0);



  const handleSubmit = async() =>{
    getCost()
    .then(value=>{
      console.log(typeof(newcost));
      value = typeof(value)===null?0:parseInt(value);
      console.log(value);
      value+=(newcost);
      console.log(value,newcost);
      setCost(value);
      alert("Cost until now: "+value)
    }).catch(()=>console.log('inside AddCost useEffect'));
  }

  useEffect(()=>{
  },[])
  return (
    <>
      <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Add Today's Cost"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(text)=>setNewCost(parseInt(text))}
                keyboardType="default"
      />
      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => handleSubmit()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
    </>
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