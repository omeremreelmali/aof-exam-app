import React, { Component } from 'react';
import { View, Text,TextInput } from 'react-native';
import SearchBar from 'react-native-search-bar';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TextInput
        ref="searchBar"
        placeholder="Search"
        //onChangeText={...}
        //onSearchButtonPress={...}
        //onCancelButtonPress={...}
        />
      </View>
    );
  }
}

export default Search;