import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../assets/bg.jpg')} style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Future City</Text>
          <Text style={styles.cardLabel}>HellaTwist</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quam
            nesciunt dolor commodi eius sunt, ut quaerat animi. Eveniet, nobis.
          </Text>
          <Text style={styles.cardFooter}>5 min away</Text>
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 4,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    color: '#000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000',
    fontSize: 16,
  },
  cardDescription: {
    color: '#333',
    fontSize: 12,
    marginVertical: 6,
    flexShrink: 1,
  },
  cardFooter: {},
});
export default FancyCard;
