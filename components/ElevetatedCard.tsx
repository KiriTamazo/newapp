import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevetatedCard = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>ElevetatedCard</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
          <View style={[styles.card, styles.violet]}>
            <Text>Violet</Text>
          </View>
          <View style={[styles.card, styles.violet]}>
            <Text>Violet</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    gap: 2,
    paddingHorizontal: 4,
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
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
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
export default ElevetatedCard;
