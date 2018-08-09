import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const RainbowButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: "#80B2BE",
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 40,
    padding: 30,
    margin: 10,
    marginLeft: 30,
    marginRight: 30
  },
  labelStyle: {
    color: "#707070",
    fontSize: 20
  }
};

export { RainbowButton };
