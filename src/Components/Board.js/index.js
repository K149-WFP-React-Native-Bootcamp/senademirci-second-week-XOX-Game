
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Touchable, TouchableOpacity, View, Text, Dimensions, onPress, Button } from 'react-native';
// import { VStack,HStack } from 'react-native-flex-layout';
import lines from '../winner';

import Box from '../Box.js/index.js';
import Reset from '../Reset.js/index.js';
import LinearGradient from 'react-native-linear-gradient';


const Board = () => {
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState(null);
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    checkWinner();
    if (turn == "X") {
      setTurn("O")
    } else {
      setTurn("X")
    }
  }, [board]);


  useEffect(() => {
    if (winner != null) {

      alert(` won ${winner}`)
    }

  }, [winner])

  const onPress = (box) => {
    setBoard(board.map((val, idx) => {
      if (idx == box && val == "") {
        return turn;

      };
      return val;


    }));
    // useEffectin içine aldık çünkü kazanan alerti hata veriyordu bir sonraki oyuncuyu gösteriyordu
    // if(turn =="X"){
    //     setTurn("O")
    // }else {
    //     setTurn("X")
    // }
  };



  const handleReset = () => {
    setTurn("X")
    setBoard(Array(9).fill(""));
    setHighlighted([]);
    setWinner(null);



  };
  const checkWinner = () => {
    lines.forEach((line) => {
      const firstplayer = board[line[0]];
      if (firstplayer == "") return;
      let isline = true;
      line.forEach((idx) => {
        if (board[idx] != firstplayer) {
          isline = false;
        }
      })
      if (isline) {
        setWinner(turn);
        setHighlighted(line);


      }
    })
  }

  // backgroundColor="#DCDCDC"
  return (

    <View flexDirection="column" style={styles.container}  >
      <View style={styles.top}>
        <LinearGradient colors={['#ccd4ac', '#E7E7E7', '#FFFFFF']} style={styles.linearGradient} >
          <View style={styles.toplay} >
            <Text style={styles.text}>XOX GAME</Text>
          </View>

        </LinearGradient>
        <LinearGradient colors={['#ccd4ac', '#E7E7E7', '#FFFFFF']} style={styles.linearGradient}>
          <View style={styles.toplay}>
            <Text style={styles.text}>{turn} TO PLAY</Text>
          </View>

        </LinearGradient>

      </View>


      <View flexDirection="row"  >
        <Box value={board[0]} onPress={() => { onPress(0) }} highlighted={highlighted.includes(0)} />
        <Box value={board[1]} onPress={() => { onPress(1) }} highlighted={highlighted.includes(1)} />
        <Box value={board[2]} onPress={() => { onPress(2) }} highlighted={highlighted.includes(2)} />

      </View>
      <View flexDirection="row" >
        <Box value={board[3]} onPress={() => { onPress(3) }} highlighted={highlighted.includes(3)} />
        <Box value={board[4]} onPress={() => { onPress(4) }} highlighted={highlighted.includes(4)} />
        <Box value={board[5]} onPress={() => { onPress(5) }} highlighted={highlighted.includes(5)} />
      </View>
      <View flexDirection="row"  >
        <Box value={board[6]} onPress={() => { onPress(6) }} highlighted={highlighted.includes(6)} />
        <Box value={board[7]} onPress={() => { onPress(7) }} highlighted={highlighted.includes(7)} />
        <Box value={board[8]} onPress={() => { onPress(8) }} highlighted={highlighted.includes(8)} />
      </View>
      <LinearGradient colors={['#FFFFFF', '#E7E7E7', '#ccd4ac']} style={styles.linearGradient}>
        <TouchableOpacity onPress={handleReset} style={styles.reset}>
          <Text style={styles.resettext}>RESET</Text>
        </TouchableOpacity>

      </LinearGradient>




    </View>







  );

}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({

  // top:{
  
    
  //  width:width,
  //  minHeight:height*0.22,
  // //  alignItems:"center"
  // },

  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5,
    // alignItems: "center",
    width: width*0.60 ,
  
    // alignContent: "center",
    maxHeight: height * 0.06,
    margin: 18,


    // justifyContent: "center",
    // backgroundColor: "#ccd4ac",
    borderRadius: 60,
    marginBottom: 12,
  },
  container: {
    alignItems: 'center',
    // justifyContent: 'center',

    flex: 1,
    // justifyContent: "center",
    marginTop: height*0.2,
    // position: 'absolute',
    width: width,
    minHeight: height,
    minWidth:width*0.6,
    
    





  },
  toplay: {
    flex: 1,
    alignItems: "center",
    width: width * 0.6,
    // alignContent: "center",

    // justifyContent: "center",
    // backgroundColor: "#ccd4ac",
    borderRadius: 60,
    marginBottom: 12,


  },

  reset: {
    // justifyContent:"center",
    alignItems: "center",
    flex: 1,
    // backgroundColor: "lightgray",
    width: width * 0.6,
    maxHeight: height * 0.05,
    borderRadius: 60,
    // backgroundColor:"#ccd4ac",
    marginTop: 12,

    // "#AF4749"
  },
  resettext: {
    color: "#B6B6B6",
    fontSize: 22,
    fontWeight: "bold",







  },
  text: {
    fontSize: 30,
    color: "#B6B6B6",
    fontWeight: "bold",








  }

});

export default Board;