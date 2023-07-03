import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const App = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text style={isDark ? styles.whiteText : styles.darkText}>
        Hello World!
      </Text>
      <Text style={isDark ? styles.darkText : styles.whiteText}>
        Hello World!
      </Text>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export default App;
