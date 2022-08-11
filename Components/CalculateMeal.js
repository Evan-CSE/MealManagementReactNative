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
      setAllMembers(item);
      getCost()
      .then(item=>{
        setTotalCost(parseInt(item))
      })
    })
    .then(()=>{
      let ml=0;
      for(let i=0;i<allMembers.length;i++)
      {
        ml+=parseFloat(allMembers[i]["meal"]);
      }
      setMealRate(totalCost/ml);
    }).catch(e=>console.log("On Calculate Meal ; line 26"));
  },[])
  return (
    <ScrollView>
      {allMembers===null || allMembers.length==0?<Text>
        Please Wait some couple of seconds
      </Text>:
      <View>
          <Text>
            Meal Rate:{mealRate}
          </Text>
        {
          allMembers.map((item,index)=><View key={index} style={{alignItems:'center'}}>
            <Text style={{fontSize:25}}>
              Name: {item["name"]}
            </Text>
            <Text style={{fontSize:25}}>
              Meal: {item["meal"]}
            </Text>
            <Text style={{fontSize:25}}>
              Deposit: {item["deposit"]}
            </Text>
            <Text style={{fontSize:25}}>
              Amount to be received: {parseInt(item["deposit"])-(parseFloat(item["deposit"])*parseFloat(mealRate))}
            </Text>
          </View>)
        }
      </View>
      }
    </ScrollView>
  )
}
