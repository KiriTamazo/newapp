import {View, Text, Button, Image} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
const ChatHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-4 h-16">
      <View className=" items-center justify-center bg-gray-200/90 w-10 h-10  rounded-md">
        <FontAwesomeIcon icon={faSearch} size={18} color="#333" />
      </View>
      <View>
        <Text className="font-semibold text-slate-900 text-xl">Messages</Text>
      </View>
      <View className="items-center justify-center">
        <Image
          className="w-10 h-10"
          source={require('../../assets/avatar.png')}
        />
      </View>
    </View>
  );
};

export default ChatHeader;
