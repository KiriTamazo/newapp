import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const ChatStories = () => {
  const avatarList = [
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
  ];
  return (
    <ScrollView
      horizontal={true}
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      className="gap-4">
      {avatarList.map(({name}, i) => (
        <View
          key={i}
          className="items-center self-start justify-center flex-1 gap-2 ">
          <Image
            className="w-14 h-14 "
            source={require('../../assets/avatar.png')}
          />
          <Text>{name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ChatStories;
