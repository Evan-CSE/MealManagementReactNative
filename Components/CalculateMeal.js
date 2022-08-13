import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { getCost, getItem, setCost, setItem } from './ReusableFunctions/SetGetItem';

export default function CalculateMeal() {
  const [load,setLoad] = useState(false);
  const [allMembers,setAllMembers] = useState([]);
  const [mealRate,setMealRate] = useState(0.0);
  const [totalCost,setTotalCost] = useState(0);


  useEffect(()=>{
    getItem()
    .then((item)=>{
      console.log(item+" line 15");
      setAllMembers(item);
      getCost()
      .then(item2=>{
        setTotalCost(parseInt(item2))
        console.log(item2+"line 20")
      })
    })
    .then(()=>{
      let ml=0.0;
      for(let i=0;i<allMembers.length;i++)
      {
        ml+=parseFloat(allMembers[i]["meal"]);
      }
      setMealRate(totalCost/ml);
      console.log(totalCost,ml);
    }).catch(e=>console.log("On Calculate Meal ; line 29 "+e));
  },[load,totalCost,mealRate,allMembers])
  return (
    <ScrollView>
      {allMembers===null || allMembers.length==0?<Text style={{textAlign:'center',fontSize:20,color:'blue',marginTop:'50%'}}>
        Please Wait some couple of seconds
      </Text>:
      <View>
          <Text style={{fontSize:22,textAlign:'center',color:'blue'}}>
            Meal Rate:{mealRate} tk
          </Text>
        {
          allMembers.map((item,index)=><View key={index} style={{borderColor:'tomato',borderBottomWidth:1,borderTopWidth:1}}>
            <Text style={{fontSize:15}}>
              Name: {item["name"]}
            </Text>
            <Text style={{fontSize:15}}>
              Meal: {item["meal"]}
            </Text>
            <Text style={{fontSize:15}}>
              Deposit: {item["deposit"]}
            </Text>
            <Text style={{fontSize:15}}>
              Amount to be received: {parseInt(item["deposit"])-(parseFloat(item["meal"])*parseFloat(mealRate))}
            </Text>
          </View>)
        }
      </View>
      }
    </ScrollView>
  )
}
