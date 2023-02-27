import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearch = () => {
    // logique de recherche
    const results = []; // remplacer par les résultats réels
    setSearchResults(results);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.resultItem}>
        <Image style={styles.resultItemImage} source={{ uri: item.imageUrl }} />
        <Text style={styles.resultItemTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Rechercher"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Rechercher</Text>
        </TouchableOpacity>
      </View>
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.resultsList}
        />
      ) : (
        <Text style={styles.emptyResultsText}>Aucun résultat trouvé</Text>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      paddingVertical: 5,
      margin: 10,
      borderRadius: 5,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: '#000',
    },
    searchButton: {
      backgroundColor: '#77aaff',
      borderRadius: 5,
      padding: 10,
      marginLeft: 10,
    },
    searchButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    resultsList: {
      paddingHorizontal: 10,
    },
    emptyResultsText: {
      textAlign: 'center',
      fontSize: 18,
      marginTop: 20,
    },
    resultItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginVertical: 5,
      borderRadius: 5,
    },
    resultItemImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    resultItemTitle: {
      fontSize: 16,
      color: '#000',
    },
  });
  


export default SearchScreen;
