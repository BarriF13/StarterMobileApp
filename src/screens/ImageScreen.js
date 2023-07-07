import React from 'react';
import { Text, StyleSheet,View,Button, TouchableOpacity} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ()=>{
return (<View>
  
<ImageDetail title="beach" score="9" source={require('../../assets/beach.jpg')}/>
<ImageDetail title="forest" score="5" source={require('../../assets/forest.jpg')}/>
<ImageDetail title="mountain" score="7" source={require('../../assets/mountain.jpg')}/>

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