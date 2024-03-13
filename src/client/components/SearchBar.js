import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { getGoods } from '../services/goodsServices'; 

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const goodsData = await getGoods(); 
      if (goodsData) {
        const filteredGoods = goodsData.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.qrCode.toLowerCase().includes(searchQuery.toLowerCase())
        );
        onSearch(filteredGoods);
      }
    } catch (error) {
      console.error('Error fetching goods data:', error);
    }
  };

  return (
    <Searchbar
      placeholder="QRCode/Nome do bem"
      onChangeText={(query) => setSearchQuery(query)}
      value={searchQuery}
      onSubmitEditing={handleSearch}
    />
  );
};

export default SearchBar;
