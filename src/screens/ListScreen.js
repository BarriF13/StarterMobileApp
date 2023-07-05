import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen =()=>{
  const products =[
    { name: "Product #1" , age: 20},
    { name: "Product #2" , age: 23},
    { name: "Product #33" , age: 25},
    { name: "Product #4", age: 24},
    { name: "Product #5" , age: 34},
  ];

  return( 
  <FlatList
  showsHorizontalScrollIndicator={false}
  keyExtractor={(product)=> product.name}
  data={products}
  
  renderItem={({ item })=>{
    return <Text style={styles.textStyle} >
      {item.name}-- ID={item.age}</Text>
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