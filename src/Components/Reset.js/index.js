
import React from 'react';
import { Text, StyleSheet, TouchableOpacity,Dimensions, onPress} from 'react-native';



const Reset = ({handleReset}) => {


  return (
    <TouchableOpacity style={styles.button} onPress={handleReset}>
      <Text style={styles.text}>RESET</Text>
    </TouchableOpacity>







  );

}
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
const styles = StyleSheet.create({

  button: {
    flex:1,
    
    alignItems: "center",
    backgroundColor: "#1c6264",
    padding: "11%",
    width:width*0.3,
    maxHeight:height*0.12,
    marginLeft:"1%",
    marginRight:"1%",
    marginBottom:"3%",
    borderRadius: 50,
    // margin: "1%",
    borderWidth: 1,
    borderColor:"#9E9E9E",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,


  },
  text:{
    color:"#ccd4ac",
    fontSize: 15,
    fontWeight: "bold"
    
   
  }


});

export default Reset;