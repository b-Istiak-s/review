import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import About from '../screens/About';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
  <NavigationContainer>
      <Drawer.Navigator >
        {/* headerShown is true by default */}
        <Drawer.Screen name="Home" component={StackNavigator} options={{ headerShown: true }}/>
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function StackNavigator() {
  return (
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={Home} options={{
                                                            title: 'My home',
                                                            headerStyle: {
                                                              backgroundColor: '#f4511e',
                                                            },
                                                            headerTintColor: '#fff',
                                                            headerTitleStyle: {
                                                              fontWeight: 'bold',
                                                            },
                                                          }}/>
        <Stack.Screen name="Details" component={Details} options={{
                                                              title: 'Details',
                                                              headerStyle: {
                                                                backgroundColor: '#f4511e',
                                                              },
                                                              headerTintColor: '#fff',
                                                              headerTitleStyle: {
                                                                fontWeight: 'bold',
                                                              },
                                                            }}/>
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default DrawerNavigator;
