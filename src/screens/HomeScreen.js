import React from 'react';
import { Text, StyleSheet,View,Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);
  return <View>
    <Text style={styles.text}>Hi there</Text>
  <Button style={styles.button} onPress={()=>navigation.navigate("Components")}
  title="Go to Components Demo"/>
  <Button style={styles.button} onPress={()=>navigation.navigate("List")}
  title="Go to List Demo"/>
  <Button style={styles.button} onPress={()=>navigation.navigate("ImageScreen")}
  title="Go to Image screen"/>
  <Button style={styles.button} onPress={()=>navigation.navigate("Counter")}
  title="Go to Counter screen"/>
  <Button style={styles.button} onPress={()=>navigation.navigate("Color")}
  title="Go to Color screen"/>
  <Button style={styles.button} onPress={()=>navigation.navigate("SquareScreen")}
  title="Go to Square screen"/>
  <Button style={styles.button} onPress={()=>navigation.navigate("Text")}
  title="Go to Text screen"/>

  {/* <TouchableOpacity onPress={()=>navigation.navigate("List")}>
    <Text>Go to List Demo</Text>
  </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button:{
    backgroundColor:"blue",
    color: "white",

  }
});

export default HomeScreen;
