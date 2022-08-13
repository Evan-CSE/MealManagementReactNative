import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { getCost, setCost } from './ReusableFunctions/SetGetItem';

export default function AddCost() {
  const [newcost,setNewCost] = useState(0);
  const [tillNowCost,setTillNowCost] = useState(0);


  const handleSubmit = async() =>{
    await getCost()
    .then(value=>{
      let tmp = 0;
      if(!isNaN(value))tmp+=parseInt(value);
      console.log(tmp);
      tmp+=(newcost);
      console.log(tmp,newcost);
      setCost(tmp);
      alert("Cost until now: "+tmp)
    }).catch(()=>console.log('inside AddCost useEffect'));
  }

  useEffect(()=>{
    getCost()
    .then(value=>{
      setTillNowCost(parseInt(value));
    })
  },[newcost,tillNowCost])
  return (
    <>
    <Text style={{textAlign:'center',fontSize:20,color:'blue'}}>
      Total Cost until now: {tillNowCost} tk
    </Text>
      <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Add Today's Cost"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(text)=>setNewCost(parseInt(text))}
                keyboardType='decimal-pad'
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