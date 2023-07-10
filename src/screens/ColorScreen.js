import React , {useState }from "react";
import { Text, StyleSheet, View,Button,FlatList } from "react-native";

const ColorScreen =()=>{
 const [color, setColor] = useState([])

  return (<View>
    <Button title="Add a color" onPress={()=>{
     setColor([...color, randomRgb() ] );
    }}/>
    
<FlatList 
keyExtractor={item=>item}
  data={color} 
  renderItem={({ item })=>{ return <View style={{ height: 100, width: 100, backgroundColor: item}}/>}}/>
  </View>
  )};

const randomRgb =() =>{
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return`rgb( ${red}, ${green}, ${blue} )`
}
const styles = StyleSheet.create({

});
export default ColorScreen;