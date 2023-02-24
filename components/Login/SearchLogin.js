import { View, Text , StyleSheet , TextInput } from "react-native";
import React, { useState } from "react";

const SearchLogin = () => {


    const [email , setEmail] = useState("");

    const handleEmailChange = (email) => {
        setEmail(email);
      }


  return (
    <View style ={styles.contenu}>
      <TextInput
        onChangeText={handleEmailChange}
        placeholder="Entrez votre nom"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Entrez votre traitement"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Entrez votre adresse"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({

    contenu:{

        marginTop:20,

    },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal:20,
    marginHorizontal:40,
  }
});

export default SearchLogin;
