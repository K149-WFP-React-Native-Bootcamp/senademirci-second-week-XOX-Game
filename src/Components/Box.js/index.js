
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, onPress,View } from 'react-native';


const Box = ({ onPress, value, highlighted }) => {


  return (
    <View style={{backgroundColor:highlighted ? "lightgreen": null}}  >
      <TouchableOpacity style={styles.button} onPress={onPress}  >
        <Text style={styles.text} >{value}</Text>
    
    </TouchableOpacity>

    </View>
    







  );

}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({

  button: {
    flex: 1,

    // alignItems: "center",

    padding:"9%",
    width: width * 0.3,
    
    maxHeight: height * 0.8,
    // minHeight: height * 0.1,
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "3%",
    borderRadius: 50,
    // margin: "1%",
    borderWidth: 1,
    borderColor: "#9E9E9E",


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    
  },
  text: {
    color: "#ccd4ac",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    // lineHeight:"100",

  }


});

export default Box;