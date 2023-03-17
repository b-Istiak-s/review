import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/GlobalStyles';


export default function App({ navigation }) {
  const [reviews,setReviews] = useState([
    {title: 'First review',rating:5, body:'review body data 1',key:'1'},
    {title: 'Second review',rating:4, body:'review body data 2',key:'2'},
    {title: 'Third review',rating:2, body:'review body data 3',key:'3'},
    {title: 'Fourth review',rating:2, body:'review body data 4',key:'4'},
    {title: 'Sixth review',rating:3, body:'review body data 5',key:'5'},
  ]);
  
  return (
    <View styles={styles.item}>
      {/* If an array named "reviews" has a property called "key", the FlatList component will automatically use it 
      as the unique identifier (similar to an ID) for each item. However, if we use a different property, such as "id", 
      we need to explicitly specify it using the KeyExtractor prop like this: KeyExtractor={(item)=>item.id}. e.g. https://github.com/b-Istiak-s/ListView-Button-Add/blob/main/App.js */}
      {/* By using the "numColumns" prop, the FlatList component can be transformed from its default linear layout to a grid layout. */}
      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity 
            onPress={()=>{
              // The process of passing data to the navigation component and instructing it to navigate to the Details screen, 
              // while also sending along some additional parameters.
              navigation.navigate('Details',item);
            }}>
            <Text >{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  titleText:{
      fontSize:100,
      color:'#333',
      fontFamily:'Arial',

  },
  item: {
      backgroundColor: 'pink',
      padding: 5,
      margin: 5,
      fontSize:24,
      alignItems: 'center',
      justifyContent: 'center',
    },
});