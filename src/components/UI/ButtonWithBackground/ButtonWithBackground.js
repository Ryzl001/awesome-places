import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const ButtonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, { backgroundColor: props.backgroundColor }]}>
      <Text style={{ color: props.color, fontWeight: "bold" }}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 3
  }
});

export default ButtonWithBackground;
