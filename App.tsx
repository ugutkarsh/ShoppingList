/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, ScrollView} from 'react-native';
import Header from './src/components/Header';
import AddItem, {IItem} from './src/components/AddItem';
import Item from './src/components/Item';
const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <ScrollView style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({item}) => (
            <Item item={item.item} quantity={item.quantity} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentWrapper: {
    padding: 20,
  },                
});
export default App;