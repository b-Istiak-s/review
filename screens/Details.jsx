import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App({route,navigation}) {
  return (
    <View style={styles.container}>
    <Text>Title : {route.params.title}</Text>
    <Text>rating : {route.params.rating}</Text>
    <Text>body : {route.params.body}</Text>
    <Image source={require('../assets/rating-2.png')}/>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});