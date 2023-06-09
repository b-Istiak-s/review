import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/GlobalStyles';


export default function About() {
  
  return (
    <View styles={styles.header}>
        <View>
            <Text styles={styles.headerText}>Hello World</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  headerText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1
  }
});