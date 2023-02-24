import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Card = ({ onPress , backgroundColor}) => {
  return (
    <View style={ [ styles.card , {backgroundColor}  ] }>
      <View style={styles.headers}>
        <View style={styles.crayon}>
          <Entypo name="pencil" size={24} color="black" />
        </View>
        <View style={styles.texts}>
          <Text style={styles.title}>Write Prescription</Text>
          <Text>to patient</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>TEMPLATE</Text>
        <View style={styles.footer_icon}>
          <TouchableOpacity onPress={onPress}>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  headers: {
    width: "100%",
    height: "70%",
    // backgroundColor: "yellow",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  title: {
    fontSize: 20
  },
  footer: {
    width: "100%",
    height: "30%",
    // backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  footer_text: {},
  footer_icon: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  crayon: {
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Card;
