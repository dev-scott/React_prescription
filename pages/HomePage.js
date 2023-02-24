import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";
import Header from "../components/Header";
import SearchBar from "../components/Search";
import TextSection from "../components/TextSection";
import TextSection2 from "../components/TextSection2";
import MyModal from "../components/MyModal";

import cardData from "../data/data";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profil from "./Profil";

const HomePage = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen options={{headerShown:false}} name="Home" component={HomeContent} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

const HomeContent = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };


  
  return (
    <View style={{ marginTop: 12 }}>
      <Header title="Welcom to header" />
      <TextSection navigation={navigation} />
      <SearchBar />
      <ScrollView
        style={[styles.scroll]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Card onPress={openModal} backgroundColor="#BCE784" />
        <Card onPress={openModal} backgroundColor="#348AA7" />
        <Card onPress={openModal} backgroundColor="#525174" />
        <Card onPress={openModal} backgroundColor="#96C0B7" />
      </ScrollView>
      <TextSection2 />

      <MyModal isModalVisible={isModalVisible} closeModal={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold"
  },
  scroll: {
    marginHorizontal: 10
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  }

  // overlay:{

  //   flex:1,
  //   backgroundColor:"rgba(0,0,0,0.5)",

  // },
});

export default HomePage;
