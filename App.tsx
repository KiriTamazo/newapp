import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ChatBottomBar from './components/Chat/ChatBottomBar';
import ChatCard from './components/Chat/ChatCard';
import ChatHeader from './components/Chat/ChatHeader';

const App = () => {
  return (
    <SafeAreaView>
      <View className="h-screen">
        <ChatHeader />
        <ChatCard />
        <ChatBottomBar />
      </View>
    </SafeAreaView>
  );
};

export default App;
