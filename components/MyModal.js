import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Animated } from 'react-native';


const MyModal = ({ isModalVisible, closeModal }) => {

  const [showFirstForm , setShowFirstForm] = React.useState(false);

  const [slideAnimation] = React.useState(new Animated.Value(0));



  return (
    <Modal
      style={styles.overlay}
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
    >
      <View style={styles.centeredView} onPress={closeModal}>
        {/* <View style={styles.modalView}>
          <Text style={styles.modalText}>Modal Content</Text>
          <Button title="Close Modal" onPress={closeModal} />
        </View> */}
        <View style={styles.modalView}>
          <LottieView
            style={{ width: 200, height: 200, backgroundColor: "#fff" }}
            source={require("../assets/doctor.json")}
            autoPlay
            loop
          />

          <TouchableOpacity style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>

          <View>
            <Text>Entrez les informations de la prescription</Text>
          </View>
          {showFirstForm ? (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Nom"
      placeholderTextColor="#000"
    />
    <TextInput
      style={styles.input}
      placeholder="Prénom"
      placeholderTextColor="#000"
    />
    <TextInput
      style={styles.input}
      placeholder="Date de naissance"
      placeholderTextColor="#000"
    />
    <TextInput
      style={styles.input}
      placeholder="Adresse"
      placeholderTextColor="#000"
    />

    <Pressable
      style={styles.buttonAdd}
      onPress={() => setShowFirstForm(false)}
    >
      <Text style={styles.textAdd}>Suivant</Text>
    </Pressable>
  </View>
) : (
  <View style={styles.inputContainer2} >
    <Text>Autres informations</Text>
    <TextInput
      style={styles.input2}
      placeholder="Information 1"
      placeholderTextColor="#000"
    />
    <TextInput
      style={styles.input2}
      placeholder="Information 2"
      placeholderTextColor="#000"
    />

    <Pressable
      style={styles.buttonAdd}
      onPress={() => setShowFirstForm(true)}
    >
      <Text style={styles.textAdd}>Ajouter</Text>
    </Pressable>
  </View>
)}


          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonAdd: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: "100%",
    // marginLeft:39,
    marginTop: 5,
    marginBottom: 5
  },
  textAdd: {
    fontSize: 10,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white"
  },
  inputContainer: {
    height: "100%",
    width: "100%",
    marginTop: 10
  },
  input: {
    // height: 50,
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
    paddingHorizontal: 15,
    color: "#000",
    marginBottom: 5,
    borderColor: "#ccc",
    borderWidth: 1
  },
  input2:{
    // height: 50,
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
    paddingHorizontal: 15,
    color: "#000",
    marginBottom: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 5,
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
    width: "100%"
  },
  modalView: {
    position: "relative",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    height: 468,
    width: "70%",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  button: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    position: "absolute",
    top: "2%",
    right: "10%"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },

  inputContainer2:{

    width:'100%',
    paddingVertical:15,

    // transform: [{ translateX: slideAnimation }],

  }
});

export default MyModal;
