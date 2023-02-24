import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BodyContent = () => {
  return (
    <View style={styles.contain}>
      <Text style={styles.title1}>Entrez vos information</Text>
      <Text style={styles.title2}>Les infos svp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    marginTop: 20,
    width: "100%",
    height: "15%",
    // backgroundColor: "#87D68D",
    justifyContent: "center",
    alignItems: "center"
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#071108",
    marginRight: 100
  },
  title2: {
    marginRight: 220
  }
});

export default BodyContent;
