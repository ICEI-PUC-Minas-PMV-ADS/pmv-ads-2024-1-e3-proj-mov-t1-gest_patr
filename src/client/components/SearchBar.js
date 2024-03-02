import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="QRCode/Nome do bem"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBar;