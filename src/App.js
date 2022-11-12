
import React from 'react';
import { StyleSheet, Touchable, TouchableOpacity, View, Text, Dimensions } from 'react-native';
// import { VStack,HStack } from 'react-native-flex-layout';

import Board from './Components/Board.js/index.js';
import LinearGradient from 'react-native-linear-gradient';



const App = () => {


  return (
    <LinearGradient colors={['#FFFFFF', '#E7E7E7', '#D1D1D1']} style={styles.linearGradient}>
      <View  >
        <Board />
      </View>

   </LinearGradient>

  );

}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
   
  },

});


export default App;