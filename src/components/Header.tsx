/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {
  title: string;
}
const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
  },
});
export default Header;