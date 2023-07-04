import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen =()=>{
  const products =[
    { name: "Product #1"},
    { name: "Product #2"},
    { name: "Product #33"},
    { name: "Product #4"},
    { name: "Product #5"},
  ];

  return( 
  <FlatList
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={(product)=> product.name}
  data={products}
  
  renderItem={({ item })=>{
    return <Text style={styles.textStyle} >{item.name}</Text>
  }}/>
  )};
   {/*renderItem={(element)=>{}}>
    element === {item:{ name: "Product #1"}, index:0}  */}
  

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;