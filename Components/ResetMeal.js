import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

export default function ResetMeal() {
  const [resetDb,setResetDb] = useState(1);

  const EmptyDb = async() =>{
    try {
      await AsyncStorage.removeItem("mealInfo");
      await AsyncStorage.removeItem('mealCost');
    } catch(e) {
      console.log("Error while resetting DB: "+e);
    }
 }

  useEffect(()=>{
    EmptyDb()
    .then(setResetDb(-1))
    .catch(()=>console.log("No Error"))
  },[])
  return (
    <Text style={{flex:1,textAlign:'center',color:'red',fontSize:25,marginTop:'50%'}}>
      {resetDb==-1?"Reset Successful":"Reset to be pending"}
    </Text>
  )
}
