import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen =()=>{
  const Box ={};

  return <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child 1</Text>
    <Text style={styles.textTwoStyle}>Child 2</Text>
    <Text style={styles.textThreeStyle}>Child3</Text>
  </View>
};
const styles = StyleSheet.create({
viewStyle:{
  borderWidth:3,
  borderColor:"black",
  height:200,
  alignItems: "center",
},
textOneStyle: {
  borderWidth:2,
  borderColor:"red",
},
textTwoStyle: {
  borderWidth:2,
  borderColor:"red",
position:"absolute",

},
textThreeStyle: {
  borderWidth:2,
  borderColor:"red",
}
});
export default BoxScreen;