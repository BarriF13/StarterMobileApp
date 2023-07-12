import React , { useReducer }from "react";
import { Text, StyleSheet, View,Button } from "react-native";

const reducer = (state, action)=> {
  //state ={counter}
  //action { type: "change_counter" , payload:1}
  switch (action.type) {
    case "increase_counter":
      return {...state, count: state.count + action.payload};
    case "decrease_counter":
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
  };
const CounterScreen =()=>{
//  const [counter, setCounter] = useState(0)

const [state, dispatch] = useReducer(reducer, { count: 0 });
console.log(state)
  return (<View>
    <Button 
    title="Increase" 
    onPress={()=>{
      dispatch({type: "increase_counter", payload: 1})}
      }/>
    <Button 
    title="Decrease" 
    onPress={()=>{
    dispatch({type: "decrease_counter", payload: 1})}
    }/>
    <Text>Current Count:{state.count}</Text>
  </View>)
};
const styles = StyleSheet.create({

});
export default CounterScreen;