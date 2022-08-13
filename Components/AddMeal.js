import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { getItem, setItem } from './ReusableFunctions/SetGetItem';

export default function AddMeal() {
  const [allMembers,setAllMembers] = useState([]);
  const [meal,setMeal] = useState(0);
  const [load,setLoad] = useState(false);
  const [firstTime,setFirstTime] = useState(0);

  
  const handleSubmit = (name) =>{
    const newObj = {};
    for(let i=0;i<allMembers.length;i++)
    {
      if(allMembers[i]["name"]===name){
        allMembers[i]["meal"] = parseFloat(allMembers[i]["meal"]);
        allMembers[i]["meal"]+=parseFloat(meal);
        alert("Meal updated to "+allMembers[i]["meal"]+" for member "+allMembers[i]["name"]);
        setFirstTime(firstTime+1);
        setLoad(!load);
      }
    }
    setMeal(0);
  }

  const FinaliseMeal = () =>{
    setItem(allMembers)
    .then(()=>alert("Meal Updated Successfully!"))
    .catch(e=>console.log("Finalised "+e));
  }

  useEffect(()=>{
    if(firstTime===0){
      getItem()
      .then(item=>setAllMembers(item))
      .catch(()=>console.log("Promise Rejected in AddMeal"));
    }
    else{
      setAllMembers(allMembers);
    }
  },[load,meal])
  return (
    <View style={{flex:1,backgroundColor:'whitesmoke'}} >
      {allMembers==null || allMembers.length==0?<Text style={{textAlign:'center',fontSize:20,color:'blue',marginTop:'50%'}}>Items loading or items don't exist</Text>:
      <ScrollView>
        {allMembers.map((item,index)=><View key={index}>
          <Text style={{fontSize:25}}>Name: {item["name"]}</Text>
          <Text style={{fontSize:25}}>Total Meal: {item["meal"]}</Text>
          <Text style={{fontSize:25}}>Deposit Amount: {item["deposit"]}</Text>
          <TextInput 
          keyboardType='decimal-pad'
          placeholder="Enter today's meal"
          style={{margin: 15,
            height: 40,
            borderColor: '#7a42f4',
            borderWidth: 1}}
            onChangeText = {(text)=>setMeal(parseFloat(text))}
          />
          <TouchableOpacity
               style = {{backgroundColor: '#7a42f4',
               padding: 10,
               margin: 15,
               height: 40,}}
               onPress = {
                  () => handleSubmit(item["name"])
               }>
               <Text style = {{ color: 'white'}}> Submit </Text>
            </TouchableOpacity>
          </View>)}
          <TouchableOpacity
               style = {{backgroundColor: 'seagreen',
               padding: 10,
               margin: 15,
               height: 40,}}
               onPress = {
                  () => FinaliseMeal()
               }>
               <Text style = {{ color: 'white',textAlign:'center'}}> Finalise Meal Record</Text>
            </TouchableOpacity>  
      </ScrollView>
      }
    </View>
  )
}
