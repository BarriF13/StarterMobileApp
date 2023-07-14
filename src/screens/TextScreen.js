import React , {useState}from "react";
import { Text, StyleSheet, View,TextInput } from "react-native";

const TextScreen =()=>{
  
  const [value, onChangeText] = useState('');

  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        editable
        multiline
        numberOfLines={2}
        maxLength={20}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
          {/* <Text>My Name is {value}</Text> */}
          {value.length < 4 ? <Text>That is not enough </Text>:{value}}
    </View>
  )
};
const styles = StyleSheet.create({
input:{
  margin: 15,
  borderColor: 'black',
  borderWidth: 1,
  padding: 5,
}
});
export default TextScreen;