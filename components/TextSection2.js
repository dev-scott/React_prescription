import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const TextSection2 = () => {
  return (
    <View style={styles.contain_all}>
      <Text style={styles.txt2}>Patient statistics</Text>
      <View style={styles.contain_text}>
        <View style={[styles.left, styles.left1]}>
          <View style={styles.text_contain}>
            <Text style={[styles.textP, styles.text1]}> 12</Text>
            <View style={styles.vuS}>
              <AntDesign name="arrowdown" size={12} color="black" />
              <Text style={styles.textS}>
                11% <Text style={styles.epaisse}>week</Text>
              </Text>
            </View>
          </View>
          <Text>Patient appointments</Text>
        </View>
        <View style={[styles.left, styles.left2]}>
          <View style={styles.text_contain}>
            <Text style={styles.textP}>24</Text>
            <View style={styles.vuSe}>
              <Foundation name="graph-bar" size={24} color="black" />
            </View>
          </View>
          <Text>Insurance patients</Text>
        </View>
      </View>
    </View>
  );
};  

const styles = StyleSheet.create({
  contain_text: {
    backgroundColor: "#fff",
    width: "100%",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },

  textP: {
    fontSize: 45
  },
  vuS: {
    backgroundColor: "#D4DFC7",
    borderRadius: 10,
    marginTop: 16,
    marginLeft: 10,
    width: 90,
    paddingHorizontal: 10,
    paddingVertical: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  vuSe: {
    backgroundColor: "#F7FFF6",
    borderRadius: 10,
    marginTop: 16,
    marginLeft: 10,
    width: 90,
    paddingHorizontal: 10,
    paddingVertical: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  textS: {
    fontWeight: "bold"
  },
  text1: {
    // marginRight:30,
  },
  epaisse: {
    opacity: 0.5
  },
  text_contain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  left: {
    flexDirection: "column"
  },
  left2:{

    marginLeft:35,

  },
  left1: {
    alignItems: "flex-start"
  },

  txt2: {
    marginLeft: 20
  },

  contain_all: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  }
});

export default TextSection2;
