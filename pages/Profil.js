import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Profil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={require('../assets/me.png')} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Sado Scott</Text>
          <Text style={styles.info}>Développeur Front-End</Text>
          <TouchableOpacity style={styles.editButton}>
            <AntDesign name="edit" size={20} color="#fff" />
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <Text style={styles.sectionTitle}>Informations de contact</Text>
          <View style={styles.contactContainer}>
            <AntDesign name="mail" size={24} color="#999" />
            <Text style={styles.contact}>sado@gmail.com</Text>
          </View>
          <View style={styles.contactContainer}>
            <AntDesign name="phone" size={24} color="#999" />
            <Text style={styles.contact}>654345656</Text>
          </View>
          <View style={styles.contactContainer}>
            <AntDesign name="enviromento" size={24} color="#999" />
            <Text style={styles.contact}>Douala </Text>
          </View>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#77aaff',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    marginTop: -60,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    color: '#333',
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'center',
  },
  info: {
    fontSize: 18,
    color: '#999',
    marginTop: 5,
    alignSelf: 'center',
  },
  body: {
    marginTop: 0,
    paddingHorizontal: 20,
  },
  bodyContent: {
    paddingVertical: 10,
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#333',
    fontWeight: '600',
    marginBottom: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
marginVertical: 5,
},
contact: {
fontSize: 16,
color: '#333',
marginLeft: 10,
},
logoutButton: {
backgroundColor: '#333',
borderWidth: 1,
borderColor: '#333',
padding: 10,
borderRadius: 5,
marginTop: 30,
alignSelf: 'center',
},
logoutButtonText: {
color: '#fff',
fontSize: 16,
fontWeight: '600',
},
});

export default Profil;
