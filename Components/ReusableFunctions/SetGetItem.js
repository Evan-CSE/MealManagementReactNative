import AsyncStorage from "@react-native-async-storage/async-storage";

const getItem = async() =>
{
    try{
        let name = await AsyncStorage.getItem("mealInfo");
        return JSON.parse(name);
      }catch(err){
        console.log("Error occured in getItem() = "+err);
      }
}


const setItem = async(item) =>{
    try{
     await AsyncStorage.setItem('mealInfo',JSON.stringify(item));
     console.log("Saved item successfully");
    }catch(err){
     console.log("Error occured in SaveItem function = "+err);
    }
 }


const setCost = async (value) =>{
    try{
        await AsyncStorage.setItem('mealCost',JSON.stringify(value));
        console.log("Cost Updated successfully");
       }catch(err){
        console.log("Error occured in setCost function = "+err);
       }
}


const getCost = async() =>
{
    try{
        let name = await AsyncStorage.getItem("mealCost");
        return name;
      }catch(err){
        console.log("Error occured in getCost = "+err);
      }
}



export {getItem,setItem,setCost,getCost}