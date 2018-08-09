import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const IconButton = ({ iconName, onPress, size }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={size} color="#80B2BE" />
    </TouchableOpacity>
  );
};

export { IconButton };
