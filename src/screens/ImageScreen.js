import React from 'react';
import { Text, StyleSheet,View,Button, TouchableOpacity} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ()=>{
return (<View>
  
<ImageDetail title="cat"/>
<ImageDetail title="horse"/>
<ImageDetail title="owl"/>

</View>)
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

export default ImageScreen;