import React from "react";
import { View } from "react-native";

const Section = props => {
  return <View style={[styles.viewStyle, props.style]}>{props.children}</View>;
};

const styles = {
  viewStyle: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { Section };
