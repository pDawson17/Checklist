//generic background tag, inside of which are sections! should fill screen
import React from "react";
import { View } from "react-native";

const Background = props => {
  return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
  viewStyle: {
    backgroundColor: "#262A2C",
    flex: 1
  }
};

export { Background };
