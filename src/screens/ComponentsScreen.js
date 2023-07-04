import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting="Loca";
  const array = ["ass", 123]
  const greetMe = <Text>mana mana doodoodoodoo</Text>

  return  <View>
      <Text style={styles.textStyle}>Getting started with REACT NATIVE</Text>
      <Text style={styles.zapataStyle}>My name is {greeting} </Text>
     
    </View>
  
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  zapataStyle: {
    fontSize: 20,
  }
});

export default ComponentsScreen;
