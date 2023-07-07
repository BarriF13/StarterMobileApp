import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail =({title, score, source})=>{

  return <View>
    <Image source={source}/>
    <Text>{title}</Text>
    <Text>Image score - {score}</Text>
  </View>
};
const styles = StyleSheet.create({

});
export default ImageDetail;