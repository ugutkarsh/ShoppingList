/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IItem,} from './AddItem';
import props from "./AddItem";
const Item: React.FC<IItem> = ({item, quantity}) => {
  return (
    <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.itemName}>{item}</Text>
      <Text style={styles.quantity}>x{quantity}</Text>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },
  itemName: {
    fontWeight: '800',
    color: 'white',
  },
  quantity: {
    padding: 6,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    color: 'white',
  },
});
export default Item;
