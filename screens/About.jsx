import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/GlobalStyles';


export default function About({ navigation }) {
  
  return (
    <View styles={styles.item}>
        <Text>Hello World</Text>
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