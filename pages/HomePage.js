import React, { useContext, useState } from "react";
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
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from "../contexts/ThemeContext";
import SearchScreen from "./Search";


const HomePage = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator headerMode="none"
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profil') {
          iconName = focused ? 'person' : 'person-outline';
        }
        else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        }
        else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#007AFF',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      tabStyle: {
        // backgroundColor: '#F4F4F4',
      },
    }}
    
    
    
    >
      <Tab.Screen options={{headerShown:false}} name="Home" component={HomeContent} />
      <Tab.Screen name="Profil" component={Profil} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};


const styles = (isDarkMode)=>  ({
  container: {
    backgroundColor: isDarkMode ? '#273E47' :"#F8F8F8",
    flex: 1,
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



const HomeContent = ({ navigation }) => {


  const { isDarkMode, toggleDarkMode } =  useContext(ThemeContext);

  const {container, text , scroll , modal } = styles(isDarkMode)


  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };


  
  return (
    <View  style={[ container,  { marginTop: 12 }]}>
      <Header title="Welcom to header" />
      <TextSection navigation={navigation} />
      <SearchBar />
      <ScrollView
        style={[scroll]}
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


export default HomePage;
