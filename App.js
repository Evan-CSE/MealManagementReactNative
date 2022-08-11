import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import AddMeal from './Components/AddMeal';
import EditMeal from './Components/EditMeal';
import AddMealMember from './Components/AddMealMember';
import EditCost from './Components/EditCost';
import AddCost from './Components/AddCost';
import CalculateMeal from './Components/CalculateMeal';
import ResetMeal from './Components/ResetMeal';
import Deposit from './Components/Deposit';

const Stack = createNativeStackNavigator();

export default function App() {
  

    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Satata Meal Management' }}
        />
        <Stack.Screen name="Add Meal" component={AddMeal} />
        <Stack.Screen name="Edit Meal" component={EditMeal} />
        <Stack.Screen name="Add Cost" component={AddCost} />
        <Stack.Screen name="Add Meal Member" component={AddMealMember} />
        <Stack.Screen name="Deposit" component={Deposit} />
        <Stack.Screen name="Edit Cost" component={EditCost} />
        <Stack.Screen name="Calculate Meal" component={CalculateMeal} />
        <Stack.Screen name="Reset Meal" component={ResetMeal} />
      </Stack.Navigator>
      </NavigationContainer>
    );
}

