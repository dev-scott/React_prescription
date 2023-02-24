import { View, Text, Pressable , StyleSheet } from "react-native";
import React from "react";

const MonButton = () => {
  return (
  <Pressable style={styles.button} >
    <Text style={styles.text}>
      Ajouter
    </Text>
  </Pressable>
  );
};

const styles = StyleSheet.create({

  button:{

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width:280,
    marginLeft:39,
    marginTop:5

  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

  }


})


export default MonButton;
