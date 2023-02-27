import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import {ThemeContext} from "../contexts/ThemeContext";


const styles = (isDarkMode)=>  ({
  contain_text: {
    backgroundColor: isDarkMode ? "#326273": "#fff",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },

  textP: {
    fontSize: 45,
    color: isDarkMode ? "#fff" : "#000",
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
    borderRadius:12,
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
    fontWeight: "bold",
    color: isDarkMode ? "#fff" : "#000",
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
    marginLeft: 20,
    color: isDarkMode ? "#fff" : "#000",
  },

  contain_all: {
    marginTop: 10,
    backgroundColor: isDarkMode ? "#326273" :"#fff",
    paddingVertical: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  text01:{
    color: isDarkMode ? "#fff" : "#000",
  }
});


const TextSection2 = () => {

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const { contain_all,txt2,left1,left2,left,text1,textP,textS,epaisse,vuS,vuSe,text_contain,patient ,contain_text , text01 } = styles(isDarkMode);


  return (
    <View style={contain_all}>
      <Text style={txt2}>Patient statistics</Text>
      <View style={contain_text}>
        <View style={[left, left1]}>
          <View style={text_contain}>
            <Text style={[textP, text1]}> 12</Text>
            <View style={vuS}>
              <AntDesign name="arrowdown" size={12} color="black" />
              <Text style={textS}>
                11% <Text style={epaisse}>week</Text>
              </Text>
            </View>
          </View>
          <Text style={text01}>Patient appointments</Text>
        </View>
        <View style={[left, left2]}>
          <View style={text_contain}>
            <Text style={textP}>24</Text>
            <View style={vuSe}>
              <Foundation name="graph-bar" size={24} color="black" />
            </View>
          </View>
          <Text style={text01}>Insurance patients</Text>
        </View>
      </View>
    </View>
  );
};  



export default TextSection2;
