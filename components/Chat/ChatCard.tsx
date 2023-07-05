import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ChatStories from './ChatStories';
import ChatMessageCard from './ChatMessageCard';

const ChatCard = () => {
  const chatList = [
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
    {
      name: 'Alex Alexander',
      message: 'Wanna go outside Today?',
      badge: '2',
      time: '2min ago',
    },
  ];
  return (
    <View className="grow bg-blue-50/50 flex-1">
      <ScrollView className="flex flex-1 grow">
        <View className="my-4 bg-slate-100 mx-1 py-4 rounded px-3">
          <Text className="text-xl mb-3 font-semibold text-slate-900/50">
            Stories
          </Text>

          <ChatStories image={'../../assets/avatar.png'} name="Alex" />
        </View>
        <ScrollView>
          {chatList.map((chat, i) => (
            <ChatMessageCard key={i} chat={chat} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default ChatCard;
