import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT=15;
const SquareScreen =()=>{
const reducer = (state, action)=>{
//state ==={ red: number, green: number, blue: number}
//action === { colorToChange: "red"|| "green"|| "blue, amountToChange: 15|| -15}

switch(action.colorToChange){
  case "red":
    return state.red + action.amountToChange >255 || state.red + action.amountToChange <0 ? state: {...state, red: state.red + action.amountToChange };
  case "green":
    return state.green + action.amountToChange >255 || state.green + action.amountToChange <0 ? state: {...state, green: state.green + action.amountToChange };
  case "blue":
    return state.blue + action.amountToChange >255 || state.blue + action.amountToChange <0 ? state: {...state, blue: state.blue + action.amountToChange };   default:
    return state;
}
}
//dispatch == runMyReducer

const [state , dispatch] = useReducer(reducer , {red: 0, green: 0, blue: 0});
const {red, green, blue} =state;
console.log(state)
  return( 
  <View>
    <ColorCounter 
    onIncrease={()=>dispatch({colorToChange: "red", amountToChange: COLOR_INCREMENT})}
    onDecrease={()=>dispatch({colorToChange: "red", amountToChange: -1 * COLOR_INCREMENT})} color="Red"/>

    <ColorCounter 
    onIncrease={()=>dispatch({colorToChange: "green", amountToChange: COLOR_INCREMENT})}
    onDecrease={()=>dispatch({colorToChange: "green", amountToChange: -1 * COLOR_INCREMENT})} color="Green"/>

  <ColorCounter 
   onIncrease={()=>dispatch({colorToChange: "blue", amountToChange: COLOR_INCREMENT})}
   onDecrease={()=>dispatch({colorToChange: "blue", amountToChange: -1 * COLOR_INCREMENT})} color="Blue"/>

    <View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
  </View>
)};
const styles = StyleSheet.create({

});

export default SquareScreen;