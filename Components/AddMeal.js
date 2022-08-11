import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Button, Text, View } from 'react-native'


export default function AddMeal() {
  const saveItem = async() =>{
     try{
      const arr = [
        {
          name:'evan',
          meal:50,
          savings:800
        },
        {
          name:'member',
          meal:70,
          savings:800
        }
      ];
      await AsyncStorage.setItem('mealInfo',JSON.stringify(arr));
     }catch(err){
      console.log(err)
     }
  }
  const getItem = async() =>{
    try{
      let name = await AsyncStorage.getItem("mealInfo");
      console.log(JSON.parse(name))
    }catch(err){
      console.log(err)
    }
  }
  const test = ()=>{
    console.log("testing");
  }
  return (
    <View style={{flex:1,backgroundColor:'dodgerblue'}} >
      <Button
      onPress={()=>saveItem()}
      title={'click to save'}
      />
      <Button
      onPress={()=>getItem()}
      title={'click'}
      />
        <Text >AddMeal</Text>
    </View>
  )
}
