import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCart</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.violet]}>
          <Text>Violet</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    gap: 2,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    padding: 20,
    margin: 8,
  },
  blue: {
    backgroundColor: 'skyblue',
  },
  red: {
    backgroundColor: 'red',
  },
  violet: {
    backgroundColor: 'blueviolet',
  },
});
export default FlatCard;
