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

const MyModal = ({ isModalVisible, closeModal }) => {
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
          <View style={styles.inputContainer}>
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    height: 400,
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
  }
});

export default MyModal;
