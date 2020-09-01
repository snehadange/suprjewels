import React from 'react';
import { View, StatusBar, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer} from '@react-navigation/native';



import Home from './src/Screens/Home';
import PendingOrder from './src/Screens/Pending_Order'
import CompletedOrder from  './src/Screens/Completed_Order'
import AddCustomer from './src/Screens/AddCustomer';
import SelectCustomer from './src/Screens/SelectCustomer';

const Stack = createStackNavigator()





function StackScreen() {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="PendingOrder" component={PendingOrder}/>
      <Stack.Screen name="CompletedOrder" component={CompletedOrder}/>
      <Stack.Screen name="AddCustomer" component={AddCustomer}/>
      <Stack.Screen name="SelectCustomer" component={SelectCustomer}/>
    </Stack.Navigator>

  );
}





export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}



