import React from "react";
import {  View, Image } from "react-native";
import { CardItem, Right } from "native-base";

const RecommendedCardItem = ({
  imageUri
}) => {
  return (
    <CardItem>
      <View>
        <Image style={{ height: 250, width: 450 }} source={imageUri} />
      </View>
    </CardItem>
  );
};

export default RecommendedCardItem;
