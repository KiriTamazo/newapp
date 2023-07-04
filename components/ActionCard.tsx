import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What is new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          resizeMode="center"
          source={{
            uri: 'https://loremflickr.com/cache/resized/65535_52735190932_736fef85e7_320_240_nofilter.jpg',
          }}
        />
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
            <Text>Read More</Text>
          </TouchableOpacity>
          <Text numberOfLines={2}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            tempore dicta quod atque unde ut nisi minus nobis temporibus
            repudiandae?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  card: {
    width: 350,
    height: 350,
    borderRadius: 8,
    marginVertically: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#fff',
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  body: {},
});
