import React from "react";
import { View, Button, Share } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function ShareButton({ content }) {
  const handleShare = async () => {
    try {
      await Share.share({
        message: content,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <View style={{alignItems:'flex-end'}}>
        <Entypo name="share" size={24} color="black" onPress={handleShare}/>
    </View>
  );
}
