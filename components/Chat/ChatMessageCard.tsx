import {View, Text, Image} from 'react-native';
import React from 'react';

const ChatMessageCard = () => {
  return (
    <View className="border-b border-b-slate-100 py-4 flex-row justify-between items-center mx-6">
      <View className="flex-row gap-4">
        <Image
          source={require('../../assets/avatar.png')}
          className="w-14 h-14"
        />

        <View>
          <Text className="text-lg font-semibold">Alex Alaxender</Text>
          <Text className="text-blue-500 text-xs mt-1 font-medium">
            Wanna go outside Today?
          </Text>
        </View>
      </View>
      <View className="gap-1">
        <Text className="uppercase text-xs">2min ago</Text>
        <Text className="rounded-full bg-blue-500  text-center  text-white self-end w-5 h-5  ">
          2
        </Text>
      </View>
    </View>
  );
};

export default ChatMessageCard;
